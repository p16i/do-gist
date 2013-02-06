var myGist = require("../");
var assert = require("assert");
var clipboard = require("copy-paste");

it('Create anonymous gist', function(){

    /* Mock Clipboard */
    var str = "TEST GIST";
    copy(str);

    assert.equal( myGist.doGist({ isAnonymous: 1}), str );
});

