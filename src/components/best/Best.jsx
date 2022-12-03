import React from 'react'

import Apt1 from '../../assets/home2.jpg'
import Apt2 from '../../assets/home3.jpg'
import Apt3 from '../../assets/home1.jpg'

import './Best.css'

const Best = () => {
  return (
    <div className='best'>
        <h1>Find Best Rated Properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p><a href='/'>Commercial</a></p>
            <p><a href='/'>Residential</a></p>
            <p><a href='/'>Agricultural</a></p>
        </div>
        <dir className='container'>
            <img src={Apt1} alt="" />
            <img src={Apt2} alt="" />
            <img src={Apt3} alt="" />
        </dir>
        <button className="btn">View All</button>
    </div>
  )
}

export default Best