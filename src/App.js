import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';

function App() {
  const [nombre, setNombre] = useState('')

  const llamaFabian = () =>{
    setNombre("Fabian")
  }

  const llamaTesi = () =>{
    setNombre("TESI")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
        <button onClick={llamaTesi}>Fausto</button>
        <button onClick={llamaFabian}>Fabian</button>
      </header>
    </div>
  );
}

export default App;
