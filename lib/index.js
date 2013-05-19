var clipboard = require('copy-paste');
var Gister = require('gister');
var request = require('request');

/* Object of Git IO URL */
var gitIOURL= {
    create: 'http://git.io/create',
    get: 'http://git.io/'
}

module.exports = {
    doGist: function( opt ) {
        var gist = this.createGister(opt);
        var str = paste();

        gist.on('created',function(data){
            // Short URL
            request.post( gitIOURL.create,
                 { form: { url: data.html_url } },
                 function( error, response, body ) {
                     printResult(gitIOURL.get+body);
                 }
            )
        });

        gist.create({
            "my_file.txt": str
        });

        return str;
    },
    createGister: function( opt ) {
        return new Gister(
            {
                username: process.env.GITHUB_USERNAME,
                password: process.env.GITHUB_PASSWORD,
                isAnonymous: opt.isAnonymous
            }
        );
    }

};

function printResult(url) {
    // Remove scheme ( ie. http )
    url = url.replace(/http(s)?:\/\//, '');
    console.info('Got gist : %s',url);
}
