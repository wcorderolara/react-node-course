import React, {Component} from 'react';
import './App.css';
import Censo from './modules/Censos/components/censo/Censo';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container px-4 py-5">
      <Censo>
        <div className="pb-2 border-bottom">
          <h1>Censos Guatemala 2002 - 2018</h1>
        </div>
      </Censo>
    </div>
  );
}
