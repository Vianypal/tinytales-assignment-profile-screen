import React from 'react'
import './Mess.css';
import record from '../../Asset/record.json';
import Tab from './Tab';

const Mess = () => {
 
  return (
    <div className='mess1'>
      <div className="but"><button>134 posts</button></div>
      
      
      {
        record.map((rec)=>{
          return(
         <Tab data={rec}/>
          )
        })
      }

    </div>
  )
}

export default Mess
