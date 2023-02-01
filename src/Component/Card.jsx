import React from 'react'
import './All.css'
const Card = (props) => {
  return (
   <div className='cardbox'>
    <img src={props.img} alt="kk"  className='img'/>
   </div>
  )
}

export default Card