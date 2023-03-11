import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

function Hourly(props) {
  return (
    <div>
       <pre>








        
</pre>
       <Card style={{ width: '8 rem' }}>
       <ListGroup variant="flush">
       <ListGroup.Item>From Midnight to 3AM</ListGroup.Item>
       <ListGroup.Item>Temp:{props.temp_f}</ListGroup.Item>
       <ListGroup.Item>feelslike:{props.feelslike_f}</ListGroup.Item>
       <ListGroup.Item>dewpoint:{props.dewpoint_f}</ListGroup.Item>
       <ListGroup.Item>chance of rain:{props.chance_of_rain}%</ListGroup.Item>
       <ListGroup.Item>humidity:{props.humidity}%</ListGroup.Item>
       <ListGroup.Item>windchill:{props.windchill_f}</ListGroup.Item>
      </ListGroup>
      </Card>

      


    </div>
  )
}

export default Hourly