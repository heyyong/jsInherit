import * as fs from 'fs';

export async function openFile(path: string): Promise<number> {
    return new Promise((resolve, reject) => {
        fs.open(path, 'r+', (err, fd) => {
            if (err) reject(err);

            resolve(fd);
        })
    })
}

export async function readFile(fd: number): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        fs.readFile(fd, (err, data) => {
            if (err) reject(err);

            resolve(data);
        })
    })
}

export async function writeFile(fd: number, data: any): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.writeFile(fd, data, (err) => {
            if (err) reject(err);

            resolve(void 0);
        })
    })
}

export async function closeFile(fd: number): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            if (err) reject(err);

            resolve(void 0);
        })
    })
}

