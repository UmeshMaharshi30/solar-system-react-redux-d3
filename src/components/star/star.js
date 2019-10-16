import React, {Component } from 'react';
import * as d3 from "d3";



class Star extends Component {

    constructor(props) {
        super();
        var star_config = {
            location : [0, 0],
            size : 2,
            color : "white"
        };
        this.state = {
          config: star_config
        };
    }

    starRef = React.createRef();

    componentDidMount() {
        var star_config = {
            location : [0, 0],
            size : 2,
            color : "white"
        };
        this.setState({
          config: star_config
        });
    }

    componentDidUpdate() {
        let el = d3.select(this.starRef.current);
        el.transition()
            .duration(800)
            .ease(d3.easeBounceOut)
            .attr("cx", this.props.config.location[0])
            .attr("cy", this.props.config.location[1])
            .on("end", () =>
                this.setState({
                config: this.props.config.location
            })
        );
    }

    render() {
        var star_properties = this.state.config;
        var center_x = star_properties[0];
        var center_y = star_properties[1];
        var size = this.props.size;
        var color = this.props.color ? star_properties.color : "white";

        return <circle cx={center_x} r ={2} cy={center_y} fill={color} ref={this.starRef}></circle>
    }
}

export default Star;