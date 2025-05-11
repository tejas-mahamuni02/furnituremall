import React, { Component } from 'react'
import './style.css'
export default class OurTeam extends Component {
  constructor() {
    super()
    this.state = {
      team: [
        { image: "./images/person_1.jpg", name: "Lawson Arnold", designation: "CEO, Founder, Atty", info: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." },
        { image: "./images/person_2.jpg", name: "Jeremy Walker", designation: "CEO, Founder, Atty", info: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." },
        { image: "./images/person_3.jpg", name: "Patrik White", designation: "CEO, Founder, Atty", info: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." },
        { image: "./images/person_4.jpg", name: "Kathryn Ryan", designation: "CEO, Founder, Atty", info: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." }]
    }
  }
  render() {
    return (
      <div className='container mt-5 mb-5 pb-5'>
        <h1 className='text-center'>Our Team</h1>
        <div className='row row-cols-1 row-cols-md-4 pb-5 my-5'>
          {
            this.state.team.map((item, index) => {
              return (
                < div className="card border-0 " style={{ backgroundColor: "#eff2f1", color: "#2f2f2f" }}>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3 className='fw-bold'>{item.name} </h3>
                    <p>{item.designation}</p>
                    <p className='mt-4'>{item.info}</p>
                    <p className='fw-bold'>Learn More</p>
                  </div>
                </div>
              )
            })

          }
        </div>
      </div >
    )
  }
}
