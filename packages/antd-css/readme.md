# @shaking/antd-css

Make `antd` support webpack `tree-shaking` out of the box.

[![npm][npm-badge]][npm-url]
[![license][license-badge]][github-url]
![node][node-badge]

## Installation

```bash
npm install @shaking/antd-css --save-dev
```

Now, You don't need `babel-plugin-import` to handle `antd` import anymore.

## Usage

Enable `webpack@4` tree shaking of ES modules. Add `css` support to your webpack scaffold. If you already did that, just:

```js
import { Card, Alert } from 'antd';
```

## Tips

If you need to support more complex use cases, I still suggest using [babel-plugin-import](https://github.com/ant-design/babel-plugin-import).

[npm-url]: https://www.npmjs.com/package/@shaking/antd-css
[npm-badge]: https://img.shields.io/npm/v/@shaking/antd-css.svg?style=flat-square&logo=npm
[github-url]: https://github.com/Airkro/shaking/tree/master/packages/antd-css
[node-badge]: https://img.shields.io/node/v/@shaking/antd-css.svg?style=flat-square&colorB=green&logo=node.js
[license-badge]: https://img.shields.io/npm/l/@shaking/antd-css.svg?style=flat-square&colorB=blue&logo=github
