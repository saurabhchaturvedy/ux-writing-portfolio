import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'
import TwoImage from 'components/article/twoimage'
import FullSizeImage from 'components/article/fullsizeimage'

import BamCoverImage from 'img/articles/bam/jj_climbing.jpg'
import AfterClimbImage1 from 'img/articles/bam/afterclimb_wireframe.jpg'
import AfterClimbImage2 from 'img/articles/bam/afterclimb_textured.jpg'
import AfterClimbImage3 from 'img/articles/bam/afterclimb_montage.jpg'
import AfterClimbImage4 from 'img/articles/bam/afterclimb_logo.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Bam = () => {
  return (
    <GlobalWrapper>
      <Header title="ABB" />
      <Section>
        <ContentWrapper>
          <h2>Worked as a Content Writing Intern</h2>

          <ul>
<li> Worked with the only content team of ABB globally.</li>
<li> Wrote Press release for ABB Hitachi deal.</li>
<li> Wrote articles on sustainable transportation.</li>
<li> Covered many transportation deals on the global level.</li>
<li>Read and researched about ABB sustainable businesses.</li>
<li>Crafted mails for internal communication for ABB, India.</li>
          </ul>
          
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Bam
