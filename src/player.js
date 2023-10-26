import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div >
         <Card style={{ width: '18rem' }}>
      <img src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <strong>nationality:</strong> {nationality} <br />
            <strong>age:</strong> {age} <br />
            <strong>jerseyNumber:</strong>{jerseyNumber} <br />
        </Card.Text>
        <Button variant="primary">{team}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default player