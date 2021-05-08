import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const LifeTimeLink = <Link to="/lifetime">View Project Details</Link>
const PalettteLink = <Link to="/palettteapp">View Project Details</Link>
const KellerkindLink = <Link to="/kellerkind">View Project Details</Link>
const BamLink = <Link to="/bam">View Project Details</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={LifeTimeLogo()}
            title="UniCards"
            abstract="New-age credit cards catering to the unmet needs of millions of Indians."
            link={LifeTimeLink}
          />
          <Project
            logo={PalettteAppLogo()}
            title="Fisdom"
            abstract="Fisdom is an extremely simple app to make smart investments."
            link={PalettteLink}
          />
          <Project
            logo={KellerkindLogo()}
            title="Yulu"
            abstract="Micro-mobility solutions that help reduce traffic congestion and air pollution.
            As the first UX writer in the house, I was responsible to create a standard documentation for the company to KKKKset the content guidelines.
            "
            link={KellerkindLink}
          />
          <Project
            logo={BamLogo()}
            title="ABB"
            abstract="ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future.
            Have worked in the content team under Corporate Communication to develop content for the global audience
            "
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
