// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');
//var gulp = require('gulp');

//gulp.task('default', function() {
  // place code for your default task here
 // watch
//});
/*var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxy = require('proxy-middleware');
var url = require('url');
var paths = require('../paths');
gulp.task('serve', ['build' ], function(done) {

  var proxyOptionsAccessControl = function(req,res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
  };
  var proxyOptionsApiRoute = url.parse('http://localhost:' + paths.nodeJsPort +  '/api') ;
  proxyOptionsApiRoute.route = '/api';

  var proxyOptionsAuthRoute = url.parse('http://localhost:' + paths.nodeJsPort +  '/auth') ;
  proxyOptionsAuthRoute.route = '/auth';

  browserSync({
    open: false,
    port: paths.webServerPort,
    server: {
      baseDir: ['.'],
      middleware: [
        proxyOptionsAccessControl,
        proxy(proxyOptionsApiRoute),
        proxy(proxyOptionsAuthRoute)]
    }
  }, done);
});
*/
