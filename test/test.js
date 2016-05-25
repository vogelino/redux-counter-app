
const executeTestList = (tests, indentation = '|   ') => {
	Object.keys(tests).forEach((testKey) => {
		const test = tests[testKey];
		if (typeof test === 'function') {
			console.log(`${indentation} TEST: "${testKey}"`);
			test();
			console.log(`${indentation} └ PASSED`);
		}
		else if (typeof test === 'object' && Object.keys(test).length >= 0) {
			console.log(`${indentation}TEST GROUP: "${testKey}"`);
			executeTestList(test, `${indentation}${indentation}`);
			console.log(`${indentation}└ PASSED`);
		}
		else {
			console.log(`${indentation}"${testKey}"" is wether a test function nor a group of tests!`)
		}
	});
};

export default (testSetName, tests) => {
	console.log(`\nTEST SET: "${testSetName}"`);
	executeTestList(tests);
	console.log(`└ PASSED`);
};
