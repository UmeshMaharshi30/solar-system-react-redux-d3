import React, {Component } from 'react';
import * as d3 from "d3";



class Planet extends Component {

    constructor(props) {
        super();
        this.state = {
          config: props
        };
    }

    planetRef = React.createRef();

    componentDidMount() {
        this.setState({
          config: this.props
        });
    }

    componentDidUpdate() {       
        let el = d3.select(this.planetRef.current);
        var radius = this.props.config.distance * Math.SQRT2;
        let plant_ref = this;
        var arc = d3.arc()
                    .innerRadius(radius)
                    .outerRadius(radius + 0.5)
                    .startAngle(0)  
                    .endAngle(2*Math.PI);
        var trajectory = el.select('path');
            trajectory.attr("d", arc());
        var planet_body = el.select('circle');
            planet_body.attr("cx", radius*Math.cos(Math.PI * 2 *Math.random())).attr("cy", radius*Math.sin(Math.PI * 2 *Math.random())).attr("angle", 0);

            planet_body.transition().duration(this.props.config.revolution_time).ease(d3.easeLinear)
                        .attrTween("cx", function() {
                            return function(t) {
                                return radius*Math.cos(Math.PI * 2 *t);
                            };
                        })
                        .attrTween("cy", function() {
                            return function(t) {
                                return radius*Math.sin(Math.PI * 2 *t);
                            };
                        }).on("end", function() {
                            plant_ref.setState({...this.state});
                        });
    }

    render() {
        var planet_properties = this.state.config.config;
        var distance_from_sun = planet_properties.distance;
        var planet_size = planet_properties.size;
        var revolution_time = planet_properties.revolution_time;
        var rotation_time = planet_properties.rotation_time;
        var color = planet_properties.color;
        var radius = this.props.config.distance * Math.SQRT2;
        return <g ref={this.planetRef} transform="translate(400,300)"><path fill={color} style={{"opacity" : 0.3}}></path><circle cx={radius*Math.cos(Math.PI * 2 *Math.random())} r={planet_size} cy={radius*Math.sin(Math.PI * 2 *Math.random())} fill={color} ></circle></g>
        
    }
}

export default Planet;