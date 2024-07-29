"use strict";var g=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var n=g(function(E,a){"use strict";var s=require("@stdlib/ndarray-base-assert-is-floating-point-data-type"),u=require("@stdlib/ndarray-base-assert-is-real-floating-point-data-type"),o=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),p=require("@stdlib/ndarray-base-assert-is-integer-data-type"),d=require("@stdlib/ndarray-base-assert-is-signed-integer-data-type"),l=require("@stdlib/ndarray-base-assert-is-unsigned-integer-data-type"),v=require("@stdlib/ndarray-base-assert-is-real-data-type"),f=require("@stdlib/ndarray-base-assert-is-numeric-data-type"),_=require("@stdlib/ndarray-base-assert-is-data-type"),r=require("@stdlib/ndarray-defaults"),m=require("@stdlib/string-format"),T={floating_point:[s,r.get("dtypes.floating_point")],real_floating_point:[u,r.get("dtypes.real_floating_point")],complex_floating_point:[o,r.get("dtypes.complex_floating_point")],integer:[p,r.get("dtypes.integer")],signed_integer:[d,r.get("dtypes.signed_integer")],unsigned_integer:[l,r.get("dtypes.unsigned_integer")],real:[v,r.get("dtypes.real")],numeric:[f,r.get("dtypes.numeric")]},q=r.get("dtypes.default");function y(t,e){var i;if(e==="default")return q;if(e==="same"||e==="promoted")return t;if(e==="bool")throw new Error("not implemented");if(i=T[e],i===void 0){if(_(e))return e;throw new TypeError(m("invalid argument. Second argument must be a supported data type policy. Value: `%s`.",e))}return i[0](t)?t:i[1]}a.exports=y});var D=n();module.exports=D;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
