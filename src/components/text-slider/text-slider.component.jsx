import React from "react";
import "../../App.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Testimoials } from "../../layouts/landing_page/testimonials/testtimonials.component";
import { SliderContent } from "./slider-contents/slider-content.component";

export const TextSlider = ({ testimonials }) => {

    return (

        <div className="text-slider">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={31000}
            >
                {testimonials.map((testimoial) => {
                    return <SliderContent testimonial={testimoial} key={testimoial.id}/>
                })}
            </Carousel>
        </div>
    )

} 