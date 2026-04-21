import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InforTempo from './components/InforTempo'

function App() {
  const [tempo, setTempo] = useState('')
  const inputRef = useRef()

  async function buscarCidade(){
    const cidade = inputRef.current.value
    const apiKey = 'd920742f127650dcc68334e06ed763a3'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    const dados = await axios.get(url)
    setTempo(dados.data)

  }

  return (
    <div className="App">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade..." />
      <button onClick={buscarCidade}>Buscar</button>

      {/* se receber alguma informação, renderiza o componente para o InforTempo.jsx */}
      {tempo && <InforTempo tempo={tempo} />}
      
    </div>
  )
}

export default App
