import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import ScenographicsLogo from 'img/scenographicslogo'

const ScenographicsLink = (
  <a href="https://medium.com/@rchaturvedi67" target="_blank">Read More on Medium ↗</a>
)

const Writing = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          logo={ScenographicsLogo()}
          abstract="When not working on a UX-copy , i write at medium"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
