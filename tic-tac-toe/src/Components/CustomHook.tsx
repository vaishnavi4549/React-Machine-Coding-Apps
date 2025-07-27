import { useState } from 'react';

const boardInitialState = Array(9).fill(null)

export function useTickTacToe(){
    const [board,setBoard] = useState(boardInitialState);
    const [isXNext, setIsXNext] = useState(true);
    const Winning_Patterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const handleClick=(index)=>{
        const winner = calculateWinner(board);
        if(winner || board[index]) return;
        const newboard = [...board]
        newboard[index] = isXNext ? 'X' : 'O';
        setBoard(newboard);
        setIsXNext(!isXNext);
    }

    const resetButton=()=>{
        setBoard(boardInitialState);
        setIsXNext(true);
    }

    const getStatusMessage=()=>{
        const winner = calculateWinner(board);
        if(winner) return `Player ${winner} wins!`;
        //means board does't return null, all the boxes are filled
        if(!board.includes(null)) return "It's a draw!";
        return `Player ${isXNext ? 'X' : 'O'}'s turn`;
    }

    const calculateWinner=(board)=>{
        for(let i=0;i<Winning_Patterns.length;i++){
            const [a,b,c] = Winning_Patterns[i];
            if(board[a] && board[b]==board[a] && board[c]==board[a]){
                return board[a];
            }
        }
        return null;
    }

    return {handleClick, resetButton, getStatusMessage, calculateWinner, board, isXNext};

}