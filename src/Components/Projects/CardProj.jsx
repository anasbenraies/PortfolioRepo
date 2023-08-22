import React from 'react'
import "./CardProj.css"
import { Label } from 'semantic-ui-react'
import { Slide } from 'react-reveal'

export default function CardProj({title,ProjectType,TagArrays}) {
  const randomColors=["red","yellow","green","blue","orange","white","brown","purple","pink"]
  return (
    <Slide right>
    <div className='box' >
      <Label as='a' color={randomColors[Math.floor(Math.random() * randomColors.length)]} ribbon>
          {ProjectType}
        </Label>
      <div style={{paddingTop:"6%"}}>
        <h3>{title}</h3>
      </div>
      <div style={{overflowWrap: "break-word",paddingTop:"14%"}}>
        {TagArrays.map((Tag,i)=><Label key={i} color={randomColors[Math.floor(Math.random() * randomColors.length)]}>{Tag}</Label>)}
        {/* <Label color='blue' horizontal>APIs</Label>
        <Label color='green' horizontal>Authentification</Label>
        <Label color='orange' horizontal>JWT</Label>
        <Label color='yellow' horizontal>express</Label> */}
      </div>
    </div>
    </Slide>
  )
}
