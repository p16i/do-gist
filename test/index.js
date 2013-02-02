var myGist = require("../");
var assert = require("assert");
var execSync = require("exec-sync");

it('should return -1 when the value is not present', function(){

    /* Mock Clipboard */
    var str = "TEST GIST";
    execSync("echo "+str+" | pbcopy");

    assert.equal( myGist.doGist(), str );
});

