import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import "./Ccard.css"

export default function Ccard({ specific }) {

  const backgroundStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.514)", // Replace 'blue' with your desired background color
    color: 'white', // Set the text color to make it readable on the new background
  };
  const ColorStyle = {
    color: 'white', // Set the text color to make it readable on the new background
  };


  return (
    <div style={{ margin: "13%" }}>
      <Card style={backgroundStyle} >
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header style={ColorStyle}>{specific ? "Anas ben rais" : "Uknown"}</Card.Header>
          <Card.Meta style={ColorStyle}>{specific ? "The chosen" : "Uknown"}</Card.Meta>
          <Card.Description style={ColorStyle}>
            {specific ? "known to be as a strong condidate" : "random  condidate"}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          
            {specific ? <Link to="/Hack">
              <Button inverted basic color='green'>
                Approve
              </Button>
            </Link> :  <Button inverted basic color='red'>
              Decline
            </Button>}
           
  
        </Card.Content>
      </Card>
    </div>
  )
}
