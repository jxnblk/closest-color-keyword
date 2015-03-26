# closest-color-keyword

Returns the closest CSS color keyword based on a color value

```bash
npm install closest-color-keyword
```

```js
var keyword = require('closest-color-keyword');

var name = keyword('#f00'); // 'red'
```

## Options

### `basic`
Default false

Returns a keyword from the [CSS1 values](http://www.w3.org/TR/CSS1/#color-units)
for simpler names.

```js
var name = keyword('#228b22', { basic: true });
```

