import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const inputRef = useRef()

  async function buscarCidade(){
    const cidade = inputRef.current.value
    const apiKey = 'd920742f127650dcc68334e06ed763a3'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    const dados = await axios.get(url)

    console.log(dados.data)
  }

  return (
    <div className="App">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade..." />
      <button onClick={buscarCidade}>Buscar</button>
      
    </div>
  )
}

export default App
