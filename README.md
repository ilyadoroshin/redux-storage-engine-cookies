# [redux-storage-engine-cookies][]

[![dependencies](https://david-dm.org/bmatcuk/redux-storage-engine-cookies.svg)](https://david-dm.org/bmatcuk/redux-storage-engine-cookies)
[![devDependencies](https://david-dm.org/bmatcuk/redux-storage-engine-cookies/dev-status.svg)](https://david-dm.org/bmatcuk/redux-storage-engine-cookies#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-cookies.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-cookies)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-cookies.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-cookies)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-cookies.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-cookies)

`document.cookie` based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-cookies

## Usage

Stores everything inside a cookie.

```js
import createEngine from 'redux-storage-engine-cookies';
const engine = createEngine('my-save-key', options);
```

`options` is an optional hash of options to pass to [js-cookie][]. These
options include:

* `options.expires`: Either a number representing the number of days the cookie
  will persist, or a `Date` object. If omitted, the cookie will be a session
  cookie.
* `options.path`: path under which the cookie is valid. Default is `/`. Due to
  an IE bug, do _not_ include a filename in the path (such as `/path/to/file.ext`).
  IE will be unable to read the cookie if you do this. Instead, just use a path
  like `/path/to/`.
* `options.domain`: What domain the cookie is valid on. By default, it will be
  valid on the domain where the cookie is created. IE allows cookies to be
  accessed under all nested subdomains as well (such as `sub1.sub2.example.org`).
* `options.secure`: If true, requires HTTPS. Default is false.

See [js-cookie][] for additional documentation for these options.

**Warning**: Browsers allocate a very limited amount of space to cookies, so
don't expect to be able to store a large amount of data here! IE, for example,
limits _all_ cookies to a _total_ of 4096 bytes. If you have multiple cookies
on your domain, this means that the number of bytes you can store might be
significantly less than 4096 since you must share storage space with the
other cookies.

**Warning**: `document.cookie` does not expose a async API and every save/load
operation will block the JS thread!

**Warning**: Some browsers like IE<=11 do not support Promises! You could
use something like [es6-promise][] to polyfill.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-engine-cookies]: https://github.com/bmatcuk/redux-storage-engine-cookies
  [js-cookie]: https://github.com/js-cookie/js-cookie#cookie-attributes
  [es6-promise]: https://github.com/stefanpenner/es6-promise

