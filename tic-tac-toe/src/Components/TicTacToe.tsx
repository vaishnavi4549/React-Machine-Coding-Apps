import {useTickTacToe} from './CustomHook';
import './App.css'

export default function TicTacToe() {
 const {board,handleClick,resetButton,getStatusMessage} = useTickTacToe();

  return (
    <div className="game-container">
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="status">
           {getStatusMessage()}
          <button onClick={()=>resetButton()}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((b,index)=>{
          return(
            <button 
                className="cell" 
                onClick={()=>handleClick(index)}
                disabled={b!==null}
                > 
             {b}
            </button>
          )
        })}
      </div>
    </div>
  )
}