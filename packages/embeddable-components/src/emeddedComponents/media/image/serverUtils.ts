import path from "path";
import { isRemote } from "./utils";

export const formatImageSourceString = (
    s: string,
    imageRemoteTest?: RegExp[],
    fsRoot?: string,
) => {
    if (s.startsWith("data:image/")) {
        return s;
    }
    if (isRemote(s, imageRemoteTest)) {
        return s;
    }
    if (!fsRoot) {
        return s;
    }
    return s.includes(fsRoot) ? s : path.join(fsRoot, s);
};
