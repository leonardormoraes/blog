import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import styles from './Feature.module.css'

// Os módulos que usaremos no Swiper Slider
import { Navigation } from "swiper"

import Img1 from '../../Assets/images/bkg/bkg-horoscopo.png'
import Img2 from '../../Assets/images/bkg/bkg-europa.png'
import Img3 from '../../Assets/images/bkg/bkg-computador.png'

const Feature = () => {

    return (
        <Swiper className={styles.carousel} navigation={true} modules={[Navigation]} loop={true}>
            <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        </Swiper>
    )
}

export default Feature