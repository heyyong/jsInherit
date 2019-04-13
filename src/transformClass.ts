import * as t from "@babel/types";
import { parse } from '@babel/parser';
import traverse, { Node } from "@babel/traverse";
import generate from '@babel/generator';

export function transformClassAst(ast: t.File): t.File {
    traverse(ast, {
        FunctionDeclaration(path) {
            let node = path.node;
            if(node.id === null || !/__extends__/.test(node.id.name)) return;

            let { SubName, SuperName } = getInheritanceObjectName(node.id.name);
            let bodyCode: string = (
                node
                    .body
                    .body
                    .map(statement => generate(statement).code)
                    .join('')
            );
            node.id.name = SubName;
            let template = generateInheritTemplate(SubName, SuperName, bodyCode);
            console.log(template);
            let transformedBody = parse(template).program.body;
            node.body.body = transformedBody;
        }
    })

    return ast;
}

function getInheritanceObjectName(name: string): { SubName: string; SuperName: string} {
    let result = /(.*)__extends__(.*)/.exec(name);
    if (!result) throw new Error(`has not correct inherit grammar ${name}`);

    return {
        SubName: result[1],
        SuperName:  result[2]
    };
}

function generateInheritTemplate(SubName: string, SuperName: string, SubCtorBody: string): string {
    return (
`
function __inheritProrotype(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

var __args;
for (var __i in arguments) {
    __args[i] = arguments[i];
}
__inheritProrotype(${SubName}, ${SuperName});

${SuperName}.call(this, __args);
${SubCtorBody}
`
    )
}