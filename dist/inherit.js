"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inherit(Sub, Super) {
    // make new ctor
    var NewCtor = function () {
        Super.call(this, arguments);
        Sub.call(this, arguments);
    };
    __extendsStatic(NewCtor, __extendsStatic(Sub, Super));
    // @ts-ignore
    var SubPrototype = NewCtor.prototype = __assign({ __proto__: null }, Sub.prototype);
    SubPrototype.constructor = Sub;
    SubPrototype.__proto__ = Super.prototype;
    return NewCtor;
}
exports.inherit = inherit;
function __extendsStatic(Sub, Super) {
    // @ts-ignore
    return __assign(Sub, Super);
}
function __assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return sources.reduce(function (target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }, target);
}
