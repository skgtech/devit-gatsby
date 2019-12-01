const path = require('path')
const crypto = require('crypto')
const yaml = require('js-yaml')
const fs = require('fs')

const configData = yaml.safeLoad(fs.readFileSync('./src/data/config/config.yml', 'utf8'))
const scheduleTalksData = yaml.safeLoad(fs.readFileSync('./src/data/schedule/schedule.yml', 'utf8'))
  .talks

const speakers2015Data = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2015.yml', 'utf8'))
const speakers2016Data = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2016.yml', 'utf8'))
const speakers2017Data = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2017.yml', 'utf8'))
const speakers2018Data = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2018.yml', 'utf8'))
const speakers2019Data = yaml.safeLoad(fs.readFileSync('./src/data/speakers/2019.yml', 'utf8'))

const sponsors2018Data = yaml.safeLoad(fs.readFileSync('./src/data/sponsors/2018.yml', 'utf8'))
const sponsors2019Data = yaml.safeLoad(fs.readFileSync('./src/data/sponsors/2019.yml', 'utf8'))

const talks2015Data = yaml.safeLoad(fs.readFileSync('./src/data/talks/2015.yml', 'utf8'))
const talks2016Data = yaml.safeLoad(fs.readFileSync('./src/data/talks/2016.yml', 'utf8'))
const talks2017Data = yaml.safeLoad(fs.readFileSync('./src/data/talks/2017.yml', 'utf8'))
const talks2018Data = yaml.safeLoad(fs.readFileSync('./src/data/talks/2018.yml', 'utf8'))
const talks2019Data = yaml.safeLoad(fs.readFileSync('./src/data/talks/2019.yml', 'utf8'))

const partnersData = yaml.safeLoad(fs.readFileSync('./src/data/team/partners.yml', 'utf8'))
const weSupportData = yaml.safeLoad(fs.readFileSync('./src/data/team/weSupport.yml', 'utf8'))
const volunteersData = yaml.safeLoad(fs.readFileSync('./src/data/team/volunteers.yml', 'utf8'))

function createNodeFactory(type) {
  return function(object, overrides) {
    const o = {
      ...object,
      children: [],
      parent: `__SOURCE__`,
      internal: {
        type: type,
      },
      ...overrides,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(o))
      .digest(`hex`)

    o.internal.contentDigest = contentDigest

    return o
  }
}

function createNodeWithImageFactory(createNode, imagesIndex) {
  return function(node, key) {
    delete node.img

    createNode({
      ...node,
      img___NODE: imagesIndex.get(key),
    })
  }
}

const ConfigNode = createNodeFactory(`Config`)
const SpeakerNode = createNodeFactory(`Speaker`)
const TalkNode = createNodeFactory(`Talk`)
const SponsorNode = createNodeFactory(`Sponsor`)
const VolunteerNode = createNodeFactory(`Volunteer`)
const PartnerNode = createNodeFactory(`Partner`)
const WeSupportNode = createNodeFactory(`WeSupport`)
const ScheduleNode = createNodeFactory(`Schedule`)
const ScheduleEntryNode = createNodeFactory(`ScheduleEntry`)
// const ImageNode = createNodeFactory(`SponsorImage`)

// Store images node so we can feed them to
// their connected nodes upon creation
//
// E.g. we are creating Sponsors nodes on sourceNodes event
// we listen to onCreateNode to create this index with all images
// and then we create each Sponsor we fetch it's image from this index
//
// @see https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
// @see https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
const imagesIndex = new Map()
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'File') {
    imagesIndex.set(path.basename(node.absolutePath), node.id)
  }
}

module.exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const createNodeWithImage = createNodeWithImageFactory(createNode, imagesIndex)

  createNode(
    ConfigNode({
      id: 'Config',
      ...configData,
    })
  )

  const talksData = talks2015Data
    .map(t => ({ ...t, year: 2015 }))
    .concat(talks2016Data.map(t => ({ ...t, year: 2016 })))
    .concat(talks2017Data.map(t => ({ ...t, year: 2017 })))
    .concat(talks2018Data.map(t => ({ ...t, year: 2018 })))
    .concat(talks2019Data.map(t => ({ ...t, year: 2019 })))

  const speakersData = speakers2015Data
    .map(t => ({ ...t, year: 2015 }))
    .concat(speakers2016Data.map(t => ({ ...t, year: 2016 })))
    .concat(speakers2017Data.map(t => ({ ...t, year: 2017 })))
    .concat(speakers2018Data.map(t => ({ ...t, year: 2018 })))
    .concat(speakers2019Data.map(t => ({ ...t, year: 2019 })))

  speakersData.forEach(function(speaker) {
    let i = 0
    speaker.id = speaker.url
    const children = []
    talksData.forEach(function(talk) {
      if (talk.speaker === speaker.url) {
        talk.id = `${i}-${speaker.url}`
        i = i + 1
        children.push(talk.id)
      }
    })

    if (!Array.isArray(speaker.hereFor)) {
      speaker.hereFor = [speaker.hereFor]
    }

    createNodeWithImage(
      SpeakerNode(speaker, {
        children: children,
      }),
      path.basename(`./src/images/speakers/${speaker.year}/${speaker.image_filename}`)
    )

    talksData.forEach(function(talk) {
      if (talk.speaker === speaker.url) {
        createNode(
          TalkNode(talk, {
            parent: speaker.id,
            speaker___NODE: speaker.id,
          })
        )
      }
    })
  })

  const scheduleItems = []
  let i = 0
  scheduleTalksData.forEach(function(entry) {
    if (entry.type === 'talk') {
      talksData.forEach(function(talk) {
        if (talk.speaker === entry.speaker) {
          scheduleItems.push(talk.id)
        }
      })
    } else {
      entry.id = `${i}-${entry.type}`
      createNode(ScheduleEntryNode(entry))
      scheduleItems.push(`${i}-${entry.type}`)
      i = i + 1
    }
  })

  createNode(
    ScheduleNode(
      {
        id: `2018`,
      },
      {
        children: scheduleItems,
      }
    )
  )

  sponsors2018Data.forEach(item =>
    createNodeWithImage(
      SponsorNode({
        year: 2018,
        id: `${item.name}_2018`,
        ...item,
      }),
      path.basename(`./src/images/${item.img}`)
    )
  )
  sponsors2019Data.forEach(item =>
    createNodeWithImage(
      SponsorNode({
        year: 2019,
        id: `${item.name}_2019`,
        ...item,
      }),
      path.basename(`./src/images/${item.img}`)
    )
  )

  partnersData.forEach(function(partnersRow) {
    partnersRow.forEach(item =>
      createNodeWithImage(
        PartnerNode({
          id: item.name,
          ...item,
        }),
        path.basename(`./src/images/${item.img}`)
      )
    )
  })

  weSupportData.forEach(function(weSupportRow) {
    weSupportRow.forEach(item =>
      createNodeWithImage(
        WeSupportNode({
          id: item.name,
          ...item,
        }),
        path.basename(`./src/images/${item.img}`)
      )
    )
  })

  volunteersData.forEach(function(volunteer) {
    createNode(
      VolunteerNode({
        id: volunteer.name,
        ...volunteer,
      })
    )
  })
}
