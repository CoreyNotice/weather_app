import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

function Home(props) {
  return (
    <div>
      <pre>








        
      </pre>
        <Card style={{ width: '8 rem' }}>
        <ListGroup variant="flush">
       <ListGroup.Item>The time is {props. local_time} in {props.local_name},{props.local_region}</ListGroup.Item>
       <ListGroup.Item>Today's High:{props.max_temp} degrees with a low if : {props.min_temp} degrees  </ListGroup.Item>
       <ListGroup.Item> The humidtiy for today is {props.avghumidity}% </ListGroup.Item>
       </ListGroup>
        </Card>
    </div>
  )
}

export default Home