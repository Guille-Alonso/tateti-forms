import { useState } from "react";
import MyCarousel from "../MyCarousel/MyCarousel";
import Square from "../Square/Square";
import { Button } from "react-bootstrap";

const Board = () => {
  const [turn, setTurn] = useState('X');
  const [game, setGame] = useState(['','','','','','','','','']);

  const handleGame = (position)=>{
    if(game[position]!='') return;
    const gameAux = [...game];
    
    if(turn == "X"){
      gameAux[position] = turn;
    setGame(gameAux);
      setTurn("O")
    }else{
      gameAux[position] =turn;
    setGame(gameAux);
      setTurn("X")
    }
  }

  const resetGame = ()=>{
    setTurn('X');
    setGame(['','','','','','','','','']);
  }

  return ( 
    <div className="mt-4">
    <div>
      <Square symbol={game[0]} onClick={()=>handleGame(0)}/>
      <Square symbol={game[1]} onClick={()=>handleGame(1)}/>
      <Square symbol={game[2]} onClick={()=>handleGame(2)}/>
    </div>
    <div>
      <Square symbol={game[3]} onClick={()=>handleGame(3)}/>
      <Square symbol={game[4]} onClick={()=>handleGame(4)}/>
      <Square symbol={game[5]} onClick={()=>handleGame(5)}/>
    </div>
    <div>
      <Square symbol={game[6]} onClick={()=>handleGame(6)}/>
      <Square symbol={game[7]} onClick={()=>handleGame(7)}/>
      <Square symbol={game[8]} onClick={()=>handleGame(8)}/>
    </div>
    {/* <MyCarousel items={[
      {foto:'https://picsum.photos/300/300',nombre: '1ra',descripcion:'no tiene'},
      {foto:'https://picsum.photos/300/300',nombre: '2da',descripcion:'si tiene'}
      ]}/> */}

    <Button variant="danger" className='mt-3' onClick={resetGame}>Reset</Button>
    </div>
  );
}
 
export default Board;