import React from 'react'
import Slider from 'react-slick';
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className='container mt-4 pb-5 mb-5'>
      <div className='row text-center'>
        <h1>Testimonials</h1>
      </div>
      <div className='row text-center mt-3'>
        <Slider {...settings}>

          <div>
            <p className='w-50 text-secondary m-auto pb-5 fs-5'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <img src='./images/person_1.jpg' alt='' width={100} className='rounded-circle pb-4 m-auto'></img>
            <h6>Lawson Arnold</h6>
            <div className='mb-3 pb-4'>CEO, Founder, Atty..</div>


          </div>
          <div>
            <p className='w-50 text-secondary m-auto pb-5 fs-5'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <img src='./images/person_2.jpg' alt='' width={100} className='rounded-circle pb-4 m-auto'></img>
            <h6>Jeremy Walker</h6>
            <div className='mb-3 pb-4'>CEO, Founder, Atty..</div>


          </div>
          <div>
            <p className='w-50 text-secondary m-auto pb-5 fs-5'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <img src='./images/person_3.jpg' alt='' width={100} className='rounded-circle pb-4 m-auto'></img>
            <h6>Patrik White</h6>
            <div className='mb-3 pb-4'>CEO, Co-Founder, Atty..</div>
          </div>
        </Slider>



      </div>
    </div >
  )
}

export default Testimonial
