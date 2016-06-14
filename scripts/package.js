var webpack = require('webpack');
var config = require('./../webpack.config.js');

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production"),

        }
    })
);

webpack(config).run(function(err, stats) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully packed");
    }
});