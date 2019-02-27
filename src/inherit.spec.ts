import chai from 'chai';

import { inherit } from './inherit';

const expect = chai.expect;

// declare Super
function Super(this: any) {
  this.superProperty = 'this is super';
}

Super.prototype.superMethods = function () { }

Super.a = 12;

Super.superStaticMethod = function () { }

// declare Sub
function Sub(this: any) {
  this.subProperty = 'this is sub';
}

Sub.prototype.subMethods = function () { }

Sub.b = 13;

Sub.subStaticMethod = function () { }

// test
const NewSub = inherit(Sub, Super) as any;
// @ts-ignore
const newSub = new NewSub();

// property equals
expect(newSub.superProperty).to.equal('this is super');
expect(newSub.subProperty).to.equal('this is sub');

// static equals
expect(NewSub.a).to.equal(12)
expect(NewSub.b).to.equal(13)
expect(NewSub.subStaticMethod).to.equal(Sub.subStaticMethod);
expect(NewSub.superStaticMethod).to.equal(Super.superStaticMethod);

// constructor equals
expect(newSub.__proto__.constructor).to.equal(Sub)
expect(newSub.__proto__.__proto__.constructor).to.equal(Super);

// methods equals
expect(newSub.__proto__.subMethods).to.equal(Sub.prototype.subMethods)
expect(newSub.__proto__.__proto__.superMethods).to.equal(Super.prototype.superMethods)

console.log("test success");