import path from 'path';
export const getPathFromArgument = (p) => {
    return path.isAbsolute(p)
        ? p
        : path.resolve(process.cwd(), p);
};
//# sourceMappingURL=getPathFromArgument.js.map