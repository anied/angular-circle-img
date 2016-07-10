# Angular Circle Img (angular_circle_img)

## Description
**Angular Circle Image** is intended to be a flexible directive to render a source image into a circle and intelligently size it to avoid and distortion of the image often caused by dimension mismatches.  It is currently at version 0.1.0 and under development.

## Basic Usage

### Including The Directive In Your Project
To use **Angular Circle Image** you must add the `dist` directory into your project and include the code in your page:

```html
<script src="dist/angularCircleImg.min.js"></script>
```

Then include `"angularCircleImgModule"` as a dependency for your application module:

```javascript
angular.module('yourModule', ['angularCircleImgModule']);
```

### Using the Directive
The directive is used as the `<circle-img>` element, with options passed in by attribute.

```html
<circle-img ci-src="img/VanGogh.jpg" ci-diameter="57" ci-alt="Image of Van Gogh"></circle-img>
```

For simplicity's sake, no css dependency is included with this package.  To make your CIs (Circle Images) behave more like standard images, add the following style somewhere in your CSS:

```css
.ci-wrapper {
    display: inline-block;
    vertical-align: middle;
}
```

See the "examples" page in the repo to see the directive in action.

### Dev environment
Install npm and bower dependencies.  Run the persistent tasks `npm start` and `gulp develop:debug` in two separate terminal windows, and then navigate to `localhost:8000` -- this will load the "examples" page.

### Settings (Attributes)
_Please note that all attributes are "@" scoped._
- **ci-src**: Source path to your image-- will be passed to the resulting `<img>` element's `ng-src` attribute.
- **ci-diameter**: Number representing the desired diameter of the resulting circle-- image size will be adjusted so that the smallest dimension of the image is equal to this diameter and the other dimension is sized appropriately
- **ci-alt**: Text for the image `alt` attribute.
- **ci-balance-x** _[optional: "left", "center", "right"]_: If included, shows preference to the left edge, center, or right edge of the image when the width is the larger dimension.  Default to `"center"` when omitted.
- **ci-balance-y** _[optional: "top", "center", "bottom"]_: If included, shows preference to the top edge, center, or bottom edge of the image when the height is the larger dimension.  Default to `"center"` when omitted.

## TODO List
- Get the app shell setup
    + ~~Express server up and running for development~~
    + ~~Bower & Example/Dev Page~~
    + ~~Gulp tasks to build src into example and dist~~
- Build the directive (DUMB)
    + ~~Get the directive available in the example/dev environment~~
    + ~~Build it to work as designed~~
- Polish (SMART)
    + ~~Figure out the best way to package and expose~~
        * ~~Standard module?~~
        * ~~**Browserify**?~~
        * ~~**ES6**?~~
        * ~~Something else?~~
- Flesh out documentation to be more complete/readable
- Refactor to leverage more ES6 features
- Nicen up example page for easier public consumption.
- Tests?