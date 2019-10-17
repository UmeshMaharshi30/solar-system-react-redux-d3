
const planetsReducer = (state = null, action) => {
    switch(action.type) {
        default:
            var total_planets = [];
            var planets = [{"name" : "Mercury", "size" : 1.5, "color" : "orange", "distance" : 25, "revolution_time" : 1000, "rotation_time" :2000},
            {"name" : "Venus", "size" : 1.85, "color" : "yellow", "distance" : 60, "revolution_time" : 2000, "rotation_time" :2000},
            {"name" : "Earth", "size" : 4, "color" : "blue", "distance" : 100, "revolution_time" : 4500, "rotation_time" :2000},
            {"name" : "mercury", "size" : 3.75, "color" : "red", "distance" : 200, "revolution_time" : 6500, "rotation_time" :2000}]
            for(let i = 0; i < 4; i++) {
                var planet_config = {
                    size : 2,
                    color : "blue",
                    distance : 40,
                    revolution_time : 2500,
                    rotation_time : 2000
                };
                total_planets.push(planet_config);
            }
            return planets;
    }
}

export default planetsReducer;