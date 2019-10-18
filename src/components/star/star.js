import React, {Component } from 'react';
import * as d3 from "d3";



class Star extends Component {

    constructor(props) {
        super();
        this.state = {
          config: props
        };
    }

    starRef = React.createRef();

    componentDidMount() {
        this.setState({
          config: this.props,
          delay : Math.random() * 1000
        });
    }

    componentDidUpdate() {        
        let el = d3.select(this.starRef.current);
        var comp_ref = this;
        //this.repeat(el);
        if(!this.state.config.config.blink) return;
        el.attr("r", 0.2).transition().delay(this.state.delay)
        .duration(1600)
        .attr("r", this.state.config.config.size)
        .transition()
        .attr("r", 0.2)
        .on("end", function() {
            comp_ref.setState({...this.state});
        });
    }

    repeat(star_reference) {
        star_reference.attr("r", 2).transition()
        .duration(1600)
        .attr("r", 5);
    }

    render() {
        var star_properties = this.state.config.config;
        var center_x = star_properties.location[0];
        var center_y = star_properties.location[1];
        var size = star_properties.size;
        var color = star_properties.color ? star_properties.color : "white";

        return <circle cx={center_x} r ={size} cy={center_y} fill={color} ref={this.starRef} ></circle>
    }
}

export default Star;