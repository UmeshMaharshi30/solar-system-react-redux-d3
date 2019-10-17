
const starsReducer = (state = null, action) => {
    switch(action.type) {
        default:
            var total_stars = [];
            for(let i = 0; i < 40; i++) {
                var star_config = {
                    location : [Math.random() * 780 + 20, Math.random() * 780 + 20],
                    size : 1,
                    color : "white"
                };
                total_stars.push(star_config);
            }
            return total_stars;
    }
}

export default starsReducer;