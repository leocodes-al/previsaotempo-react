import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InforTempo from './components/InforTempo'
import InforTempo5Dias from './components/InforTempo5Dias'

function App() {
  const [tempo, setTempo] = useState('')
  const [tempo_5_Dias, setTempo_5_Dias] = useState('')

  const inputRef = useRef()

  async function buscarCidade(){
    const cidade = inputRef.current.value
    const apiKey = 'd920742f127650dcc68334e06ed763a3'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`
    const url_5_Dias = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    const dados = await axios.get(url)
    const dados_5_Dias = await axios.get(url_5_Dias)

    setTempo_5_Dias(dados_5_Dias.data)
    setTempo(dados.data)

  }

  return (
    <div className="App">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade..." />
      <button onClick={buscarCidade}>Buscar</button>

      {/* se receber alguma informação, renderiza o componente para o InforTempo.jsx */}
      {tempo && <InforTempo tempo={tempo} />}
      {tempo_5_Dias && <InforTempo5Dias tempo_5_Dias={tempo_5_Dias} />}
      
    </div>
  )
}

export default App
