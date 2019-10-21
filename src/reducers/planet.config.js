import * as d3 from 'd3';
import {solar_system_config} from './../constants/index';

export const planet_size_scale = d3.scaleLinear()
                            .domain([0, 12])
                            .range([1, 6]); // 1, 6

export const planet_distance_scale = d3.scalePow()
                            .domain([0, 40])
                            .range([40, 450/Math.SQRT2]);  

export const planet_revolution_scale = d3.scaleLinear()
                        .domain([0.2, 250])
                        .range([5000, 100000]);  

const planetsReducer = (state = null, action) => {
    switch(action.type) {
        default:      
            var planets = [{"name" : "Mercury","color" : ["gray", "brown"], "rotation_time" :2000},
            {"name" : "Venus", "color" : ["LightYellow", "gold"], "rotation_time" :2000},
            {"name" : "Earth",  "color" : ["blue", "white"], "rotation_time" :2000},
            {"name" : "Mars", "color" : ["#654321", "brown"],"rotation_time" :2000},
            {"name" : "Jupiter", "color" : ["Orange", "brown"], "rotation_time" :2000},
            {"name" : "Saturn", "color" : ["PaleGoldenRod", "blue"], "rotation_time" :2000},
            {"name" : "Uranus", "color" : ["SlateBlue", "lightGreen"], "rotation_time" :2000},
            {"name" : "Neptune", "color" : ["#6081FF", "DarkBlue"], "rotation_time" :2000},
            {"name" : "Pluto", "color" : ["RosyBrown", "white"], "rotation_time" :2000}]
            for(let i = 0; i < 9; i++) {
                planets[i].size = planet_size_scale(solar_system_config.diameter_ratio[i]);
                planets[i].distance = planet_distance_scale(solar_system_config.distance_from_sun[i]);
                planets[i].revolution_time = planet_revolution_scale(solar_system_config.revolution_period[i]);
                planets[i].revolution_direction = (Math.random() > 0.5) ? 1 : 1;
            }
            return planets;
    }
}

export default planetsReducer;  