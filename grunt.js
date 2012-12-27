
module.exports = function(grunt) {
	grunt.initConfig({
		lint: {
			all: ['src/**/*.js']
		},
		jshint: {
			options: '<json:.jshintrc>'
		},
		browserify: {
			'build/dat.gui.js': {
				entries: ['src/**/*.js'],
				options: {
					debug: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default',  ['lint',
									'browserify'
									]);
};
