"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const inherit_1 = require("./inherit");
const expect = chai_1.default.expect;
// declare Super
function Super() {
    this.superProperty = 'this is super';
}
Super.prototype.superMethods = function () { };
Super.a = 12;
Super.superStaticMethod = function () { };
// declare Sub
function Sub() {
    this.subProperty = 'this is sub';
}
Sub.prototype.subMethods = function () { };
Sub.b = 13;
Sub.subStaticMethod = function () { };
// test
const NewSub = inherit_1.inherit(Sub, Super);
console.log(NewSub.prototype.constructor);
// @ts-ignore
const newSub = new NewSub();
console.log(newSub.__proto__.constructor);
// property equals
expect(newSub.superProperty).to.equal('this is super');
expect(newSub.subProperty).to.equal('this is sub');
// static equals
expect(NewSub.a).to.equal(12);
expect(NewSub.b).to.equal(13);
expect(NewSub.subStaticMethod).to.equal(Sub.subStaticMethod);
expect(NewSub.superStaticMethod).to.equal(Super.superStaticMethod);
// constructor equals
expect(newSub.__proto__.constructor).to.equal(Sub);
expect(newSub.__proto__.__proto__.constructor).to.equal(Super);
// methods equals
expect(newSub.__proto__.subMethods).to.equal(Sub.prototype.subMethods);
expect(newSub.__proto__.__proto__.superMethods).to.equal(Super.prototype.superMethods);
console.log("test success");
