import '../chunk-F3FYYIAV.js';
import path from 'path';

var getFilePathProp = (pathValue, fsRoot) => {
  const hasRoot = pathValue.includes(fsRoot);
  return {
    rootRelativePath: hasRoot ? pathValue.replace(fsRoot, "") : pathValue,
    absolutePath: hasRoot ? pathValue : path.join(fsRoot, pathValue)
  };
};

export { getFilePathProp };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=filePathUtils.js.map