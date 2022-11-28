import React from 'react'

import image1 from '../../assets/media/1.png'

function Mission() {
  return (
    <div className='mission container'>
      <div className="mission__top">
        <div className="mission__top-img">
          <img src={image1} alt="" />
        </div>
        <div className="mission__top-statement">
          <p>My mission is to design the best websites & dashboards around</p>
        </div>
      </div>
      <div className="mission__bottom"></div>
    </div>
  )
}

export default Mission