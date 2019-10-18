import * as d3 from 'd3';
import {solar_system_config} from './../constants/index';

var planet_size_scale = d3.scaleLinear()
                            .domain([0, 12])
                            .range([1, 6]);

var planet_distance_scale = d3.scalePow()
                            .domain([0, 40])
                            .range([40, 300/Math.SQRT2]);  
var planet_revolution_scale = d3.scaleLinear()
                        .domain([0.2, 250])
                        .range([3500, 16000]);  

const planetsReducer = (state = null, action) => {
    switch(action.type) {
        default:
            var total_planets = [];            
            var planets = [{"name" : "Mercury","color" : "gray", "rotation_time" :2000},
            {"name" : "Venus", "color" : "LightYellow", "rotation_time" :2000},
            {"name" : "Earth",  "color" : "blue", "rotation_time" :2000},
            {"name" : "Mars", "color" : "#654321","rotation_time" :2000},
            {"name" : "Jupiter", "color" : "Orange", "rotation_time" :2000},
            {"name" : "Saturn", "color" : "PaleGoldenRod", "rotation_time" :2000},
            {"name" : "Uranus", "color" : "SlateBlue ", "rotation_time" :2000},
            {"name" : "Neptune", "color" : "#6081FF", "rotation_time" :2000},
            {"name" : "Pluto", "color" : "RosyBrown", "rotation_time" :2000}]
            for(let i = 0; i < 9; i++) {
                planets[i].size = planet_size_scale(solar_system_config.diameter_ratio[i]);
                planets[i].distance = planet_distance_scale(solar_system_config.distance_from_sun[i]);
                planets[i].revolution_time = planet_revolution_scale(solar_system_config.revolution_period[i]);
                planets[i].revolution_direction = Math.random() > 0.5 ? 1 : -1;
            }
            return planets;
    }
}

export default planetsReducer;