<h1 align="center">Rui Design</h1>

<div align="center">

A minimalist React UI library.

</div>

English | [简体中文](./README-zh_CN.md)

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install antd
```

```bash
yarn add antd
```

## 🔨 Usage

```jsx
import { Button, DatePicker } from 'rui-design';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
```

And import style manually:

```jsx
import 'rui-design/dist/antd.css'; // or 'antd/dist/antd.less'
```

### TypeScript

`antd` is written in TypeScript with complete definitions, check [Use in TypeScript](https://ant.design/docs/react/use-in-typescript) to getting started.

## 🌍 Internationalization

Dozens of languages supported in `antd`, see [i18n](https://ant.design/docs/react/i18n).

## 🔗 Links

- [Home page](https://zhangtao25.github.io/rui-design/)
