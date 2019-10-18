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
            var planets = [{"name" : "Mercury", "size" : planet_size_scale(1.5), "color" : "gray", "distance" : 25, "revolution_time" : 1000, "rotation_time" :2000},
            {"name" : "Venus", "size" : planet_size_scale(1.85), "color" : "LightYellow", "distance" : 60, "revolution_time" : 2000, "rotation_time" :2000},
            {"name" : "Earth", "size" : 4, "color" : "blue", "distance" : 100, "revolution_time" : 4500, "rotation_time" :2000},
            {"name" : "Mars", "size" : 3.75, "color" : "#654321", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000},
            {"name" : "Jupiter", "size" : 3.75, "color" : "Orange", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000},
            {"name" : "Saturn", "size" : 3.75, "color" : "PaleGoldenRod", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000},
            {"name" : "Uranus", "size" : 3.75, "color" : "SlateBlue ", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000},
            {"name" : "Neptune", "size" : 3.75, "color" : "#6081FF", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000},
            {"name" : "Pluto", "size" : 3.75, "color" : "RosyBrown", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000}]
            for(let i = 0; i < 9; i++) {
                planets[i].size = planet_size_scale(solar_system_config.diameter_ratio[i]);
                planets[i].distance = planet_distance_scale(solar_system_config.distance_from_sun[i]);
                planets[i].revolution_time = planet_revolution_scale(solar_system_config.revolution_period[i]);
                /*
                planets[i].size = planet_size_scale(solar_system_config.diameter_ratio[i]);
                planets[i].distance = planet_distance_scale(solar_system_config.distance_from_sun[i]);
                planets[i].revolution_time = planet_size_scale(solar_system_config.revolution_period[i]);
                */
            }
            return planets;
    }
}

export default planetsReducer;