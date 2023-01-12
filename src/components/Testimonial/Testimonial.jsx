import React from 'react'

import t1 from './../../assets/media/t1.png'
import t2 from './../../assets/media/t2.png'
import t3 from './../../assets/media/t3.png'
import t4 from './../../assets/media/t4.png'
import t5 from './../../assets/media/t5.png'

import './Testimonial.css'

function moveBallsWithTouch(e){
    const {clientX, clientY} = e.changedTouches[0];
    moveBalls(e.changedTouches[0]);
}

function moveBalls(e){
    const {clientX, clientY} = e;
    const redCube = document.querySelector('.testimonial__content-t1');
    const blackSphere = document.querySelector('.testimonial__content-t2');
    const rounRing = document.querySelector('.testimonial__content-t3');
    const purpleCube = document.querySelector('.testimonial__content-t4');
    const greySphere = document.querySelector('.testimonial__content-t5');

    const parentWidth = redCube.parentElement.parentElement.clientWidth;
    const parentHieght = redCube.parentElement.parentElement.clientWidth;

    redCube.style.right = `${26 + clientX/parentWidth*26}${'px'}`;
    redCube.style.top = `${26 + clientY/parentHieght*26}${'px'}`;

    blackSphere.style.right = `${clientX/1.3}${'px'}`;
    blackSphere.style.top = `${clientY/2.5}${'px'}`;

    rounRing.style.left = `${clientX/10}${'px'}`;
    rounRing.style.top = `${300 + clientY/20}${'px'}`;

    purpleCube.style.right = `${clientX/40}${'px'}`;
    purpleCube.style.bottom = `${clientY/20}${'px'}`;   

    greySphere.style.right = `${clientX/10}${'px'}`;
    greySphere.style.bottom = `${clientY/20}${'px'}`;
}

const Testimonial = () => {
  return (
    <section 
        id='Testimonials' 
        className='testimonial'
        onMouseMove={moveBalls}
        onTouchMove={moveBallsWithTouch}
    >
        <div className="testimonial__content">
            <div className="testimonial__content-t1"><img src={t1} alt="" /></div>
            <div className="testimonial__content-t2"><img src={t2} alt="" /></div>
            <div className="testimonial__content-t3"><img src={t3} alt="" /></div>
            <div className="testimonial__content-t4"><img src={t4} alt="" /></div>
            <div className="testimonial__content-t5"><img src={t5} alt="" /></div>
            <div className="testimonial__content-left"></div>
            <div className="testimonial__content-right">
                <h2>“Originally, creative & with and innate understand of the
                    client’s needs. He is always a pleasure to work!”
                </h2>
            </div>
        </div>
    </section>
  )
}

export default Testimonial