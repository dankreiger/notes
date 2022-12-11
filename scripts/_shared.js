#!/usr/bin/env node

// @ts-check
const { exec } = require('child_process');
const { promisify } = require('util');

/**
 * @param {string} cmd - command to run
 * @returns {Promise<string>}
 */
const execPromise = (cmd) =>
  promisify(exec)(cmd)
    .then(({ stdout, stderr }) => {
      if (stderr) throw new Error(stderr);
      return stdout;
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });

/**
 * @param {string} project
 * @returns {boolean}
 */
const excludeE2E = (project) => !project.endsWith('-e2e');

module.exports = {
  excludeE2E,
  execPromise,
};
