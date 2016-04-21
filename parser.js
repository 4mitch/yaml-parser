/*\
title: $:/plugins/4mitch/yaml-parser/parser.js
type: application/javascript
module-type: macro

Parser for the source of a YAML tiddlers.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var jsyaml = require("$:/plugins/4mitch/yaml-parser/js-yaml.min.js");

//var version = yaml.version;	

//var parse = yaml.eval;	
/////////////////////////// Exports

//exports.version = yaml.version;

/*
Information about this macro
*/

exports.name = "parseYaml";

exports.params = [
	{name: "yamlString", default: "nothing: here"}
];

/*
Run the macro
*/
exports.run = function(yamlString) {
	return JSON.stringify( jsyaml.load(yamlString) );
};

	
})();