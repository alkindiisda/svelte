module.exports = {
    transform: {
      '^.+\\.svelte$': ['svelte-jester', {
        'babel': true,
      }],
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    testPathIgnorePatterns: ['node_modules'],
    bail: 1,
    verbose: true,
    testEnvironment: 'jsdom'
};

  