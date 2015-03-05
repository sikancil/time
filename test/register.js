var test   = require('tape');
var server = require("../server.js");

test("POST /login for un-registered person >> 401", function(t) {
  var person = {
    "email"    : "everything.is@awesome.io",
    "password" : "PinkFluffyUnicorns"
  }
  var options = {
    method  : "POST",
    url     : "/login",
    payload : person
  };
  // server.inject lets us similate an http request
  server.inject(options, function(res) {
    // console.log(" - - - - - - - - - - - - ");
    // console.dir(res.result);
    // console.log(" - - - - - - - - - - - - ");
    t.equal(res.statusCode, 401, "Unregistered Cannot Login");
    t.end();
    server.stop();
  });
});
