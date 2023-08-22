import React from 'react'
import { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-reveal'
import "./CardProj.css"

export default function Display({ ProjectTitle }) {
    const [Description, setDescription] = useState("Click on projects to change their colors !")
    const [TechStack, setTeckStack] = useState("")
    const [GithubRepo, setGithubRepo] = useState("")

    useEffect(() => {
        if (ProjectTitle === "authentification API") {
            setDescription("lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test "); // Set the description here
            setTeckStack("JavaScript , Node.js , JWT , Express"); // Set the tech stack here
            setGithubRepo("www.githubrepo.com"); // Set the GitHub repo link here
        }
        else if(ProjectTitle === "Crypto Bot"){
            setDescription("in this project i created a trading bot using the \"break and retest strategy\".this bot uses the bianance API to assist the user in crypto trading "); // Set the description here
            setTeckStack("HTML ,Javascript , css , BinanceAPI"); // Set the tech stack here
            setGithubRepo("www.githubrepo2sdsd@sdsd.com"); 
        }
    }, [ProjectTitle]);

    return (
        <Slide left>
            <div className='boxDisplay'>
                <div style={{ paddingTop: "5%", overflowWrap: "break-word" }}>
                    <h3>{ProjectTitle}</h3>
                </div>
                <div style={{ paddingTop: "25%" }}>
                    <h4 style={{ paddingRight: "20vw" ,color:"orange"}}>Description</h4>
                    <p>
                        <h3 style={{ color: "white" }}>{Description}</h3>
                    </p>
                    <div>
                        <h4 style={{ paddingRight: "14vw", paddingTop: "5%",color:"orange" }}>Tech Stack and Technologies</h4>
                        <h4>{TechStack}</h4>
                    </div>
                    <div style={{ paddingRight: "18vw", paddingTop: "6%" }}>
                        <h4 style={{color:"orange"}}>Github Repository</h4>
                        <h4>{GithubRepo}</h4>
                    </div>
                </div>
            </div>
        </Slide>
    )
}
