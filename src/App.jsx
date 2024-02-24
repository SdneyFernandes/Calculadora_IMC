import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));
  }

  const classificarIMC = () => {
    if (!resultado) return '';

    if (resultado < 18.5) {
      return 'Abaixo do peso';
    } else if (resultado < 24.9) {
      return 'Peso normal';
    } else if (resultado < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obeso';
    }
  }

  

  return (
    <div className="App">
      
      <h1>Calculadora de IMC</h1>
      <form action="">
        
        <label>Nome Completo:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        
      
        <button onClick={(e) => { e.preventDefault(); calcularIMC(); }}>Calcular IMC</button>
      </form>
      
      {resultado && (
        <div  className='resultado'>
          <h2>Resultado:</h2>
          <p>Nome: {nome}</p>
          <p>IMC: {resultado}</p>
          <p>Classificação: {classificarIMC()}</p>
        </div>
      )}
    </div>
  );
}

export default App;

