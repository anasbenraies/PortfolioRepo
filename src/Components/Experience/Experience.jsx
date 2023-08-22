import React from 'react'
import './Experience.css'
import { Progress, Button } from "semantic-ui-react"
import { useState } from 'react'
import {Fade} from "react-reveal"

function Experience() {
    const [percent, setpercent] = useState(20)
    const increment = () => {
        setpercent((prev) => prev == 100 ? 0 : prev + 20)
    }
    const jobTitles = ["Teleconsiller", "intern At Mp Software"]
    const jobdetails = ["lorem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon",
        "lorem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon orem ipsum testerino lorem amazon"]


    return (
        <Fade>
            <div style={{ width: "50vw"}}>
                <div style={{ margin: "10%", color: "white" ,height:"10vh"}}>
                    <h3>{percent === 40 ? jobTitles[0] : " "}</h3>
                    <p>{percent === 40 ? jobdetails[0] : " "}</p>
                    <h3>{percent === 80 ? jobTitles[1] : " "}</h3>
                    <p>{percent === 80 ? jobdetails[1] : " "}</p>
                </div>

                <div>
                    <Progress percent={percent} indicating />
                    <Button inverted color='pink' onClick={increment}>Increment</Button>
                </div>
            </div>
        </Fade>
    )
}

export default Experience
