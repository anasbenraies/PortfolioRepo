import React from 'react'
import Ccard from "../Ccard"

export default function CardCollection() {
  return (
    <div style={{display:"flex",justifyContent:"space-around",paddingLeft:"30%"
    ,paddingRight:"30%"}}>
      <Ccard specific={false}/>
      <Ccard specific={true} />
      <Ccard specific={false}/>
    </div>
  )
}
