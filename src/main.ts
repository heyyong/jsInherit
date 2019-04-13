import * as path from 'path';
import { transformClass } from './parse';

const resolve = (..._path: string[]): string => {
    return path.resolve(__dirname, ..._path);
}

transformClass(resolve('./inherit.js'), resolve('./inherit.transformed.js'));