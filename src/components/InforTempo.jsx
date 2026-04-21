import './InforTempo.css';

function InforTempo({ tempo }) {

  return (
    <div className='container-tempo'>
      <h3>{tempo.name}</h3>

      <div className='tempo-info'>
        <img src={`https://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`} alt={tempo.weather[0].description}/>
        <p>{Math.round(tempo.main.temp)}°C</p>
      </div>

      <p className='descricao'>{tempo.weather[0].description}</p>

      <div className='tempo-detalhes'>
        <p>Sensação Térmica: {Math.round(tempo.main.feels_like)}°C</p>
        <p>Umidade: {tempo.main.humidity}%</p>
        <p>Pressão: {tempo.main.pressure} hPa</p>
      </div>

    </div>
  );
}

export default InforTempo;