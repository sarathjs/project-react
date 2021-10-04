import logo from './logo.svg';
import './App.css';
import {Carousel} from 'react-bootstrap';
import kurup from './components/images/kurup.jpg';
import Minnal from './components/images/Minnal.jpg';
import HOME1 from './components/images/HOME1.jpg';

function App() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={kurup}
      alt="First slide"
      height='600px'
    />
    <Carousel.Caption>
      <h3>On Screen #2</h3>
      <p>Matinee,Noon,First,Second</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Minnal}
      alt="Second slide"
      height='600px'
    />

    <Carousel.Caption>
      <h3>On Screen #3</h3>
      <p>Matinee,Noon,First,Second</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HOME1}
      alt="Third slide"
      height='600px'
    />

    <Carousel.Caption>
      <h3>On Screen #4</h3>
      <p>Matinee,Noon,First,Second</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;

