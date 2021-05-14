import React from 'react'
import styled from 'styled-components'

import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'

import CoverSrc from 'img/articles/lifetime/lifetime-cover.svg'
import SilosSrc from 'img/articles/lifetime/lifetime-silos.svg'
import Silos2Src from 'img/articles/lifetime/lifetime-silos2.svg'
import UISrc from 'img/articles/lifetime/lifetime-app.jpg'
import UI2Src from 'img/articles/lifetime/lifetime-app2.jpg'
import TasksSrc from 'img/articles/lifetime/lifetime-tasks.jpg'
import OnboardingSrc from 'img/articles/lifetime/lifetime-illustration.svg'
import DesktopSrc from 'img/articles/lifetime/lifetime-desktop.jpg'
import PaperPlaneSrc from 'img/articles/lifetime/lifetime-paperplane.svg'
import TypeIconsSrc from 'img/articles/lifetime/lifetime-typeicons.svg'
import IconsSrc from 'img/articles/lifetime/lifetime-icons.svg'
import ColorsSrc from 'img/articles/lifetime/lifetime-colors.jpg'
import LetterBoxSrc from 'img/articles/lifetime/lifetime-letterbox.jpg'
import LogoSrc from 'img/articles/lifetime/lifetime-logo.svg'
import HeartSpinnerSrc from 'img/articles/lifetime/lifetime-logoanimation.gif'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImageGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: center;
  ${media.lg`
    padding: 32px;
    margin: 0 0 24px 0;
  `}
  ${media.md`
    margin: 0;
    margin: 0 0 16px 0;
  `}
  ${media.sm`
    padding: 16px;
  `}
`

const Img = styled.img`
  max-width: calc(100% - 96px);
  max-height: 300px;
  margin: 8px;
  display: inline-block;
  ${media.xl`
    max-height: 240px;
  `}
  ${media.lg`
    max-height: 200px;
  `}
  ${media.md`
    max-height: 120px;
    margin: 4px;
  `}
  ${media.sm`
    max-height: 80px;
    margin: 2px;
  `}
`

const LifeTime = () => {
  return (
    <GlobalWrapper>
      <Header title="Uni Cards" />
      <Section>
        <ContentWrapper>
          <h2>The project is confidential as of now because the product is yet to be launched.</h2>
          <ul>
<li> Collaborated with different stakeholders and written for more than 10 various features from scratch.</li>
<li> Wrote for on-app, off app, website copy for the product.</li>
<li> Worked with QA to ensure the end to end quality and consistency of UX Copy.</li>
<li> Created a process to ensure the right balance between the design and product stakeholders.</li>
<li>Wrote everything in line with the compliance to ensure the regulations are in place while communicating to the user..</li>
          </ul>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default LifeTime
