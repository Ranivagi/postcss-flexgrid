# PostCSS FlexGridComp

Flex and Grid Compatibility, [PostCSS] plugin.

Converts modern flex and grid properties to work on early-spec browsers:
- Replaces `start` and `end` alignment-values with `flex-start` and `flex-end` respectively.
- Adds corresponding `grid-gap` property to `gap`, `row-gap` and `column-gap` properties.

For example:
```css
.align-end {
    align-items: end;
}
.gap-10 {
    gap: 10px;
}

/* becomes */

.align-end {
    align-items: flex-end;
}
.gap-10 {
    grid-gap: 10px;
    gap: 10px;
}
```

## Usage

Add [PostCSS FlexGridComp] to your project:

```bash
npm install postcss postcss-flexgrid-comp --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssFlexGridComp = require('postcss-flexgrid-comp');

postcss([
    postcssFlexGridComp()
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS]: https://github.com/postcss/postcss
[PostCSS FlexGridComp]: https://github.com/Ranivagi/postcss-flexgrid
