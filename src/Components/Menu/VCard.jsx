import React from 'react'
import { Fade } from 'react-reveal'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function HCard() {
  const contrast = {  color: "black" }
  return (
    <Fade >
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content style={contrast}>
          <Card.Header style={contrast}>anas ben raies</Card.Header>
          <Card.Meta>
            <span className='date' style={contrast}>software enginner</span>
          </Card.Meta>
          <Card.Description style={contrast}>
            anas ben raies is a software engineer specialized in backend engineering.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name='user' />
            have a look in my projects
          </div>
        </Card.Content>
      </Card>
    </Fade>

  )
}
