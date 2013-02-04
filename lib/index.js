var clipboard = require('copy-paste');
var Gister = require('gister');
var gist = new Gister(
    {
        username: process.env.GITHUB_USERNAME,
        password: process.env.GITHUB_PASSWORD
    }
);

module.exports = {
    doGist: function( str ) {
        var str = paste();

        gist.on('created',function(data){
            console.info('Your gist : %s',data.html_url);
        });

        gist.create({ 
            "my_file.txt": str
        });

        return str;
    }
};

