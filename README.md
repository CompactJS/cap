<h1 align="center">🧢 @compactjs/cap</h1>
<h3 align="center">Caps a value when out of a defined range</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/cap" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/cap.svg">
  </a>
  <a href="https://github.com/CompactJS/cap/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/cap" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/cap#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/cap/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [About](#What-it-does)
- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## What it does

@compactjs/cap limits any number to a given range.
Similar to [@compactjs/limit](https://github.com/CompactJS/limit) but caps it when out of range.

## Install

### NPM:

```sh
npm install @compactjs/cap
```

Or download manually: <https://unpkg.com/@compactjs/cap/dist/index.umd.js>

## Usage

### As module:

```javascript
import { cap } from '@compactjs/cap';
```

Else:

```javascript
const { cap } = cap;
```

### Example:

```javascript
cap(23, 0, 1); // returns: 1

cap(-5, 1, -4); // returns: -4
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/cap/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/cap/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
