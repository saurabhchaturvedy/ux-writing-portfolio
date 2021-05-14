import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'
import Spirograph from 'components/spirograph'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Link from 'gatsby-link'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Hero = () => {
  return (
    <HeroSection>
    <Spirograph>
    
      </Spirograph>
      
    <Header />
  </HeroSection>
  )
}
export default Hero
