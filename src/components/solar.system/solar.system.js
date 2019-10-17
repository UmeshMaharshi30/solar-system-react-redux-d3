import React, {Component } from 'react';
import Star from './../star/star';
import { connect } from "react-redux";
import Sun from '../sun/sun';


class SolarSystem extends Component {

    render() {
        var stars_config = this.props.starsReducer;
        var sun_config = this.props.sunReducer;
        return <svg className="container bg-dark" style={{"height" : "600px", "width" : "800px"}}>{stars_config.map((star, index) => {
            return <Star key={index} config={star}></Star>
        }
        )}
        <Sun config={sun_config}></Sun>
        </svg>
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(SolarSystem);