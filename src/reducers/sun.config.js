const sunReducer = (state = null, action) => {
    switch(action.type) {
        default:
            var star_config = {
                location : [400, 300],
                size : 20,
                color : "yellow"
            };
            return star_config;
    }
}

export default sunReducer;