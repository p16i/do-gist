/* clipboard */
var clipboard;

/* Mock paste method */
GLOBAL.paste = exports.paste = function() {
    console.log("RETURN MOCK CLIPBOARD = %s ", clipboard);
	return clipboard;
};

/* Mock copy method */
GLOBAL.copy = exports.copy = function(str){
    clipboard = str;
    console.log("MOCK CLIPBOARD = %s ", clipboard);
};

