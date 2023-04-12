import React from 'react'
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

const Feature = () => {
    return (
        <swiper-container slides-per-view="1" speed="500" loop="false">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
    )
}

export default Feature