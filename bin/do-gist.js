#!/usr/bin/env node
var myGist = require("../");
var argv = require('optimist').argv;

if( argv.h || argv.help ){
    printUsage();
}else if( argv.my  ) {
    myGist.doGist({isAnonymous: 0});
}else{
    myGist.doGist({isAnonymous: 1});
}

function printUsage(){
    console.log("Usage : do-gist [--my]");
    console.log(" no option : create anonymous gist");
    console.log(" --my : create your own gist");
}
