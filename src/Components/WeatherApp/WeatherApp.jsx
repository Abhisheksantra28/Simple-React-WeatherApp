import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp =  () =>{

    let api_key = "8f3d5957e445dfae7a283bb8ec35dddf";

    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () =>{

        const element = document.getElementsByClassName("cityInput");

        if(element[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity_percent");
        const wind = document.getElementsByClassName("wind_rate ");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity +"%";
        wind[0].innerHTML = Math.floor(3.6*(data.wind.speed))+" Km/h";
        temp[0].innerHTML = Math.floor(data.main.temp)+" °C";
        location[0].innerHTML = data.name;

        let iconcode =  data.weather[0].icon;

        if(iconcode === "01d" || iconcode === "01n"){
            setWicon(clear_icon);
        }
        else if(iconcode === "02d" || iconcode === "02n"){
            setWicon(cloud_icon);
        }
        else if(iconcode === "03d" || iconcode === "03n"){
            setWicon(drizzle_icon);
        }
        else if(iconcode === "04d" || iconcode === "04n"){
            setWicon(drizzle_icon);
        }
        else if(iconcode === "09d" || iconcode === "09n"){
            setWicon(rain_icon);
        }
        else if(iconcode === "10d" || iconcode === "10n"){
            setWicon(rain_icon);
        }
        else if(iconcode === "13d" || iconcode === "13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
         
    };

    return(


        <div className="container" >

            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
           

            <div className="weather-img">
                <img src={wicon} alt="" />
            </div>

            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity_percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind_rate ">18 Km/h </div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>


          




        </div>
    );


};

export default WeatherApp;