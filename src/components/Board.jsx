import React from 'react';
import Square from './Square';
import { useState } from 'react';

function Board() {
    const[state, setState]= useState(Array(9).fill(null));
    const[isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index)=>{
        if(state[index] !== null){
            return;
        }
        const copyState = {...state};
        copyState[index] = isXTurn? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
          

    }
    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (state[a] && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
       
    
    };
    const isWinner = checkWinner();

    const handleReset = ()=>{
        setState(Array(9).fill(null));
        setIsXTurn(true);
    }

  return (
    <div className='container'>
        { isWinner ? ( 
            <>{isWinner} won the game
            <button onClick={()=>handleReset()}>Play Again</button></>) :
        (<> 
        <h3>Player {isXTurn?'X':'O'} Play your Move...</h3>
        <div className='board-row'>
            <Square onClick={()=> handleClick(0)} value={state[0]}/>
            <Square onClick={()=> handleClick(1)} value={state[1]}/>
            <Square onClick={()=> handleClick(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
            <Square onClick={()=> handleClick(3)} value={state[3]}/>
            <Square onClick={()=> handleClick(4)} value={state[4]}/>
            <Square onClick={()=> handleClick(5)} value={state[5]}/>
        </div>
        <div className='board-row'>
            <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/>
        </div> 
        </>)}
    </div>
  )
}

export default Board;