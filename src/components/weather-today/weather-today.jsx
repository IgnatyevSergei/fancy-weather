import React, {Component} from 'react';
import './weather-today.css'
import AboutTheWeather from "../common/about-the-weather";
import Cloud from '../../assets/picture/Group 26.png'

class WeatherToday extends Component {
    render() {
        return (
            <div className='weather-today-wrapper'>
                <div className='weather-today-block'>
                    <div className='number'>10</div>
                    <div className='information-block'>
                        <div className='information-block_degree-sign'>°</div>
                        <div className='information-block_cloud'><img src={Cloud} alt="" className='image-cloud'/></div>
                        <AboutTheWeather/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherToday;