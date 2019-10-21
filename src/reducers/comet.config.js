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
                        .range([5000, 50000]);  

const cometsReducer = (state = null, action) => {
    switch(action.type) {
        default:           
            var comets = [{"name" : "commet1","color" : ["gray", "brown"]}]
            for(let i = 0; i < 1; i++) {
                comets[i].size = 1;
                comets[i].x = 750;
                comets[i].y = 100;
                comets[i].revolution_time = 20000;
            }
            return comets;
    }
}

export default cometsReducer;  