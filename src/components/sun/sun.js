import React, {Component } from 'react';
import * as d3 from "d3";



class Sun extends Component {

    constructor(props) {
        super();
        this.state = {
          config: props
        };
    }

    starRef = React.createRef();

    componentDidMount() {
        this.setState({
          config: this.props
        });
    }

    /*
    componentDidUpdate() {       
        //let el = d3.select(this.starRef.current);
        let el = d3.select("#sunBurst");
        var comp_ref = this;
        //this.repeat(el);
        el.attr("r", this.state.config.config.size).transition()
        .duration(3000)
        .delay(500)
        .attr("r", 25*this.state.config.config.size)
        .on("end", function() {
            comp_ref.setState({...this.state});
        });
    }
    */
    render() {
        var sun_properties = this.state.config.config;
        var center_x = sun_properties.location[0];
        var center_y = sun_properties.location[1];
        var size = sun_properties.size;
        var color = sun_properties.color ? sun_properties.color : "orange";
        return <g>
            <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: "FFFF66", stopOpacity:1}}/>
                    <stop offset="100%" style={{stopColor:"FF9900", stopOpacity:1}} />
                </radialGradient>
            </defs>
        <circle id="sunBurst" cx={center_x} r={size} cy={center_y} fill="url(#grad1)" ref={this.starRef} ></circle></g>
        
    }
}

export default Sun;