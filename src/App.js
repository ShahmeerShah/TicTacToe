import React, { useState } from 'react';
import './App.css';


const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";


function TicTacToe() {

  const [state,setState] = useState({
    player : CROSS,
    positions : [
      EMPTY,EMPTY,EMPTY,
      EMPTY,EMPTY,EMPTY,
      EMPTY,EMPTY,EMPTY
    ]
  })

  const takeTurn = (position) => {
    const positions = [...state.positions];
    positions[position] = state.player;
    setState({
      player: state.player == CROSS? CIRCLE: CROSS,
      positions: positions
    })
    console.log(position);
  }

  
  return(
    <div className="app">
    <div className="grid">
      <Square position={0} value={state.positions[0]} takeTurn={takeTurn}/>
      <Square position={1} value={state.positions[1]} takeTurn={takeTurn}/>
      <Square position={2} value={state.positions[2]} takeTurn={takeTurn}/>
      <Square position={3} value={state.positions[3]} takeTurn={takeTurn}/>
      <Square position={4} value={state.positions[4]} takeTurn={takeTurn}/>
      <Square position={5} value={state.positions[5]} takeTurn={takeTurn}/>
      <Square position={6} value={state.positions[6]} takeTurn={takeTurn}/>
      <Square position={7} value={state.positions[7]} takeTurn={takeTurn}/>
      <Square position={8} value={state.positions[8]} takeTurn={takeTurn}/>
    </div>
    </div> 
  );
}

function Square({position,value,takeTurn}) {
  const Action = () =>{
    
    value == "EMPTY" &&  takeTurn(position);
    
  }
  return (
    <div className="Square" onClick={Action}>
      {value=="CIRCLE" && <Circle/> }
      {value=="CROSS" && <Cross/> }
    </div>
  );
}

function Circle() {
  return (
    
      
      <svg className="circle" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16 circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
    
  );
}

function Cross() {
  return (
    <div>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
    </div>
  );
}

export default TicTacToe;
