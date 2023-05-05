import React from "react";

function AppCarousel(){
    const styleCrsl={width:'60%', height:'70vh', marginLeft:'17%'}
    return <div>
        <div id="demo" class="carousel " data-bs-ride="carousel">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>

        </div>
  
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="snrtlive.jpg" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item active">
            <img src="AlAoula.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="arryadia.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="atakafiya.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="almaghribia.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="assadissa.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="afllam.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="Tamazight.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
            <div class="carousel-item">
            <img src="laayounee.png" alt="SNRT" class="d-block" style={styleCrsl} />
            </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
</div>

<div class="container-fluid mt-3">
</div>
    </div>

}

export default AppCarousel;