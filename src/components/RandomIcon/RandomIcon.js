import React from 'react'
import logo from '../../assets/images/logo.svg'
import './RandomIcon.scss'
import { random } from 'lodash'

function RandomIcon() {

    const animations = [
        `floaty infinite ${ random(4,8) }s ease-in-out`,
        `spinny infinite ${ random(10,20) }s linear`
    ]

    const logoStyle = {
        height: random(1,10) + 'vmin',
        left: random(1,90) + '%',
        top: random(1,90) + '%',
        animation: animations[random(0, animations.length - 1)]
    }

    return <img src={logo} className="appIcon" alt="icon" style={logoStyle} />

}

export default RandomIcon