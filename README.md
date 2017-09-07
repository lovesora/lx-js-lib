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