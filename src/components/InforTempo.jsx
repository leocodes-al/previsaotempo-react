function InforTempo({ tempo }) {

  return (
    <div>
      <h3>{tempo.name}</h3>

      <div>
        <img src={`https://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`} alt={tempo.weather[0].description}/>
        <p>{Math.round(tempo.main.temp)}°C</p>
      </div>

      <p>{tempo.weather[0].description}</p>

      <div>
        <p>Sensação Térmica: {Math.round(tempo.main.feels_like)}°C</p>
        <p>Umidade: {tempo.main.humidity}%</p>
        <p>Pressão: {tempo.main.pressure} hPa</p>
      </div>

    </div>
  );
}

export default InforTempo;