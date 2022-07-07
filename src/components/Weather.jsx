import React,{useState} from 'react'
// Hooks: useState || state (save and change)
import axios from 'axios';
import cloud from '../Resources/cloud.svg';
import sun from '../Resources/sun.svg';
export default function Weather() {
    const [city,setCity]=useState('');
    const [temp,setTemp]=useState({});
    const days= ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];

    const clicked=async()=>{
        console.log('clicked 👏');

        const data=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0672133c7048b9ae118669881d845828`);

        const temp=data.data.main.temp;
        const weather = data.data.weather[0].main
        console.log(weather)
        const cel_temp=(temp-273.15).toFixed(2);
        setTemp({temp:cel_temp,weather: weather });

        setCity("")

    }
    const cityname=(e)=>{
        console.log(e.target.value);
        setCity(e.target.value)
    }
  return (
    <div className='main'>
  
    <div className='weather'>
        <input className='city_ip text-secondary' type="text" onChange={cityname} placeholder='Enter your City name' value={city} /> 
        <button className="btn btn-warning search_btn" onClick={clicked} >Search</button>
    </div>

    <div className="card ">
            <div className="top_part d-flex justify-content-between align-items-center">
                <h3> {days[new Date().getDay()]} </h3>
                <h3> {  new Date().toLocaleDateString()} </h3>
            </div>

<div className="image">
    <img src={ (temp.weather=='Clouds') ? cloud: sun  } alt="" height='150px'/>
</div>


            <div className='bottom_part'>
                <h1> {temp.temp } <sup>o</sup> c </h1>
            </div>
    </div>
    </div>
  )
}
