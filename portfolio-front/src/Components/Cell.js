import React from 'react'
import './styles.css'

function Cell({name, description, style, height}) {
    return (
        <div className="cell" style={{height: height, background: style}} >
            <span>{name}</span>
            <p>{description}</p>
        </div>
    )
}

export default Cell;