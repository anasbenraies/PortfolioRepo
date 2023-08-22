import React, { useState } from 'react'
import CButton from './CButton'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { CommentAction, Icon, Input } from 'semantic-ui-react'
import Console from './Console';
import Ccard from '../Home/Ccard';
import CardCollection from '../Home/CardCollection/CardCollection';


export default function Entry() {
    const [show, setShow] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [commandText, setCommandText] = useState("")
    //wether the user clicked the button to enter the matrox or not 
    const [Entered, setEntered] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    const ShowingCard = () => {
        setShowCard(true)
    }

    const EnteredMatrix = () => {

        if (commandText.length > 0) {
            setEntered(true)
        }


    }
    return (
        <div style={{ marginTop: "10%", width: "100vw" }}>

            <Zoom>
                <p onClick={handleClick}>
                    <CButton text={show ? "Quit the Matrix" : "Enter The Matrix"} color="olive" isInverted={true} />
                </p>
            </Zoom>
        
            {/* <Fade left cascade when={show}>
                <h2 style={{ color: "white" }}>Enter any Password</h2>
                <Input icon placeholder='Type any Password '>
                    <input onChange={(e) => (setCommandText(e.target.value))} />
                    <Icon name='spy' />
                </Input>
            </Fade>
            <br />
            <p onClick={EnteredMatrix}>
                <Fade right when={show}>
                    <p onClick={ShowingCard}>
                        <CButton text="Let's Hack <3" color="olive" isInverted={true} />
                    </p>
                </Fade>

            </p> */}
            <div style={{marginTop:"8%"}}>
                <Console analyzing={show} />
            </div>
            <div>
                <Zoom when={show}>
                    <CardCollection />
                </Zoom>
            </div>
        </div>
    )
}
