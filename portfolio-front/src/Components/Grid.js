import React, { useState, useEffect} from 'react'
import './styles.css'
import Cell from './Cell.js'
// import './debug_styles.css'

function Grid(data) {

  const [leftCells, setLeftCells] = useState([])
  const [rightCells, setRightCells] = useState([])
  
  useEffect( () => {
    let half_length = Math.ceil(data.data.length / 2);
    let leftSideData = data.data.splice(0,half_length);
    
    setLeftCells(data.data.map( (item, index) => {
      return ( 
        <Cell key={index} name={item.name} description={item.description} style={item.css} height={item.height} /> 
      )
    }))

    setRightCells(leftSideData.map( (item, index) => {
      return ( 
        <Cell key={index} name={item.name} description={item.description} style={item.css} height={item.height} /> 
      )
    }))

  }, [data])

  return (
    <div className="layout">
      <div className="sub-content" />
      <div className="main-content">
        <div className="main-content-col">
          { leftCells }
        </div>
        <div className="main-content-col">
          { rightCells }
        </div>
      </div>
      <div className="sub-content" />
    </div>
  );
}

export default Grid;
