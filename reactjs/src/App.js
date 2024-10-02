import logo from './logo.svg';
import './App.css';
import Counter from './components/contador';
import {Formulario} from './components/form';
import { Listaanima } from './components/listanimal';
function App() {
  return (
    <div className='App' > <p>HELLO WORLD</p></div>,
    <div> <Counter initialValue={10} /> </div>,
    <div><Formulario/></div>,
    <Listaanima/>   

  );
}

export default App;
