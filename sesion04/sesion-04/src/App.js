import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Censo from './modules/Censos/components/censo/Censo';
// import Galeria from './modules/Galeria/components/galeria/Galeria';
// import Foto from './modules/Galeria/components/foto/Foto';
import Clock from './modules/Reloj/components/Clock';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container px-4 py-5">
        <Clock/>
        {/* <Censo>
          <div className="pb-2 border-bottom">
            <h1>Censos Guatemala 2002 - 2018</h1>
          </div>
        </Censo> */}
      </div>
    );
  }
}

export default App;
