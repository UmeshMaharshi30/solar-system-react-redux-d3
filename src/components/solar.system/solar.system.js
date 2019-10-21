import React, {Component } from 'react';
import Star from './../star/star';
import { connect } from "react-redux";
import Sun from '../sun/sun';
import Planet from '../planet/planet';
import Comet from '../comet/comet';


class SolarSystem extends Component {

    render() {
        var stars_config = this.props.starsReducer;
        var sun_config = this.props.sunReducer;
        var planet_config = this.props.planetsReducer;
        var comet_config = this.props.cometsReducer;
        return <svg className="container bg-dark" style={{"height" : "600px", "width" : "800px"}}>{stars_config.map((star, index) => {
            return <Star key={index} config={star}></Star>
        }
        )}
        {planet_config.map((planet, index) => {
            return <Planet key={index} config={planet}></Planet>
        }
        )}
        {comet_config.map((comet, index) => {
            return <Comet key={index} config={comet}></Comet>
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