var casper = require('casper').create();

var service = casper.cli.args[0]

require('./node_modules/musepm-'+service+'/lib/signupbot');

