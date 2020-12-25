import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/index.css';
import reportWebVitals from './reportWebVitals';

import Alunos from './componentes/principal/Alunos'
import { Servidor } from './servicos/MirageServer';

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  Servidor({ environment: ambiente });
}

ReactDOM.render(
  <React.StrictMode>
    <Alunos />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
