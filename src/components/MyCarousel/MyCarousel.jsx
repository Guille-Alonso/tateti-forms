import { nanoid } from 'nanoid';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({items}) => {
    return (  
    <Carousel>
        {
        items.map((item)=>
 <Carousel.Item key= {nanoid()}>
 <img
   className="d-block w-100"
   src={item.foto}
   alt="First slide"
 />
 <Carousel.Caption>
   <h3>{item.nombre}</h3>
   <p>{item.descripcion}</p>
 </Carousel.Caption>
</Carousel.Item>
        )
        }    
    </Carousel>
      );
}
 
export default MyCarousel;