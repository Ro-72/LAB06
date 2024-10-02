import logo from './logo.svg';
import './App.css';
import Counter from './components/contador';
import {Formulario} from './components/form';
import { Listaanima } from './components/listanimal';
function App() {
  return (
    <div className='App' > <p>HELLO WORLD</p>
    <Counter initialValue={19}/>
    <Formulario/>
    <Listaanima/>
    </div>
  );
}

export default App;
