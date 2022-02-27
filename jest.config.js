// @ts-check
/* eslint-env node */

/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/cypress/'
  ]
};

module.exports = options;
