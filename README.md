# lx-js-lib
js库

* API
```js
let api = new API().api('get', '/root/path').apis();
// {
//     host: 'http://localhost',
//     getRootPath: {
//         method: 'get',
//         url: '/root/path',
//         absUrl: 'http://localhost/root/path'
//     }
// }
console.log(api);

api.api('post', '/root/path/', '/root/path/post').apis();
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
console.log(api);
```