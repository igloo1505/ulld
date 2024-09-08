import { filePathGlobPropsSchema } from './chunk-EXFWPJVA.js';
import { withForwardSlash } from './chunk-JKM3T6TO.js';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

var getGlobServerSide = async (props, appConfig) => {
  let input = filePathGlobPropsSchema.parse(props);
  let res = await glob(
    input.glob,
    {
      cwd: appConfig.fsRoot,
      ignore: input.ignore || void 0,
      nodir: input.type === "files"
    }
  );
  let returnAbsolute = input.returnAs === "absolute";
  if (returnAbsolute) {
    res = res.map((x) => path.join(appConfig.fsRoot, x));
  } else {
    res = res.map((x) => withForwardSlash(x));
  }
  if (input.type === "dirs") {
    res = res.filter(
      (x) => fs.statSync(returnAbsolute ? x : path.join(appConfig.fsRoot, x)).isDirectory()
    );
  }
  return res;
};

export { getGlobServerSide };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZWT5CRHM.js.map