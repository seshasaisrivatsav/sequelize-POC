/**
 * Created by sesha on 6/12/17.
 */
var express 	    = 	require('express');
var router 		    = 	express.Router(); 	// Use the express router module
var run = require('./run');

router.get('/createtables', run.createTables);

module.exports = router;	//Export it so that it can be included or called from some other file !!