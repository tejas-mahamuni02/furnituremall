import React from 'react'
import Modern from './Modern'
import WhyChooseUs from './WhyChooseUs'
import Wehelpsection from './Wehelpsection'
import PopularProd from './PopularProd'
import Testimonial from './Testimonial'
import BlogSection from './BlogSection'
import ProductSection from './ProductSection'
function Home() {
  return (
    <div style={{ backgroundColor: "#eff2f1", color: "#2f2f2f" }}>
      <Modern></Modern>
      <ProductSection></ProductSection>
      <WhyChooseUs></WhyChooseUs>
      <Wehelpsection></Wehelpsection>
      <PopularProd></PopularProd>
      <Testimonial></Testimonial>
      <BlogSection></BlogSection>
    </div >
  )
}

export default Home
