import { FilePathProp } from "../types/main";
import path from "path";

export const getFilePathProp = (
    pathValue: string,
    fsRoot: string,
): FilePathProp => {
    const hasRoot = pathValue.includes(fsRoot);
    return {
        rootRelativePath: hasRoot ? pathValue.replace(fsRoot, "") : pathValue,
        absolutePath: hasRoot ? pathValue : path.join(fsRoot, pathValue),
    };
};
