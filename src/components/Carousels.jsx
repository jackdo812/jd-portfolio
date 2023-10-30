import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextIconSvg, PrevIconSvg } from '../assets/images/NextPrevIcon';


function Carousels() {
  return (
    <Carousel indicators={false} nextIcon={<NextIconSvg />} prevIcon={<PrevIconSvg />}>
      <Carousel.Item>
        
        <Carousel.Caption className='relative right-0 bottom-0 left-0 text-red-600 w-[75%] mx-auto my-0'>
          <div className='border border-black rounded p-8'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Carousel.Caption className='relative right-0 bottom-0 left-0 text-red-600 w-[75%] mx-auto my-0'>
          <div className='border border-black rounded p-8'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Carousel.Caption className='relative right-0 bottom-0 left-0 text-red-600 w-[75%] mx-auto my-0'>
          <div className='border border-black rounded p-8'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;