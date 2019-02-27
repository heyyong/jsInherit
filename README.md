# jsInherit
用 es5 实现的继承示例

需要注意的是 inherit 方法返回的是新的构造函数（因为是运行时，无法把 Super 编译到 Sub 当中），name 的值是不等于 Sub 的（因为 name 属性只读）

## 调试
```sh
yarn test
```