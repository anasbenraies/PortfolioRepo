import React from 'react'
import Entry from '../Entry/Entry'
import MatrixAnimation from '../MatrixAnimation/MatrixAnimation'

export default function Home() {
  return (
    <div className='App'>
      <MatrixAnimation timeout={70}/>
      <Entry/>
    </div>
  )
}
