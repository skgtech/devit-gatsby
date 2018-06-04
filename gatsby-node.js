const crypto = require(`crypto`)

const config = require('./src/data/config/config.json');
const devitweek = require('./src/data/devitweek/schedule.json');
const scheduleTalks = require('./src/data/schedule/2018.json').talks;
const speakers = require('./src/data/speakers/2018.json');
const sponsors = require('./src/data/sponsors/2018.json');
const talks = require('./src/data/talks/2018.json');
const partners = require('./src/data/team/partners.json');
const weSupport = require('./src/data/team/weSupport.json');
const volunteers = require('./src/data/team/volunteers.json');

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

const ConfigNode = createNodeFactory(`Config`);
const SpeakerNode = createNodeFactory(`Speaker`);
const TalkNode = createNodeFactory(`Talk`);
const SponsorNode = createNodeFactory(`Sponsor`);
const VolunteerNode = createNodeFactory(`Volunteer`);
const PartnerNode = createNodeFactory(`Partner`);
const WeSupportNode = createNodeFactory(`WeSupport`);
const ScheduleNode = createNodeFactory(`Schedule`);
const ScheduleEntryNode = createNodeFactory(`ScheduleEntry`);

module.exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  createNode(ConfigNode({
    id: 'Config',
    ...config
  }));

  speakers.forEach(function (speaker) {
    let i = 0;
    speaker.id = speaker.url;
    const children = [];
    talks.forEach(function (talk) {
      if (talk.speaker === speaker.url) {
        talk.id = `${i}-${speaker.url}`;
        i = i + 1;
        children.push(talk.id)
      }
    })

    createNode(SpeakerNode(speaker, {
      children: children
    }))

    talks.forEach(function (talk) {
      if (talk.speaker === speaker.url) {
        createNode(TalkNode(talk, {
          parent: speaker.id
        }))
      }
    })
  })

  const scheduleItems = [];
  let i = 0;
  scheduleTalks.forEach(function (entry) {
    if (entry.type === 'talk') {
      talks.forEach(function (talk) {
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

  Object.keys(sponsors).forEach(function (type) {
    sponsors[type].forEach(function (sponsorRow) {
      sponsorRow.forEach(function (sponsor) {
        createNode(SponsorNode({
          id: sponsor.name,
          ...sponsor
        }))
      });
    });
  })

  partners.forEach(function (partnersRow) {
    partnersRow.forEach(function (partner) {
      createNode(PartnerNode({
        id: partner.name,
        ...partner
      }))
    });
  })

  weSupport.forEach(function (weSupportRow) {
    weSupportRow.forEach(function (weSupport) {
      createNode(WeSupportNode({
        id: weSupport.name,
        ...weSupport
      }))
    });
  })

  volunteers.forEach(function (volunteer) {
    createNode(VolunteerNode({
      id: volunteer.name,
      ...volunteer
    }))
  });
}
