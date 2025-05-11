import React from 'react'
import AboutHero from './AboutHero'
import WhyChooseUs from './WhyChooseUs'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'

function About() {
  return (
    <div style={{ backgroundColor: "#eff2f1", color: "#2f2f2f" }}>
      <AboutHero></AboutHero>
      <WhyChooseUs></WhyChooseUs>
      <OurTeam></OurTeam>
      <Testimonial></Testimonial>
    </div>
  )
}

export default About
