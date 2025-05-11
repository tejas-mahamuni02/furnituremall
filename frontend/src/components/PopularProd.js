import React from 'react'

function PopularProd() {
  return (
    <div className='container pb-5' >
      <div className='row'>
        <div class="card mb-3 col-4 border-0" style={{ backgroundColor: "#eff2f1" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./images/product-1.png" class="img-fluid rounded-5 mt-3 " alt="..." width={120} style={{ backgroundColor: "rgb(220, 229, 228)" }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-title">Nordic Chair</h6 >
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <p >Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-4 border-0" style={{ backgroundColor: "#eff2f1" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./images/product-2.png" class="img-fluid rounded-5 mt-3 " alt="..." width={120} style={{ backgroundColor: "rgb(220, 229, 228)" }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-title">Nordic Chair</h6 >
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <p >Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-4 border-0" style={{ backgroundColor: "#eff2f1" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./images/product-3.png" class="img-fluid rounded-5 mt-3 " alt="..." width={120} style={{ backgroundColor: "rgb(220, 229, 228)" }} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-title">Nordic Chair</h6 >
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</p>
                <p >Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProd
