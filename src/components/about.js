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
            Hi. I'm Richa, a UX Writer at Uni Cards, Bangalore (India) . I bring
            ideas to life with communication and empathy .
          </Big>
          <p>
          I started my post college journey with Fisdom, a Fintech startup which dealt with financial services like loan, insurance, mutual funds, gold etc. I was a UX Writer in their Product team.
          </p>
          <p>
            Right now, I'm working as a UX Writer in the founding team of {' '}
            <Link to="/lifetime">Uni Cards</Link> which is yet to be launched .
          </p>
          <p style={{ marginBottom: 0 }}>
          When not working you can find me petting dogs, watching Standup Comics or writing arguments for a debating competition.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
