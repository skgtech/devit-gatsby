const path = require('path')
const mimeDb = require('mime-db')
const crypto = require('crypto')
const yaml = require('js-yaml');
const fs = require('fs');

const configData = yaml.safeLoad(fs.readFileSync('./src/data/config/config.yml', 'utf8'));
const devitweekData = yaml.safeLoad(fs.readFileSync('./src/data/devitweek/schedule.yml', 'utf8'));
const scheduleTalksData = yaml.safeLoad(fs.readFileSync('./src/data/schedule/schedule.yml', 'utf8')).talks;
const speakersData = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2018.yml', 'utf8'));
const sponsorsData = yaml.safeLoad(fs.readFileSync('./src/data/sponsors/all.yml', 'utf8'));
const sponsors2018Data = yaml.safeLoad(fs.readFileSync('./src/data/sponsors/2018.yml', 'utf8'));
const talksData = yaml.safeLoad(fs.readFileSync('./src/data/talks/2018.yml', 'utf8'));
const partnersData = yaml.safeLoad(fs.readFileSync('./src/data/team/partners.yml', 'utf8'));
const weSupportData = yaml.safeLoad(fs.readFileSync('./src/data/team/weSupport.yml', 'utf8'));
const volunteersData = yaml.safeLoad(fs.readFileSync('./src/data/team/volunteers.yml', 'utf8'));

function createNodeFactory (type) {
  return function (object, overrides) {
    const o = {
      ...object,
      children: [],
      parent: `__SOURCE__`,
      internal: {
        type: type,
      },
      ...overrides
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(o))
      .digest(`hex`)

    o.internal.contentDigest = contentDigest

    return o;
  }
}

function createNodeWithImageFactory(createNode, imagesIndex) {
  return function (node, key) {
    delete node.img;

    createNode({
      ...node,
      img___NODE: imagesIndex.get(key),
    });
  };
}

const ConfigNode = createNodeFactory(`Config`);
const SpeakerNode = createNodeFactory(`Speaker`);
const TalkNode = createNodeFactory(`Talk`);
const SponsorNode = createNodeFactory(`Sponsor`);
const VolunteerNode = createNodeFactory(`Volunteer`);
const PartnerNode = createNodeFactory(`Partner`);
const WeSupportNode = createNodeFactory(`WeSupport`);
const ScheduleNode = createNodeFactory(`Schedule`);
const ScheduleEntryNode = createNodeFactory(`ScheduleEntry`);
const ImageNode = createNodeFactory(`SponsorImage`);

// Store images node so we can feed them to
// their connected nodes upon creation
//
// E.g. we are creating Sponsors nodes on sourceNodes event
// we listen to onCreateNode to create this index with all images
// and then we create each Sponsor we fetch it's image from this index
//
// @see https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
// @see https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
const imagesIndex = new Map();
exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'File') {
    imagesIndex.set(path.basename(node.absolutePath), node.id);
  }
}

module.exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const createNodeWithImage = createNodeWithImageFactory(createNode, imagesIndex);

  createNode(ConfigNode({
    id: 'Config',
    ...configData
  }));

  speakersData.forEach(function (speaker) {
    let i = 0;
    speaker.id = speaker.url;
    const children = [];
    talksData.forEach(function (talk) {
      if (talk.speaker === speaker.url) {
        talk.id = `${i}-${speaker.url}`;
        i = i + 1;
        children.push(talk.id)
      }
    })

    createNodeWithImage(SpeakerNode(speaker, {
      children: children
    }), speaker.image_filename)

    talksData.forEach(function (talk) {
      if (talk.speaker === speaker.url) {
        createNode(TalkNode(talk, {
          parent: speaker.id
        }))
      }
    })
  })

  const scheduleItems = [];
  let i = 0;
  scheduleTalksData.forEach(function (entry) {
    if (entry.type === 'talk') {
      talksData.forEach(function (talk) {
        if (talk.speaker === entry.speaker) {
          scheduleItems.push(talk.id);
        }
      })
    } else {
      entry.id = `${i}-${entry.type}`
      createNode(ScheduleEntryNode(entry));
      scheduleItems.push(`${i}-${entry.type}`)
      i = i + 1;
    }
  })

  createNode(ScheduleNode({
    id: `2018`
  }, {
    children: scheduleItems
  }))

  sponsorsData.forEach(item => createNodeWithImage(SponsorNode({
    ...item
  }), path.basename(`./src/images/${item.img}`)));

  partnersData.forEach(function (partnersRow) {
    partnersRow.forEach(item => createNodeWithImage(PartnerNode({
      id: item.name,
      ...item
    }), path.basename(`./src/images/${item.img}`)));
  })

  weSupportData.forEach(function (weSupportRow) {
    weSupportRow.forEach(item => createNodeWithImage(WeSupportNode({
      id: item.name,
      ...item
    }), path.basename(`./src/images/${item.img}`)));
  })

  volunteersData.forEach(function (volunteer) {
    createNode(VolunteerNode({
      id: volunteer.name,
      ...volunteer
    }))
  });
}
