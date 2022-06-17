import '../estilos/App.css';
import { CuadroTexto } from './CuadroTexto';
import {CuadroImagen} from './CuadroImagen';
import { FotoPerfil } from './FotoPerfil';



function App() {
  return (
    <div className="App">
      <CuadroImagen/>
      <CuadroTexto/>
      <FotoPerfil/>
    </div>
  );
}

export default App;
