# react-materials-icon

> 🍺 Hi there, material icons for react lovers &lt;3, Thanks...

[![NPM](https://img.shields.io/npm/v/react-materials-icon.svg)](https://www.npmjs.com/package/react-materials-icon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```js
npm install --save react-materials-icon

//import material-icon scss
import 'material-icons/iconfont/material-icons.scss';
```

## Usage

```jsx
import React, { Component } from 'react'

//import MaterialReactIcon from react-materials-icon
import MaterialReactIcon from 'react-materials-icon'

class Example extends Component {
  render () {
    return (
      //And use wherever you want...
      <MaterialReactIcon icon="android" size="4" color="orange" />
    )
  }
}
```

## Props
- **icon**: pass icon name `e.g -android` [material-icons](https://material.io/resources/icons/?style=baseline)
- **size**: pass icon size `size in rem`
- **color**: you can give any valid value `i.e red, yellow, #fffff, #ff0000.`

## License

MIT © [License](https://github.com/ajaymarathe/react-materials-icon/blob/master/LICENSE)
