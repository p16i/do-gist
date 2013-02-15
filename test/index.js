var assert = require("assert");
var myGist = require("../");

/* NEED TO BE UNDER REQUIRE MY-GIST */
var clipboard = require("./mock/copy-paste");

it('Create anonymous gist', function(){

    /* Mock Clipboard */
    var str = "TEST GIST";
    copy(str);

    assert.ok( myGist.doGist({ isAnonymous: 1}));
});

