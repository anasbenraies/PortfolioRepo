import React from 'react'
import "./Console.css"
import Fade from 'react-reveal/Fade';

export default function Console({analyzing}) {

    return (
    <div className='terminal-box'>
        <p>
            <pre>
        embedded Terminal {'>'}{'>'}
        {analyzing?" searching for possible candidates ... \n               found 3 possible candidates ... \n":null}
            </pre>
        </p>
    </div>
  )
}
