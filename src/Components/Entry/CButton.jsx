import React from 'react'
import { Button } from 'semantic-ui-react'

export default function CButton({text,color,isInverted }) {
  return (
    <div >
      <Button color={color} inverted={isInverted}>{text}</Button>
    </div>
  )
}
