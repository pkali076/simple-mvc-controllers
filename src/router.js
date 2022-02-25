//helper file

//const { request } = require('express');
const controllers = require('./controllers'); //imports from folder a bio called index.js
//import index.js file from controller folder
//index.js is interface for the entire folder.. could have ten files,
//yet in index.js imports and then re-exports those files


const router = (app) => {
    //routing stuff to specific end points, like routing to specific functions
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);
    app.get('/', controllers.index);

    //how do we configure a 404 page?
    //in urlStruct, if/else statements.. so in this case, express is "pretty smart"

    app.get('/getName', controllers.getName);
    app.get('/*', controllers.notFound); //star is wildcard character.. any content after that will match with that
    //check all urls above, first. then matches the star. in this case, if page is anything
    //except for predefined ones, then notFound page is presented (404)

    app.post('/setName', controllers.setName);
};



//overrides all module.exports
module.exports = router;
