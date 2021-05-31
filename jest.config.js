// jest.config.js
const { defaults } = require('jest-config')
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: { '^.+\\.js$': 'babel-jest', '^.+\\.css$': 'jest-transform-css' },
  setupFiles: ['./tests/test-env.js'],
}