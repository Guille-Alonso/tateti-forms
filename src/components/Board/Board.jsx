import { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [turn, setTurn] = useState('X');
  const [game, setGame] = useState(['','','','','','','','','']);

  const handleGame = (position)=>{
    setGame()
  }
  return ( 
    <>
    <div>
      <Square symbol={game[0]} onClick={handleGame(0)}/>
      <Square symbol={game[1]} onClick={handleGame(1)}/>
      <Square symbol={game[2]} onClick={handleGame(2)}/>
    </div>
    <div>
      <Square symbol={game[3]} onClick={handleGame(3)}/>
      <Square symbol={game[4]} onClick={handleGame(4)}/>
      <Square symbol={game[5]} onClick={handleGame(5)}/>
    </div>
    <div>
      <Square symbol={game[6]} onClick={handleGame(6)}/>
      <Square symbol={game[7]} onClick={handleGame(7)}/>
      <Square symbol={game[8]} onClick={handleGame(8)}/>
    </div>
    </>
  );
}
 
export default Board;