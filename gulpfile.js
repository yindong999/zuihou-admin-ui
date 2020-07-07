const gulp = require('gulp');
const run = require('gulp-run');
const sonarqubeScanner = require('sonarqube-scanner');
gulp.task('runSonar', function(callback) {
  sonarqubeScanner({
	serverUrl : 'http://114.116.67.171:9000',
    options : {
      "sonar.projectVersion": '1.0',
	  "sonar.sources": 'src',
	  "sonar.language": 'js',
	  "sonar.exclusions": '**/*.spec.ts,./node_modules,./target,./build,./image,./.svn',
	  "sonar.login": 'admin',
	  "sonar.password": 'admin',
	  "sonar.projectKey": 'zuihou-admin-ui',
	  "sonar.projectName": 'zuihou-admin-ui'
    }
  }, callback);
});
gulp.task('sonar', gulp.series('runSonar'));
