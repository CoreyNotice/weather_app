import {useEffect,useState} from 'react';
import './App.css';
import Astro from './components/Astro';


function App() {
  let [data, setData] = useState({})

useEffect(() => {
    document.title='Weather'
    fetch('http://api.weatherapi.com/v1/future.json?key= dfb3ab443f414512ad1163103231003&q=nyc&dt=2023-04-09')
	.then(response => response.json())
	.then(response => setData(response))
	.catch(err => console.error(err));
}, [])

  return (
    <div className="App">
     <Astro
      moon_phase={data.forecast.forecastday[0].astro.moon_phase}
      sunrise={data.forecast.forecastday[0].astro.sunrise}
      sunset={data.forecast.forecastday[0].astro.sunset}
      moonrise={data.forecast.forecastday[0].astro.moonrise}
      moonset={data.forecast.forecastday[0].astro.moonset}
      />
    </div>
  );
}

export default App;
