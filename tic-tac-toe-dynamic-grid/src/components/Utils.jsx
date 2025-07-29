export  const checkWinner = (board,size) =>{
    //check for each row
    for(let i=0;i<size;i++){
        const setrow = new Set(board[i]);
        if(setrow.size===1 && board[i][0]!==null){
            return board[i][0];
        }
    }

    //check for all columns
    for(let i=0;i<size;i++){
        const setcol = new Set(board[i]);
        if(setcol.size==1 && board[0][i]!==null){
            return board[0][i];
        }
    }

    //check for diagonal left to right
    const dialeftrifhr = new Set();
    for(let i=0;i<size;i++){
        dialeftrifhr.add(board[i][i]);
    }
    if(dialeftrifhr.size===1 && board[0][0]!==null){
        return board[0][0];
    }

    //check for diagonal right to left
    const diarightleft = new Set();
    for(let i=0;i<size;i++){
        diarightleft.add(board[i][size-i-1]);
    }
    if(diarightleft.size===1 && board[0][size-1]!==null){
        return board[0][size];
    }

    return null;
}