export function inherit(Sub: Function, Super: Function): Function {
  // make new ctor
  const NewCtor = function (this: any) {
    Super.call(this, arguments);
    Sub.call(this, arguments);
  }

  __extendsStatic(NewCtor, __extendsStatic(Sub, Super));

  let SubPrototype = NewCtor.prototype = Object.assign({} ,Sub.prototype);
  SubPrototype.constructor = Sub
  SubPrototype.__proto__ = Super.prototype;

  return NewCtor;
}

function __extendsStatic(Sub: Function, Super: Function) {
  return Object.assign(Sub, Super);
}