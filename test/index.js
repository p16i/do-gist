var myGist = require("../");
var assert = require("assert");
var clipboard = require("copy-paste");

it('should return -1 when the value is not present', function(){

    /* Mock Clipboard */
    var str = "TEST GIST";
    copy(str);

    assert.equal( myGist.doGist(), str );
});

