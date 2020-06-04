#!/usr/bin/env node

const isInstalled = require('is-module-installed');

if (!isInstalled('antd')) {
  throw new Error('antd is not installed');
}

const { resolve } = require('path');
const { copy } = require('fs-extra');
const { Json, Text } = require('fs-chain');

const { antdPath, findComponents, createPassportFile } = require('./lib');

new Json()
  .source('antd/package.json')
  .handle(({ module, sideEffects, ...rest }) => ({
    sideEffects: [`es-less/**/style/*`, ...sideEffects],
    module: `es-less/index.js`,
    ...rest,
  }))
  .output();

copy(
  require.resolve(`antd/es/index.js`),
  resolve(antdPath, `es-less/index.js`),
);

async function action() {
  const components = await findComponents();

  components.forEach((component) => {
    new Text()
      .handle(() => createPassportFile(component))
      .output(resolve(antdPath, `es-less`, component, `index.js`));
  });
}

action();
