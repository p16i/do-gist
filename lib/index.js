var execSync = require('exec-sync');
var Gister = require('gister');
var gist = new Gister();

module.exports = {
    doGist: function( str ) {
        var str = execSync('pbpaste');

        gist.on('created',function(data){
            console.info('Your gist : %s',data.html_url);
        });

        gist.create({ 
            "my_file.txt": str
        });


        return str;
    }
};

