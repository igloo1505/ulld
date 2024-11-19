// src/methods/moveAndChangeExtension.ts
import path from "path";
var moveAndChangeExtension = (props) => {
  let pathData = path.parse(path.join(props.outputDir, props.rootRelativePath));
  return path.join(
    `${pathData.dir}`,
    `${pathData.name}${props.newExtension}`
  );
};

export {
  moveAndChangeExtension
};
//# sourceMappingURL=chunk-GJCDQGO6.mjs.map