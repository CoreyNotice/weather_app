import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
function Astro(props) {
  return (
    <div>
      <pre>








        
      </pre>
    
    <Card style={{ width: '34rem' }}>
      <ListGroup variant="flush">
      <ListGroup.Item>Today's Sunrise occurs at {props.sunrise} </ListGroup.Item>      
       
      <ListGroup.Item>Today's Sunset occurs at {props.sunset}</ListGroup.Item>   
      <ListGroup.Item> The moon is current in it's {props.moon_phase} phase</ListGroup.Item>
      <ListGroup.Item>Today's Moonrise occurs at {props.moonrise} </ListGroup.Item>
      <ListGroup.Item>Today's Moonset occurs at{props.moonset}</ListGroup.Item>
        </ListGroup>
        </Card>
 </div>
 
   
  )
}

export default Astro