 /*jshint unused:false */

/***************

  This file allow to configure a proxy system plugged into BrowserSync
  in order to redirect backend requests while still serving and watching
  files from the web project

  IMPORTANT: The proxy is disabled by default.

  If you want to enable it, watch at the configuration options and finally
  change the `module.exports` at the end of the file

***************/

'use strict';

var httpProxy = require('http-proxy');
var chalk = require('chalk');

/*
 * Location of your backend server
 */
// var proxyTarget = 'http://localhost:8080';
var proxyTarget = 'http://localhost:8081';

var proxy = new httpProxy.createProxyServer({
  target: proxyTarget
});

proxy.on('proxyReq', function(proxyReq, req, res) {
  proxyReq.setHeader('Access-Control-Allow-Origin', proxyTarget);

  console.log(chalk.green('[Proxy]'), 'Request made to:', proxyTarget+req.url);
});

proxy.on('error', function(error, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  console.error(chalk.red('[Proxy]'), error);
});

/*
 * The proxy middleware is an Express middleware added to BrowserSync to
 * handle backend request and proxy them to your backend.
 */
function proxyMiddleware(req, res, next) {


  /*
   * This test is the switch of each request to determine if the request is
   * for a static file to be handled by BrowserSync or a backend request to proxy.
   *
   * The existing test is a standard check on the files extensions but it may fail
   * for your needs. If you can, you could also check on a context in the url which
   * may be more reliable but can't be generic.
   */
  if (!/rnp-agendamento\/api\//.test(req.url)) {
    //console.log("next(): " + req.url);
    next();
  } else {
    //console.log("proxy.web: " + req.url);
    proxy.web(req, res);
  }
}

/*
 * This is where you activate or not your proxy.
 *
 * The first line activate if and the second one ignored it
 */

module.exports = [proxyMiddleware];
//module.exports = [];
