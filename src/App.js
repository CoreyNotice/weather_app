import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import {useEffect,useState} from 'react';
import './App.css';
import Astro from './components/Astro';
import Home from './components/Home';
import Hourly from './components/hourly';


function App() {
  let [data, setData] = useState({})

useEffect(() => {
    document.title='Weather'
    fetch('http://api.weatherapi.com/v1/future.json?key=dfb3ab443f414512ad1163103231003&q=NewYork&dt=2023-04-10')
	.then(response => response.json())
	.then(response =>setData(response))
	.catch(err => console.error(err));
})
return(
  <div className='App'>
    <Router>
      <header>
        <div className='navBar'>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/Astro'>Astro</Link>
          </li>
          <li>
          <Link to='/Hourly'>hourly</Link>
          </li>
          </ul>
        </div>
        </header>
        <div className='display'>
           <Routes>
             <Route path='/' element={<Home
            //  local_time={data.location.localtime}
            //  local_name={data.location.name}
            //  local_region={data.location.localregion}
            //  max_temp={data.forecast.forecastday[0].day.maxtemp_f}
            //  min_temp={data.forecast.forecastday[0].day.mintemp_f}
            //  avghumidity={data.forecast.forecastday[0].day.avghumidity}
             />}/>
             <Route path='/Astro' element={<Astro
      // moon_phase={data.forecast.forecastday[0].astro.moon_phase}
      // sunrise={data.forecast.forecastday[0].astro.sunrise}
      // sunset={data.forecast.forecastday[0].astro.sunset}
      // moonrise={data.forecast.forecastday[0].astro.moonrise}
      // moonset={data.forecast.forecastday[0].astro.moonset}
      />}/>
             <Route path='/hourly' element={<Hourly
            //  temp_f={data.forecast.forecastday[0].hour[0].temp_f}
            //  feelslike_f={data.forecast.forecastday[0].hour[0].feelslike_f}
            //  dewpoint_f={data.forecast.forecastday[0].hour[0].dewpoint_f}
            //  chance_of_rain={data.forecast.forecastday[0].hour[0].chance_of_rain}
            //  humidity={data.forecast.forecastday[0].hour[0].humidity}
            //  windchill_f={data.forecast.forecastday[0].hour[0].windchill_f}
             />}/>
            
           </Routes>
        </div>
    </Router>
  </div>
)
  
}

export default App;
