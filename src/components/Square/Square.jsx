import './Square.css'

const Square = (props) => {
  return ( 
    <button className="square bg-warning m-1" onClick={props.onClick}>
      {props.symbol}
    </button>
  );
}
 
export default Square;