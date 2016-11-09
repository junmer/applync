applync
===
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![License][license-image]][npm-url]

[npm-url]: https://npmjs.org/package/applync
[downloads-image]: https://img.shields.io/npm/dm/applync.svg
[npm-image]: https://img.shields.io/npm/v/applync.svg
[license-image]: https://img.shields.io/github/license/junmer/applync.svg

> open app link (intent, deeplink, universallink) in browsers

## Usage

CDN:

```html
<script src="https://unpkg.com/applync@latest"></script>
<script>
	applync('app://xxx');
</script>
```

AMD:

```javascript
require('applync')('app://xxx');
```

## Reference

- [The app: URI scheme - W3C](http://www.w3.org/TR/app-uri/)
- [Intent | Android Developers](https://developer.android.com/reference/android/content/Intent.html)
- [Enabling Deep Links for App Content | Android Developers](https://developer.android.com/training/app-indexing/deep-linking.html)
- [Universal Links for Developers - Apple Developer](https://developer.apple.com/ios/universal-links/)

## License

[MIT](./LICENSE)
