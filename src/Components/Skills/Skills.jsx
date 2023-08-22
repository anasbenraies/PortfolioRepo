import React from 'react'
import TableX from './TableX'

export default function Skills() {
    return (
        
        <div style={{ width: "100vw", height: "10vh" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <h3 style={{textAlign:"center",color:"white"}}>Hard Skills</h3>
                    <TableX color="orange"/>
                </div>
                <div >
                    <h3 style={{textAlign:"center",color:"white"}}>Soft Skills and utilities</h3>
                    <TableX color="gray"/>
                </div>
                <div >
                    <h3 style={{textAlign:"center",color:"white"}}>Certifications</h3>
                    <TableX color="purple"/>
                </div>
            </div>


        </div>
    )
}
