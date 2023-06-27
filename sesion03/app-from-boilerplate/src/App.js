import React from 'react';
import './App.css';
import Galeria from './components/Galeria/Galeria';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Galeria de Imagenes</h1>
        <Galeria/>
      </div>
    );
  }
}

export default App;
