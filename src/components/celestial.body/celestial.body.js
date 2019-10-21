import React, {Component } from 'react';
import * as d3 from "d3";

class CelestialBody extends Component {
    
    constructor(props) {
        super();
        this.state = props;
    }

    celestial_body_ref = React.createRef();

    componentDidMount() {
        this.setState({...this.state});
    }

    componentDidUpdate() {

    }

    render() {
        const name = this.state.name;
        const cx = this.state.cx;
        const cy = this.state.cy;
        const rx = this.state.rx;
        const ry = this.state.ry;
        const start_angle = this.state.start_angle;
        const init_cx = cx * Math.cos(start_angle);
        const init_cy = cy * Math.sin(start_angle);
        const revolution_time = this.state.revolution_time;
        const colors = this.state.colors;
        const primary_color = colors[0] ? colors[0] : "white";
        const path_opacity = this.state.path_opacity ? this.state.path_opacity : 0;
        const body_type = this.state.body_type;
        const size = this.state.size;
        return <g ref={this.celestial_body_ref}  className={name + " " + body_type}>
            <defs>
                <linearGradient  id={body_type + "_" + name} gradientTransform="rotate(90)">
                    <stop offset="5%" style={{stopColor: colors[0]}}/>
                    <stop offset="95%" style={{stopColor :colors[1]}} />
                </linearGradient >
            </defs>
            <ellipse rx={rx} ry={ry} strokeWidth="0.5" style={{"opacity" : path_opacity, "stroke" : primary_color}} fill="none" ></ellipse>
            <circle cx={init_cx} cy={init_cy} r={size} fill={"url(#" + body_type + "_" + name+ ")"}></circle>
        </g>
    }
}