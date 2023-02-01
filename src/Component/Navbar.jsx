import React from 'react'
import './All.css'
import s1 from './Images/logo.svg'
import Menudropdown from './Menudropdown'
const Navbar = () => {
  return (
    <>
     <div className='navparent'>
        <div className='subparent1'>
        <Menudropdown/>
        <span>TV</span>
        <span>Movies</span>
        <span>Sport</span>
        <span>Disney+</span>
        <img src={s1} alt='kk'  height='80px' width='100px'/> 

        </div>
       
       
       
        <div className='subparent2'>
            <input type="search" placeholder='Search' />
            <span className='subs'>Subscribe</span>
            <button>LOGIN</button>
        </div>
     </div>
    </>
  )
}

export default Navbar