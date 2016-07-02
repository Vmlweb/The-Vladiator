module.exports = function(config) {
	config.set({
		
		//Plugins
		frameworks: ['mocha', 'chai'],
		plugins: [
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-junit-reporter',
			'karma-mocha-reporter',
			'karma-mocha',
			'karma-chai'
		],
		
		//Includes
		files: ['vladiator.js', 'test/*.js'],
		preprocessors: { 'vladiator.js': ['coverage'] },
		reporters: ['mocha', 'junit', 'coverage'],
		
		//Browser
		browsers: ['PhantomJS'],
		singleRun: true,
		autoWatch: false,
		
		//Reporters
		coverageReporter: {
			reporters: [
				{type: 'json', dir:'logs/coverage', file: 'coverage-final.json', subdir: '.'},
				{type: 'html', dir:'logs/coverage', subdir: '.'},
				{type: 'clover', dir:'logs/coverage', file: 'clover.xml', subdir: '.'},
				{type: 'text-summary'}
			]
		},
		junitReporter: {
			outputDir: 'logs/tests'
		}
	});
};