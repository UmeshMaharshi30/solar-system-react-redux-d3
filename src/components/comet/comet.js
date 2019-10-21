import React, {Component } from 'react';
import * as d3 from "d3";

class Comet extends Component {
    
    constructor(props) {
        super();
        this.state = props.config;
        this.state.start_angle = 2*Math.PI*Math.random();
    }

    cometRef = React.createRef();

    componentDidMount() {
        this.setState({...this.state});
    }


    componentDidUpdate() {       
        let el = d3.select(this.cometRef.current);
        var x_radius = this.props.config.x/2;
        var y_radius = this.props.config.y/2;
        let comet_ref = this;
                    
        var comet_body = el.select('circle');
            
        comet_body.transition().duration(this.props.config.revolution_time).ease(d3.easeLinear)
                        .attrTween("cx", function() {
                            return function(t) {
                                return x_radius*Math.cos(((Math.PI * 2 * t) + comet_ref.state.start_angle));
                            };
                        })
                        .attrTween("cy", function() {
                            return function(t) {
                                return y_radius*Math.sin(((Math.PI  * 2 * t) + comet_ref.state.start_angle));
                            };
                        }).on("end", function() {
                            comet_ref.setState({...this.state});
                        });
    }

    render() {        
        const comet_name = this.state.name;
        const comet_size = this.state.size;
        const x_length = this.state.x;
        const y_length = this.state.y;
        const x_translate = x_length/4;
        const start_angle = this.state.start_angle;
        const colors = this.state.color;
        return <g ref={this.cometRef} transform={"translate(" + (400 - x_translate) + ",300)"}>
            <ellipse strokeWidth="0.5" style={{"opacity" : 0, "stroke" : "red"}} fill="none" rx={x_length/2} ry ={y_length/2}></ellipse>
            <circle fill={colors[0]} cx={(x_length/2) * Math.cos(start_angle)} cy={(y_length/2) * Math.sin(start_angle)} r={comet_size}></circle>
            </g>
    } 
}

export default Comet;