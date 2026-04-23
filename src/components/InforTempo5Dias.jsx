import './InforTempo5Dias.css';

function InforTempo5Dias({ tempo_5_Dias }) {

  // armazenar as previsões diarias não repetidas por dia
  let inforDiarias = {}

  // percorrer a lista de previsões e pegar apenas uma previsão por dia
  for (let previsao of tempo_5_Dias.list) {
    let data = new Date(previsao.dt * 1000).toLocaleDateString() // criar uma data legível a partir do timestamp

    if (!inforDiarias[data]) {
      inforDiarias[data] = previsao
    }
  }  

  // pegar apenas as próximas 5 previsões diárias
  const Infor5dias = Object.values(inforDiarias).slice(1, 6)

  // exibir os nomes dos dias da semana
  function diaDaSemana(data) {
    const dia = new Date(data.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })
    return dia.toUpperCase()
  }

  return (
    <div className='container-diario'>
      <h3>Previsão Para os Próximos 5 Dias</h3>
      <div className='container-5dias'>
      {Infor5dias.map((previsao) => (
        <div key={previsao.dt} className='diaria'>
          <p>{diaDaSemana(previsao)}</p>
          <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} alt="Ícone do tempo" />
          <p>{previsao.weather[0].description}</p>
          <p>{Math.round(previsao.main.temp_min)} min °C / {Math.round(previsao.main.temp_max)} máx °C</p>
        </div>

      ))}
      </div>
    </div>
  )
}

export default InforTempo5Dias