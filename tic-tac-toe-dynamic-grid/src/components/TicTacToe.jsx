import {useState} from 'react';
import {checkWinner} from './Utils.jsx';

export const TickTacToe = ({size})=>{
    
    const boardInitialState=  Array.from({length: size},()=>{
        //for each row how much elements we want
        return Array(size).fill(null);
    })

    const [board,setBoard] = useState(boardInitialState)
    const [nextPlayer,setNextPlayer] = useState('X');
    const [status,setStatus] = useState(null);

    const handleClickCell=(row,col)=>{
        if(status) return;
        const newboard = [...board];
        if(board[row][col]===null){
            if(nextPlayer === 'X'){
                newboard[row][col] = 'X';
            }else if(nextPlayer=='O'){
                newboard[row][col] = 'O';
            }
        }
        const winner = checkWinner(board,size);
        if(winner){
            const st = `Player ${winner} wings the game!!!!`
            setStatus(st);
        }else{
            setNextPlayer(nextPlayer==='X' ? 'O' : 'X');
        }
        setBoard(newboard)
    }

    const resetGame=()=>{
        setBoard(boardInitialState);
        setNextPlayer('X')
    }


    return(
        <div style={{
            display: 'flex',
            height: '500px',
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
            margin: '0 auto',
            marginTop: '40px'
        }}>
            <span style={{
                    fontSize: '30px',
                    marginBottom:'20px',
            }}>Tic Tac Toe - Choose how long you gonna play !!!!!!!</span>
            <div>
                {
                    board.map((row,rowInd)=>(
                        <div key={rowInd} style={{
                            display:'grid', 
                            gridTemplateColumns: `repeat(${size}, 1fr)`,
                        }}>
                            {row.map((data,colInd)=>(
                                <button key={colInd} style={{
                                    border: '1px solid black',
                                    width: '100%',
                                    height: '100%',
                                    padding: '20px'
                                }}
                                onClick={()=>handleClickCell(rowInd,colInd)}
                                > 
                                    {data}
                                </button>
                            ))}
                        </div>
                    ))
                }
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '40%',
                marginTop: '30px',
                fontSize: '20px',
            }}>
                <span>Your turn: {nextPlayer} </span>
                <button onClick={()=>resetGame()}>Reset Game</button>
            </div>
            {status && <div style={{fontSize: '30px', marginTop: '30px'}}>{status}</div>}
        </div>
    )
}