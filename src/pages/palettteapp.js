import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'
import FullSizeImage from 'components/article/fullsizeimage'

import Fisdom1 from 'img/articles/palettteapp/fisdom1.png'
import Fisdom4 from 'img/articles/palettteapp/fisdom4.png'
import Fisdom5 from 'img/articles/palettteapp/fisdom5.png'
import Fisdom6 from 'img/articles/palettteapp/fisdom6.png'
import Fisdom10 from 'img/articles/palettteapp/fisdom10.png'
import Fisdom80 from 'img/articles/palettteapp/fisdom80.png'
import Fisdom90 from 'img/articles/palettteapp/fisdom90.png'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const PalettteApp = () => {
  return (
    <GlobalWrapper>
      <Header title="Fisdom" />
      <Section>
        <ContentWrapper>
          <h2>Note : All the assets and projects are solemnly a property of Fisdom</h2>
          <ul>
<li> Created a style guideline to define copy principles, tone, consistency around the overall application.</li>
<li> Used the data-driven method to understand the impact of the various copies.</li>
<li> Collaborated efficiently in the remote working space using Jira, Slack, Figma and Marvel.</li>
<li> Worked on multiple product journeys like landing page, Insurances, mutual funds, gold and investments for high networking individuals.</li>
          </ul>
          <h3>Projects at Fisdom</h3>
          <h4>Styleguide</h4>
          <i>Since I was the first UX Writer at fisdom, I was given a job to develop the styleguide for the overall team.</i>
          <p>
         <b>Problem statement</b>: The Indian space of investors are very conservative when it comes to investing money, because of the idea of risk which is consistent with high returns. The communication is very important at this point, but the communication at fisdom was inconsistent and not very empathetic.
          </p>
          <p>
          <b>Approach</b>: I started with creating a UX Writing Styleguideline for the product. I conducted a survey to understand the space of investors and then created the extensive tone and writing of the product.
          </p>
          <p>
          <b>Solution</b>: I made the screens more interactive and motivating to pump up the users to invest and explore.
          </p>
          <p>
          The content style guideline of fisdom is published internally as of now and is inspired from the style guideline of Microsoft, Spotify and Slack.
          </p>
<h4>Created the content for the homepage</h4>
<FullSizeImage src={Fisdom4} />
<br></br>
<h4>Created a better tone of empathy in the Fintech space</h4>
<br></br>
<LargeImage src={Fisdom5}/>
<br></br>
<h3>Insurance</h3>
<br></br>
<FullSizeImage src={Fisdom6} />
<br></br>
<h3>Gold</h3>
<LargeImage src={Fisdom10} />
<br></br>
<h3>Personal Loan</h3>
<LargeImage src={Fisdom90} />
<br></br>
<h3>Building Trust</h3>
<LargeImage src={Fisdom80} />
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default PalettteApp
