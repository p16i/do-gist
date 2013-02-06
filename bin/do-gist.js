#!/usr/bin/env node
var myGist = require("../");
var argv = require('optimist').argv;

if( argv.l ){
    myGist.doGist({isAnonymous: 0});
}else if( argv.a ) {
    myGist.doGist({isAnonymous: 1});
}else{
    printUsage();
}

function printUsage(){
    console.log("Usage : do-gist [-l,-a]");
    console.log(" -a : create anonymous gist");
    console.log(" -l : create your own gist");
}
