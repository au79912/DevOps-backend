module.exports = {
    // The root directory that Jest should scan for tests and modules within
    roots: ['<rootDir>/backend/tests'],

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    // Run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
