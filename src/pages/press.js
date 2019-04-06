import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import Block from '../components/blocks/Block'
import { DarkBlockHeading } from '../components/blocks/BlockHeading'
import { DarkLeading } from '../components/blocks/Leading'
import Menu from '../components/blocks/Menu/Menu'
import Footer from '../components/blocks/Footer'
import Header from '../components/blocks/Header'

const Photo = ({ title, url }) => (
  <Col md={4}>
    <img
      src={url}
      alt={title}
      css={css`
        width: 100%;
      `}
    />
  </Col>
)

const MorePhotosCTA = () => (
  <Col
    md={4}
    css={css`
      position: relative;
    `}
  >
    <img
      css={css`
        width: 100%;
      `}
      src="/assets/images/press/background.svg"
      alt="More images"
    />
    <a
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 200px;
        height: 20px;

        color: #57585a;
      `}
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.facebook.com/pg/DEVitConf/photos/"
    >
      Browse all photos <i class="fas fa-long-arrow-alt-right" />
    </a>
  </Col>
)

const Logo = ({ title, svg, png, png2x, png3x }) => (
  <Col md={6}>
    <div
      css={css`
        background-color: #f5f8fa;
        padding: 80px;
      `}
    >
      <img
        css={css`
          max-width: 304px;
          max-height: 128px;
          width: 100%;
          height: 100%;
        `}
        src={svg}
        alt="DEVit logo"
      />
    </div>
    <div
      css={css`
        font-size: 1.33em;
        font-weight: bold;
        color: #57585a;
        margin-top: 24px;
        margin-bottom: 16px;
      `}
    >
      {title}
    </div>
    <div>
      <a rel="noopener noreferrer" target="_blank" href={svg}>
        SVG
      </a>{' '}
      or
      <a rel="noopener noreferrer" target="_blank" href={png}>
        PNG
      </a>
      (
      <a rel="noopener noreferrer" target="_blank" href={png2x}>
        2x
      </a>
      ,
      <a rel="noopener noreferrer" target="_blank" href={png3x}>
        3x
      </a>
      )
    </div>
  </Col>
)

export default ({ title, description, image }) => {
  return (
    <Layout title={`Press page`}>
      <Header />
      <Grid>
        <Block
          css={css`
            margin-bottom: 72px;
          `}
        >
          <DarkBlockHeading>Some copy samples</DarkBlockHeading>
          <DarkLeading>One liner</DarkLeading>
          <p>DEVit, the 360° Web Development Conference</p>

          <br />
          <DarkLeading>Short description</DarkLeading>
          <p>
            DEVit is the 360° Web Development Conference, frontend, backend,
            devops, mobile, we want to get you out of your comfort zone and
            cross pollinate all arts and crafts that make today’s World Wide Web
            possible.
          </p>
        </Block>
        <Block
          css={css`
            margin-bottom: 72px;
          `}
        >
          <DarkBlockHeading>Press Release</DarkBlockHeading>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1rKfM-XDaBOLDJVYZUPArh3lij9CksSIB/view"
            >
              In Greek
            </a>
          </p>
        </Block>
        <Block
          css={css`
            margin-bottom: 72px;
          `}
        >
          <DarkBlockHeading>Our logo</DarkBlockHeading>
          <Row>
            <Logo
              title="Cover Logo"
              svg="/assets/images/logo/blue/logo.svg"
              png="/assets/images/logo/blue/logo.png"
              png2x="/assets/images/logo/blue/logo@2x.png"
              png3x="/assets/images/logo/blue/logo@3x.png"
            />
            <Logo
              title="Dark Logo"
              svg="/assets/images/logo/grey/logo.svg"
              png="/assets/images/logo/grey/logo.png"
              png2x="/assets/images/logo/grey/logo@2x.png"
              png3x="/assets/images/logo/grey/logo@3x.png"
            />
            <Logo
              title="White Logo"
              svg="/assets/images/logo/white/logo.svg"
              png="/assets/images/logo/white/logo.png"
              png2x="/assets/images/logo/white/logo@2x.png"
              png3x="/assets/images/logo/white/logo@3x.png"
            />
            <Logo
              title="Block Logo"
              svg="/assets/images/logo/black/logo.svg"
              png="/assets/images/logo/black/logo.png"
              png2x="/assets/images/logo/black/logo@2x.png"
              png3x="/assets/images/logo/black/logo@3x.png"
            />
          </Row>
        </Block>
        <Block
          css={css`
            margin-bottom: 72px;
          `}
        >
          <DarkBlockHeading>Photos</DarkBlockHeading>
          <Grid>
            <Photo
              title="DEVit 2017"
              url="/assets/images/press/DEVit_2017_1_small.jpg"
            />
            <Photo
              title="DEVit 2017"
              url="/assets/images/press/DEVit_2017_2_small.jpg"
            />
            <Photo
              title="DEVit 2017"
              url="/assets/images/press/DEVit_2017_3_small.jpg"
            />
            <Photo
              title="DEVit 2017"
              url="/assets/images/press/DEVit_2017_4_small.jpg"
            />
            <Photo
              title="DEVit 2017"
              url="/assets/images/press/DEVit_2017_5_small.jpg"
            />
            <MorePhotosCTA />
          </Grid>

          <DarkLeading>
            Photos are copyrighted with{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://creativecommons.org/licenses/by-sa/4.0/"
            >
              CC BY-SA 4.0
            </a>{' '}
            and it is required that credits will follow them on each usage:
            Dimitris Tsakiris,{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/Dimitris.Tsakiris.Photo/"
            >
              www.dimitristsakiris.com
            </a>
          </DarkLeading>
        </Block>
      </Grid>
      <Footer />
    </Layout>
  )
}
