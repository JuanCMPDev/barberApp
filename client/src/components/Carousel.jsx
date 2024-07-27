"use client";

import { Carousel } from "flowbite-react";

const  CarouselComponent = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-4 pb-1 px-4 md:px-7 ">
        <Carousel slideInterval={3000} className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img src="carousel-images/1.jpg" alt="..." />
            <img src="carousel-images/2.jpg" alt="..." />
            <img src="carousel-images/3.jpg" alt="..." />
        </Carousel>
        </div>
    );
}

export default CarouselComponent;