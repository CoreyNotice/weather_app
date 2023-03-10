import React from 'react'

function Astro(props) {
  return (
    <div style={{'width':'100%'}}>
       
        <p>{props.sunrise}</p>
        <p>{props.sunset}</p>
        <p>{props.sunrise}</p>
        <p>{props.sunset}</p>
    </div>
 
   
  )
}

export default Astro