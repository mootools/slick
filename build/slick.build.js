#!/usr/bin/env node
var requirejs = require('requirejs')

var configs = [
	require('./attr.build')
]

configs.forEach(function(config){
	requirejs.optimize(config, function (buildResponse) {
		//buildResponse is just a text output of the modules
		//included. Load the built file for the contents.
		//Use config.out to get the optimized file contents.
		// var contents = fs.readFileSync(config.out, 'utf8')
		console.log(buildResponse)
	})
})
