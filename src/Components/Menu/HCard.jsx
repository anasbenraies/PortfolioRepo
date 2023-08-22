import React from 'react'
import { Card } from 'semantic-ui-react'
import { Fade } from 'react-reveal'


export default function HCard({ header, meta, desctiption }) {
    const Header = <h2 style={{ color: "white" }}>{header}</h2>
    const Meta = <p>{meta}</p>
    const Description = <h3 style={{ color: "white" }}>{desctiption}</h3>
    return (

        <Fade>
            <div>
            <Card color='yellow'
                href='#card-example-link-card'
                header={Header}
                meta={Meta}
                description={Description}
                style={{backgroundColor:"#232323",color:"white",boxShadow:" 0px 0px 10px rgba(0, 0, 0, 0.5)"}}
            />
            </div>
        </Fade>
    )
}
