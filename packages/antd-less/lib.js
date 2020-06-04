const { resolve, dirname } = require('path');
const globby = require('globby');

const antdPath = dirname(require.resolve('antd/package.json'));

function findComponents() {
  return globby('*', {
    cwd: resolve(antdPath, 'es'),
    ignore: ['locale', '_util'],
    onlyDirectories: true,
    deep: 1,
  });
}

function createPassportFile(component) {
  return `import '../../es/${component}/style/index.js';
import Main from '../../es/${component}/index.js';
export default Main;`;
}

module.exports = {
  antdPath,
  findComponents,
  createPassportFile,
};
