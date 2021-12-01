import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bonjour! I'm <br />
        Murali krishnan <br />
        Front-End Developer
      </SectionTitle>
      <SectionText>
      I build responsive Websites & Web Apps using modern-day technologies which include HTML5, CSS3, JavaScript, React.JS, and lot more.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>To Know More</Button>
    </LeftSection>
  </Section>
)

export default Hero