# lx-js-lib
This project is the common js operation library.

## cli command

`yarn start`

## module import
you can import independent class with using es6
```js
// amd
define(['lx-js-lib'], function(lxJsLib){});
```

```js
// cmd
let lxJsLib = require('lx-js-lib');
```

```js
// es6
import {API} from 'lx-js-lib';
```

* API
```js
let api = new API().api('get', '/root/path');
// {
//     host: 'http://localhost',
//     getRootPath: {
//         method: 'get',
//         url: '/root/path',
//         absUrl: 'http://localhost/root/path'
//     }
// }
console.log(api.apis());

api.api('put', '/root/path/', '/root/path/:id');
// {
//     host: 'http://localhost',
//     getRootPath: {
//         method: 'get',
//         url: '/root/path',
//         absUrl: 'http://localhost/root/path'
//     },
//     putRootPath: {
//         method: 'put',
//         url: '/root/path/:id',
//         absUrl: 'http://localhost/root/path/:id',
//         insertRestParams: function...
//     }
// }
console.log(api.apis());

let putRootPath = api.apis().putRootPath;
putRootPath.insertRestParams({id: 10});

// {
//     method: 'put',
//     url: '/root/path/:id',
//     absUrl: 'http://localhost/root/path/:id'
//     restUrl: '/root/path/10',
//     restAbsUrl: 'http://localhost/root/path/10'
//     insertRestParams: function...
// }
console.log(putRootPath);
```

* Algorithm
```js
// descartes
let descartesResult = Algorithm.descartes({
    a: [
        'a1',
        'a2',
        'a3',
    ],
    b: [
        'b1',
        'b2',
    ]
})

// [ [ 'a1', 'b1' ], [ 'a1', 'b2' ], [ 'a2', 'b1' ], [ 'a2', 'b2' ], [ 'a3', 'b1' ], [ 'a3', 'b2' ] ]
console.log(descartesResult);
```

* $
```js
let nav = document.querySelector('body');
$.addClass(nav, 'red');
console.log(nav.className);// red
console.log($.hasClass(nav, 'red'));// true
$.removeClass(nav, 'red');
console.log(nav.className);// ''
console.log($.hasClass(nav, 'red'));// false
$.toggleClass(nav, 'red');
console.log(nav.className);// red
$.toggleClass(nav, 'red');
console.log(nav.className);// ''
```

* Compat
```js
import {Compat} from 'lx-js-lib';
Compat.css.isAbleAnimate()// true or false
Compat.css.isAbleByStyleName('animation')// true or false
Compat.browser.getWechatVersion()// 6.5
Compat.browser.getType()// one of ['IE', 'IE7', 'IE8', 'IE9', 'IE10', 'IE11', 'FF', 'Opera', 'Safari', 'Chorome', 'Edge', 'Unknown']
```