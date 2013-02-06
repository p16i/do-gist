var clipboard = require('copy-paste');
var Gister = require('gister');
module.exports = {
    doGist: function( opt ) {
        var gist = new Gister(
            {
                username: process.env.GITHUB_USERNAME,
                password: process.env.GITHUB_PASSWORD,
                isAnonymous: opt.isAnonymous
            }
        );

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

