import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from 'wouter';

function App() {

  // HOOKS
  // const [keyword, setKeyword] = useState('Hola') //Efecto de eatado
  
  /**
   * TODO: Arreglar la obtencion de la URL
  */
  //RENDER de componente
  return (
    <div className="App">
      <section className="App-content">
        {/* <button onClick={() => setKeyword('Mapache')}>Cambiar</button> */}
        
        <Route 
          component={ListOfGifs}
          path="/gifs/:keyword"/>
          
      </section>
    </div>
  );
}

export default App;
