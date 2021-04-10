
[![TypeScript version][ts-badge]][typescript-38]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][LICENSE]
[![Build Status](https://cloud.drone.io/api/badges/almerindo/traceability/status.svg)](https://cloud.drone.io/almerindo/traceability)



# Use
```js
import ContextAsyncHooks from 'traceability';

const context = ContextAsyncHooks.getInstance();
context.createRequestContext({ trackId: '1234567890' });
const data = context.getRequestContext();

console.info(data);
```

## License

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-%3E=%2014.16-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://raw.githubusercontent.com/almerindo/traceability/main/LICENSE



[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/...
[prettier]: https://prettier.io

