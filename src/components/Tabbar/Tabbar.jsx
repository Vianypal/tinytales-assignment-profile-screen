import React from 'react'
import './Tabbar.css';
import img1 from '../../Asset/TTT - 974 x 513 logo.png';
const Tabbar = () => {
  return (
    <div className='tab1'>
      <div className="left">
        <img src={img1} alt="" />
      <p>STORIES</p>
      </div>
       

       <div className="right">
       <button>Courses</button>
       </div>
   
    </div>
  )
}

export default Tabbar
