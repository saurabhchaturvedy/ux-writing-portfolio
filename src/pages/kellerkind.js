import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'


import Yulu1 from 'img/articles/kellerkind/yulu1.png'
import Yulu2 from 'img/articles/kellerkind/yulu2.png'
import Yulu3 from 'img/articles/kellerkind/yulu3.png'
import Yulu4 from 'img/articles/kellerkind/yulu4.png'
import Yulu5 from 'img/articles/kellerkind/yulu5.png'
import Yulu6 from 'img/articles/kellerkind/yulu6.png'
import Yulu7 from 'img/articles/kellerkind/yulu7.png'
import Yulu8 from 'img/articles/kellerkind/yulu8.png'
import Yulu9 from 'img/articles/kellerkind/yulu9.png'
import Yulu10 from 'img/articles/kellerkind/yulu10.png'
import Yulu11 from 'img/articles/kellerkind/yulu11.png'
import Yulu12 from 'img/articles/kellerkind/yulu12.png'
import FullSizeImage from '../components/article/fullsizeimage'


const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Kellerkind = () => {
  return (
    <GlobalWrapper>
      <Header title="Yulu" />
      <Section>
        <ContentWrapper>
        <h2>Note : All the assets and projects are solemnly a property of Yulu</h2>
          <h3>Style guidelines for Yulu and revamping the whole app communication</h3>

          <p>
          As the first UX writer in the house, I was responsible to create a standard documentation for the company to set the content guidelines. The guidelines are being followed by everyone from the marketing team, developers, business and in the product. 
          </p>
          <p>
          The guidelines also include the voice and tone of the product. Basically, it defines how we want to establish a tone of Yulu as a product. Currently, the guidelines are being used internally-only and will be published soon. 
            </p>
            <p>
            I also worked on creating many friendly & easy response messages collaborating with the developers and removed cluttered & too-wordy texts.
              </p>
              <br></br>
              <FullSizeImage src={Yulu1}/>
              <br></br>
              <FullSizeImage src={Yulu2}/>
              <br></br>
              <h3>Designing v4.0</h3>
              <br></br>
              <h4>Destination Yulu Zone</h4>
              <p>
              We’ve just come up with the 4.0 design update a few weeks back. There are almost 5 projects in the 4.0 that I have worked upon. 
              One of them was designing the home page </p>
              <p>
              <b>Problem statement</b> : Most users have feedback that when they take a Yulu ride they don’t know where to park as Yulu is a zone to zone-based vehicle sharing mode.  To see a zone near their destination, they had to look into the Gmaps which weren't efficient because of switching apps while riding.
              </p>
              <br></br>
              <FullSizeImage src={Yulu3}/>
              <br></br>
              <p>
              <b>Solution</b> :
The designers implemented the destination feature on the home page but again new users were not able to understand why they needed to search for a Yulu Zone to end a ride. Here’s how I solved this problem using the secondary text
</p>
<br></br>
<FullSizeImage src={Yulu4}/>
<br></br>
<FullSizeImage src={Yulu5}/>
<br></br>
<p>
<b>Onboarding</b> : The previous onboarding was not very interactive and did not have a complete tutorial of what happens inside the application. What Yulu is for, how to start with it and many onboarding related emotions.
</p>
<p>This is how I solved it. With the help of “taking one little step at a time.”</p>
<br></br>
<FullSizeImage src={Yulu6}/>
<br></br>
<FullSizeImage src={Yulu7}/>
<br></br>
<p>
<b>Location permission</b> : The previous location permission used to ask
 the location data to the user but there was no reasoning of why we need such sensitive information. 
 </p>
 <p>Here it how I solved this problem</p>
 <br></br>
<LargeImage src={Yulu9}/>
<br></br>
<p>
<b>Loyalty program</b> : To motivate the users we came up with a loyalty program. I came up with the right name for the coins and the loyalty program and designed this screen.
     </p>
     <br></br>
     <p>There are four other major design projects in which I’ve worked, which are in development & will be soon out in upcoming releases.</p>
     <LargeImage src={Yulu8}/>
     <br></br>
     <h3>Contributed to the new design of Help & Support</h3>
     <p>
     <b>Problem statement</b> : In the previous design, the user was mostly stuck in finding the solutions as the no. of clicks were a lot more which was inefficient user experience. Also, the user was more implied to search his/her solution to the problem.
     </p>
     <p>
     <b>Solution</b> : I took the data from the analysts to find the most searched/clicked problem and then wrote them on the design upfront, hence reducing the no. of clicks & made it more transparent. 
       </p>
       <br></br>
       <FullSizeImage src={Yulu10}/>
       <br></br>
       <FullSizeImage src={Yulu11}/>
       <br></br>
       <p>
      <b> Redesigning refer & earn</b> : The motive for this was to fix the text as well as fix the tonality of the same and make it more friendly so it can imply the feelings of sharings.
</p>
<br></br>
<FullSizeImage src={Yulu12}/>
<br></br>
<h3>User researching & Usability testing</h3>
<p>
As a leader of the UX research project, I made an end to end process to streamline the first-ever UX research process in Yulu. I divided the process into four different tasks. 
First was finalizing the agenda of the process according to a particular problem or situation. Secondly, I used to create a proper list of questions according to each cohort and divide them into a list and calling slots.
  </p>
  <p>
  Third, was the main when the calls used to happen. I love this process as I am a people- person and love to talk. Lastly, I used to take data and create data charts to highlight the major issue. The issue is then further forwarded & solved.
    </p>
    <p>
    Having said, I love talking. I also created the end to end process for usability testing which was first conducted during the release of 4.0 design.  I onboarded users for interviews, set meetings & took their feedback on the UI. Though it was remote with the help of the right tools & screen sharing, it was smooth.
    I also told them to take rides for the next 2 days & took their feedback. This way, we solved major bugs before the actual release.
 </p>
 <br></br>
 <p>
 <b>Result</b> : <i>Conducting these user-faced processes helped us in building empathy towards users which is imperative for a product to have an extremely efficient User experience.</i>
   </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Kellerkind
