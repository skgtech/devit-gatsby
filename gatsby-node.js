const path = require('path')
const crypto = require('crypto')
const yaml = require('js-yaml')
const fs = require('fs')

const landingTemplate = path.resolve('./src/templates/landing.js')
const previousTemplate = path.resolve('./src/templates/previous.js')

const loadYaml = file => yaml.safeLoad(fs.readFileSync(`./src/data/${file}`, 'utf8'))

const configData = loadYaml('config/config.yml')
const scheduleTalksData = loadYaml('schedule/schedule.yml').talks

const albumPhotos2018Data = loadYaml('albumphotos/2018.yml')

const previous2018Data = loadYaml('previous/2018.yml')

const speakers2015Data = loadYaml('speakers/2015.yml')
const speakers2016Data = loadYaml('speakers/2016.yml')
const speakers2017Data = loadYaml('speakers/2017.yml')
const speakers2018Data = loadYaml('speakers/2018.yml')
const speakers2019Data = loadYaml('speakers/2019.yml')

const sponsors2018Data = loadYaml('sponsors/2018.yml')
const sponsors2019Data = loadYaml('sponsors/2019.yml')

const talks2015Data = loadYaml('talks/2015.yml')
const talks2016Data = loadYaml('talks/2016.yml')
const talks2017Data = loadYaml('talks/2017.yml')
const talks2018Data = loadYaml('talks/2018.yml')
const talks2019Data = loadYaml('talks/2019.yml')

const partnersData = loadYaml('team/partners.yml')
const weSupportData = loadYaml('team/weSupport.yml')
const volunteersData = loadYaml('team/volunteers.yml')

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
const AlbumPhotoNode = createNodeFactory(`AlbumPhoto`)
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

module.exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `/`,
    component: landingTemplate,
    context: {
      year: 2018,
    },
  })

  createPage({
    path: `2018`,
    component: previousTemplate,
    context: {
      year: 2018,
      ...previous2018Data,
    },
  })
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

  albumPhotos2018Data.forEach(item =>
    createNodeWithImage(
      AlbumPhotoNode({
        year: 2018,
        ...item,
      }),
      path.basename(`./src/images/${item.id}`)
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
