module.exports = function(config) {
	config.set({
		
		//Plugins
		frameworks: ['mocha', 'chai'],
		plugins: [
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-junit-reporter',
			'karma-mocha',
			'karma-chai'
		],
		
		//Includes
		files: ['vladiator.js', 'test/*.js'],
		preprocessors: { 'vladiator.js': ['coverage'] },
		reporters: ['junit', 'coverage'],
		
		//Browser
		browsers: ['PhantomJS'],
		singleRun: true,
		autoWatch: false,
		
		//Reporters
		coverageReporter: {
			reporters: [
				{type: 'json', dir:'logs', file: 'coverage-final.json', subdir: '.'},
				{type: 'html', dir:'logs', subdir: '.'},
				{type: 'clover', dir:'logs', file: 'clover.xml', subdir: '.'},
				{type: 'text-summary'}
			]
		},
		junitReporter: {
			outputDir: 'logs'
		}
	});
};