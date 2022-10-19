import logo from './logo.svg';
import './App.css';

const Mensaje = () => {
  return <h1>Hola mundo</h1>
}
const Description = () => {
  return <p>Esta es la descripcion del bootcamp de react</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje />
      <Description />
    </div>
  );
}

export default App;
