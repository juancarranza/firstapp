import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; -> Eliminamos el archivo 
//import App from './App'; //-> eliminamos el archivo 
//simport reportWebVitals from './reportWebVitals'; -> performance de react, eliminar archivos
import Carro from './components/Carro';
import Counter from './components/Counter';
import Form from './components/Form';
import Garage from './components/Garage';

const root = ReactDOM.createRoot(document.getElementById('root'));//encargado de crear el Virtual DOM
root.render(
  <>
    <Garage />
    <Form />
    <Counter />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
