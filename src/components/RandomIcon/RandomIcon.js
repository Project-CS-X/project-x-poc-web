import React from 'react'
import logo from '../../assets/images/logo.svg'
import './RandomIcon.scss'
import { random, merge } from 'lodash'

function RandomIcon() {

    const logoStyleVars = {
        height: random(1,10),
        left: random(1,90),
        top: random(1,90)
    }

    const animations = [
        `floaty infinite ${ random(4,8) }s ease-in-out`,
        `spinny infinite ${ random(10,20) }s linear`
    ]

    if ( logoStyleVars.height < 4 ) {
        animations.push(`scaly infinite ${ random(4,8)}s ease-in-out`)
    }

    const logoStyle = {
        height: `${logoStyleVars.height}vmin`,
        left: `${logoStyleVars.left}%`,
        top: `${logoStyleVars.top}%`,
        animation: animations[random(0, animations.length - 1)]
    }

    return <img src={logo} className="appIcon" alt="icon" style={logoStyle} />

}

export default RandomIcon