import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          
          <Big>
          Hi. I'm Richa, a UX Writer at Uni Cards, Bangalore, India. I write to make technology more human, simple, positive and user-centric. Graduated in English(honours) from University of Delhi in 2020. 
          </Big>
          <p>
          How come from language to product? Trust me; it's filmier than it sounds. After having a great 3 months internship at ABB, India, I thought to try my hands in a startup. A day before my internship at Yulu, I landed in Bengaluru at around 5:00 am and went to attend a meetup on UX Writing, almost 3 hours later. Heard the term for the first time, trust me.  I eventually got a shift from a marketing copywriter intern to a UX Writer intern at Yulu. After that, I graduated and started my full-time journey with Fisdom and later joined the founding team of <a href="https://techcrunch.com/2020/10/05/india-uni-credit-card-startup-raises-18-5-million/" target="_blank" >Uni Cards</a>, a fintech startup that raised one of India's largest seed financing rounds and is yet to be launched.
          </p>
          <p style={{ marginBottom: 0 }}>
          When not working, you can find me petting dogs, watching standup comedy or animated movies.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
