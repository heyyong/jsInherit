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