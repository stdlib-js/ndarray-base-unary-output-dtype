<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# unaryOutputDataType

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Resolve the output ndarray [data type][@stdlib/ndarray/dtypes] for a unary function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import unaryOutputDataType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-output-dtype@deno/mod.js';
```

#### unaryOutputDataType( dtype, policy )

Resolves the output ndarray [data type][@stdlib/ndarray/dtypes] for a unary function according to a [data type policy][@stdlib/ndarray/output-dtype-policies].

```javascript
var dt = unaryOutputDataType( 'int32', 'floating_point' );
// returns 'float64'
```

If `policy` is a [data type][@stdlib/ndarray/dtypes], the function always returns the `policy` value (i.e., the second argument).

```javascript
var dt = unaryOutputDataType( 'float32', 'float64' );
// returns 'float64'

dt = unaryOutputDataType( 'int32', 'float64' );
// returns 'float64'

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import map2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map2@deno/mod.js';
import unzip from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-unzip@deno/mod.js';
import cartesianProduct from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-cartesian-product@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import unaryOutputDataType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-output-dtype@deno/mod.js';

// Get the list of real-valued data types:
var dt = dtypes( 'real' );

// Define a list of output data type policies:
var policies = [
    'default',
    'real',
    'floating_point',
    'complex_floating_point'
];

// Generate dtype-policy argument pairs:
var args = cartesianProduct( dt, policies );

// Unzip the argument pair array:
args = unzip( args );

// Resolve output data types:
var out = map2( args[ 0 ], args[ 1 ], naryFunction( unaryOutputDataType, 2 ) );

// Print results:
logEach( 'dtypes: (%10s, %10s). policy: %s.', args[ 0 ], out, args[ 1 ] );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-unary-output-dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-unary-output-dtype

[test-image]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-unary-output-dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-unary-output-dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-unary-output-dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-unary-output-dtype/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-unary-output-dtype/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-unary-output-dtype/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib/tree/deno

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/stdlib/tree/deno

</section>

<!-- /.links -->
