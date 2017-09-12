# lx-js-lib
js库

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

api.api('post', '/root/path/', '/root/path/post');
// {
//     host: 'http://localhost',
//     getRootPath: {
//         method: 'get',
//         url: '/root/path',
//         absUrl: 'http://localhost/root/path'
//     },
//     postRootPath: {
//         method: 'post',
//         url: '/root/path/post',
//         absUrl: 'http://localhost/root/path/post'
//     }
// }
console.log(api.apis());
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