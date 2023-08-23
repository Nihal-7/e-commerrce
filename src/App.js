
import { Container } from 'reactstrap';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Menu from './components/Menu';
function App() {


  return (
    <div>
      <Menu />
      <Container>
        <Slider/>
        
      </Container>


    </div>
  );
}

export default App;
