import { parse } from '@babel/parser';

import * as fsPromises from './fsPromises';
import { transformClassAst } from './transformClass';
import generate from '@babel/generator';

export async function transformClass(from: string, to: string): Promise<void> {
    let code = await readCode(from);
    let ast = parse(code);
    let transformedAst = transformClassAst(ast);
    let transformedCode = generate(transformedAst);
    await writeCode(to, transformedCode.code);
}

async function writeCode(path: string, code: string): Promise<void> {
    let fd = await fsPromises.openFile(path);
    await fsPromises.writeFile(fd, code);
    await fsPromises.closeFile(fd);
}

async function readCode(path: string): Promise<string> {
    let fd;
    let codeBuffer;
    try {
        fd = await fsPromises.openFile(path);
        codeBuffer = await fsPromises.readFile(fd);
        await fsPromises.closeFile(fd);
    } catch (e) {
        throw e;
    }

    return codeBuffer.toString('utf8');
}