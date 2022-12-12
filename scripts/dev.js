#!/usr/bin/env node

// @ts-check
const { spawn } = require('child_process');
const inquirer = require('inquirer');
const { execPromise, excludeE2E } = require('./_shared');

/**
 * Opens menu to select which project to serve
 */
async function dev() {
  /**
   * @type {import('inquirer').QuestionCollection}
   */
  const questions = [
    {
      type: 'checkbox',
      name: 'projects',
      message: 'Which project would you like to serve?',
      choices: ['songs', 'shared-ui'],
    },
  ];

  const { projects } = await inquirer.prompt(questions);

  spawn(`npx nx run-many --target=serve --projects=${projects}`, {
    stdio: 'inherit',
    shell: true,
  });
}

dev().catch((e) => {
  console.error(e);
  process.exit(1);
});
