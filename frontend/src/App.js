import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('http://127.0.0.1:8000/')
        .then(res => res.json())
        .then(data => {
          setCurrentTime(data.time);
          setCurrentDate(data.date);
        });
    };

    // Realizar la primera llamada al cargar la aplicación
    fetchData();

    // Actualizar la fecha y hora cada segundo
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title-large">Reloj-Calendario</h1>
      <h2 className="App-title-medium">----------------------------------------</h2>
      <h3 className="App-title-medium">La fecha es: {currentDate}</h3>
      <h3 className="App-title-medium">La hora es: {currentTime}</h3>
      <h2 className="App-title-medium">----------------------------------------</h2>	  
    </header>
    <footer className="App-footer">
      <p className="App-footer-medium">Proyecto: Craftech</p>
      <p className="App-footer-medium">Autor: Emanuel Prado Macat</p>
    </footer>
  </div>
);
}

export default App;
