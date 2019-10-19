
const starsReducer = (state = null, action) => {
    switch(action.type) {
        default:
            var total_stars = [];
            for(let i = 0; i < 200; i++) {
                var size = 0.5 + Math.random()*0.5;
                var star_config = {
                    location : [Math.random() * 800, Math.random() * 800],
                    size :  size,
                    blink : Math.random() > 0.75,
                    color : "white"
                };
                total_stars.push(star_config);
            }
            return total_stars;
    }
}

export default starsReducer;