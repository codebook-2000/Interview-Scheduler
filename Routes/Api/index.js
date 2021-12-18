const route = require('express').Router();

// route.use('/update', require('./update').route);

route.use('/display', require('./display').route);
route.use('/create', require('./create').route);
route.use('/update', require('./update').route);



exports = module.exports = {
    route,
}
