import React, { useState } from 'react'
import CardProj from "./CardProj"
import Display from './Display'
import { Grid, Segment } from 'semantic-ui-react'


export default function Projects() {
    const [ProjectName, setProjectName] = useState("Click on Projects to Visualize them")
    return (
        <div style={{ marginTop: "10vh" }}>
            <Grid columns={2} rows={2} divided style={{ scrollSnapAlign: "start" }}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Display ProjectTitle={ProjectName} />
                    </Grid.Column>

                    <Grid.Column >
                        <div onClick={()=>setProjectName("Crypto Bot")}>
                            <CardProj title={"Crypto Bot"} ProjectType={"chrome Extention"} TagArrays={["python", "binance", "chrome extention"]} />
                        </div>
                        <div onClick={()=>setProjectName("authentification API")}>
                            <CardProj title={"authentification API"} ProjectType={"Backend"} TagArrays={["Authentification", "JWT", "APIs", "Nodejs"]} />
                        </div>
                        <div onClick={()=>setProjectName("Messenging App")}>
                            <CardProj title={"Messenging App"} ProjectType={"Full Stack"} TagArrays={["Authentification", "JWT", "APIs", "Nodejs"]} />
                        </div>

                    </Grid.Column>
                </Grid.Row>
                {/* <Grid.Row>
                    <Grid.Column>

                    </Grid.Column>

                    <Grid.Column>
                        <div>
                            <CardProj title={"Messenging App"} ProjectType={"Full Stack"} TagArrays={["Authentification", "JWT", "APIs", "Nodejs"]} />
                        </div>
                    </Grid.Column>
                </Grid.Row> */}
            </Grid>








            {/* <CardProj title={"Crypto Bot"} ProjectType={"chrome Extention"} TagArrays={["python", "binance", "chrome extention"]} />
                <CardProj title={"authentifocation API"} ProjectType={"Backend"} TagArrays={["Authentification", "JWT", "APIs", "Nodejs"]} />
                <CardProj title={"Messenging App"} ProjectType={"Full Stack"} TagArrays={["Authentification", "JWT", "APIs", "Nodejs"]} /> */}
            {/* <Display ProjectTitle={ProjectName}/> */}
        </div>
    )
}
