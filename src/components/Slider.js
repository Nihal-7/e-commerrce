import React from 'react'

export default function Slider() {
    return (
       
        <div id="carouselExampleIndicators " class="carousel slide">
             
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner ">
                <div class="carousel-item active" >
                    <img src="https://media.istockphoto.com/id/1215812761/photo/internet-shopping-with-laptop.jpg?s=1024x1024&w=is&k=20&c=cO7GUlxT4HR7v-EDjelC92RfNLqbR_7DH9reoGuPE1g=" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.istockphoto.com/id/1389684903/photo/man-shopping-at-online-store-on-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=mlp1vw1xvyNpKZIRooMs5-NdQf9sCMN4omdbg35FCUY=" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.jpg?s=1024x1024&w=is&k=20&c=Ow6Tnb6XkEARWwdxbXDe2SpkodV5ctxyJsQw7pzASZU=" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
