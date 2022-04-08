import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var nome;
var idade;
var email;

nome = prompt("Insira o seu nome");
idade = prompt("Insira a sua idade");
email = prompt("Insira o seu e-mail");

alert ("Olá "+nome+" seja muito bem vindo! Sua idade é de "+idade+ " anos e seu email é "+email );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
