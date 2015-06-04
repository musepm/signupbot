var casper = require('casper').create();

console.log(casper.cli.args);
var args = casper.cli.args;
var teamdomain = args[0];
var email = args[1];
var pass = args[2];

console.log(teamdomain,email,pass);

casper.start('https://'+teamdomain+'.slack.com/', function() {
  this.echo(this.getTitle());
  this.echo(this.getHTML());
  var args = casper.cli.args;
  this.fill('form#signin_form', {
          'email':    email,
          'password': pass,
          'signin': 1,
          'redir': ''
       }, true);
});

casper.then(function() {
  this.wait(10000, function() {
    this.echo(this.getTitle());
    this.echo(this.fetchText('p'));
    this.capture('page.png');
  });
});

casper.thenOpen('https://my.slack.com/services/new/bot', function() {
  this.wait(3000, function() {
    this.echo(this.getTitle());
    this.capture('page.png');
  });    
})
                                           
casper.run();

