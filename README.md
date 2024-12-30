<p align="center">
    <img width="150" src="https://avatars.githubusercontent.com/u/88612813">
</p>
<div align="center">
    <a href="https://github.com/safari-digital"><img src="https://img.shields.io/badge/safari-digital-green.svg"></a>
    <a href="https://dotnet.microsoft.com/en-us/"><img src="https://img.shields.io/badge/Typescript-blue.svg"></a>
</div>
<p align="center">
    <strong>@safari-digital/digital-lint-config</strong>
</p>
<p align="center">
    <em>Base conventions for safari-digital JS/TS projects.</em>
</p>

## Installation

#### Install digital-lint-config
```
npm i -D github:Safari-digital/digital-lint-config
```
#### Install peer dependencies
```
npm i -D eslint typescript-eslint @eslint/js @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

## Usage
#### Eslint
Create a `eslint.config.mjs` file in the root of your project and add the following code:
```js
import { eslintConfig } from 'digital-lint-config';
export default eslintConfig;
```
