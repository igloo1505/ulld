import path from 'path'


export const getPathFromArgument = (p: string): string =>{
    return path.isAbsolute(p)
        ? p
        : path.resolve(process.cwd(), p);
}
