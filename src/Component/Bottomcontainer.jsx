import React, { useState } from 'react'
import { store } from './Details'
import { useContext } from 'react'
import './All.css'
import Card from './Card'
import Title from './Title'
const Bottomcontainer = () => {
    const result=useContext(store)
    console.log(result);
  return (<>

  <div className='bottomcontainer'>
        
        {result.map((e,index)=>{
           console.log(e.url)
           return(<Card img={e.url} />)
        })}
       </div>
       
  </>
   
  )
}

export default Bottomcontainer