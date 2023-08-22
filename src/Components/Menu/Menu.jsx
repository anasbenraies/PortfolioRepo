import React from 'react'
import VCard from './VCard'
import "./Menu.css"
import HCard from './HCard'
import { Link } from 'react-router-dom'
import AccordionExampleInverted from './AccordionQ'


export default function Menu() {
  return (
    <div>
      <div className='container'>
        <div className='Hcard'>
          <VCard />
        </div>

        <div className='sections'>
          <Link to="/Projects">
            <HCard header="Projects" meta="Available" desctiption="lorem ipsum testing this paragraf to see how it goes then we gonna remove it" />
          </Link>
          <Link to="/experience">
            <HCard header="Experience" meta="Available" desctiption="lorem ipsum testing this paragraf to see how it goes then we gonna remove it" />
          </Link>
          <Link to="/skills">
            <HCard header="Skills" meta="Available" desctiption="lorem ipsum testing this paragraf to see how it goes then we gonna remove it" />
          </Link>
        </div>
      </div>

      <div>
        <div className='AboutMe'>
        <h2 >About me </h2>
        <p><h4>lorem ispum delta beta alpha meta lorem ispum delta beta alpha meta
        lorem ispum delta beta alpha meta lorem ispum delta beta alpha meta
        lorem ispum delta beta alpha meta lorem ispum delta beta alpha meta
        lorem ispum delta beta alpha meta lorem ispum delta beta alpha meta
        lorem ispum delta beta alpha meta lorem ispum delta beta alpha meta
        lorem ispum delta beta alpha meta</h4>  
        </p>
        </div>
        <AccordionExampleInverted />
      </div>
    </div>
  )
}
