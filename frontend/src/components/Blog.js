import React from 'react'
import BlogHero from './BlogHero'
import Blogsection1 from './Blogsection1'
import Testimonial from './Testimonial'

function Blog() {
  return (
    <div style={{ backgroundColor: "#eff2f1", color: "#2f2f2f" }}>
      <BlogHero></BlogHero>
      <Blogsection1></Blogsection1>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Blog
