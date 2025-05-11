import React from 'react'
import ServiceHero from './ServiceHero'
import WhyChooseServices from './WhyChooseServices'
import ProductSection from './ProductSection'
import Testimonial from './Testimonial'
function Services() {
  return (
    <div style={{ backgroundColor: "#eff2f1", color: "#2f2f2f" }}>
      <ServiceHero></ServiceHero>
      <WhyChooseServices></WhyChooseServices>
      <ProductSection></ProductSection>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Services
