import React from "react";
import './bts.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import jin from './assets/jin.png';
import suga from './assets/suga.png';
import jhope from './assets/jhope.png';
import namjoon from './assets/rm.png';
import jimin from './assets/jimin.png';
import taehyung from './assets/v.png';
import jungkook from './assets/jungkook.png';

const Slideshow = () => {

    const slideImages = [
        {
            image: jin,
            caption: 'Jin'
        },
        {
            image: suga,
            caption: 'Suga'
        },
        {
            image: jhope,
            caption: 'j-hope'
        },
        {
            image: namjoon,
            caption: 'RM'
        },
        {
            image: jimin,
            caption: 'Jimin'
        },
        {
            image: taehyung,
            caption: 'V'
        },
        {
            image: jungkook,
            caption: 'Jungkook'
        },
    ];

    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slide, index) => (
                    <div className="each-slide" key={index}>
                        <div>
                            <img src={slide.image} alt='member' class="image-slide" />
                        </div>
                        <p class="title-slide"><b>{slide.caption}</b></p>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Slideshow;