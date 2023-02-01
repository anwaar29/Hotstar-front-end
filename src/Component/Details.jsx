import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const store=createContext()
const Details = (props) => {
    const [data,setdata]=useState([{
        url:'https://stat5.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion-306x393.jpg'
    },
      {
        url:'https://media5.bollywoodhungama.in/wp-content/uploads/2019/03/KGF-19-306x393.jpg'
      },
      {
        url:'https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1-306x393.jpg'
      },
      {
        url:'https://media5.bollywoodhungama.in/wp-content/uploads/2016/12/Sanju-3-306x393.jpg'
      },
      {
        url:'https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/89649841-306x393.jpg'
      },
      

      
])
  return (
   <store.Provider value={data}>
    {props.children}

   </store.Provider>
  )
}

export default Details