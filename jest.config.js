module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/generated/**',
    '!src/server.js'
  ],
  coverageDirectory: 'coverage',
  verbose: true
};
