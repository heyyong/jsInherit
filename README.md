# jsInherit
一个简单的继承实例

会将
```js
function A() {
    this.a = 12;
}

function B__extends__A() {
    this.b = 12;
}
```
当作继承来看待，编译结果为：
```js
function A() {
  this.a = 12;
}

function B() {
  function __inheritProrotype(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
  }

  var __args;

  for (var __i in arguments) {
    __args[i] = arguments[i];
  }

  __inheritProrotype(B, A);

  A.call(this, __args);
  this.b = 12;
}
```

##
使用
```sh
yarn build
```
来进行编译