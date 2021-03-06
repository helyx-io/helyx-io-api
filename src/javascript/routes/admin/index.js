////////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////////

var express = require('express');

var apiRoute = require('./apiRoute');


////////////////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////////////////

var router = express.Router({mergeParams: true});

router.use('/api', apiRoute);


// catch 404 and forward to error handler
router.use((req, res, next) => {
	var err = new Error('API - Not Found');
	err.status = 404;
	next(err);
});


////////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
