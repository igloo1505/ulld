import {
  __esm
} from "./chunk-7UBRHILH.js";

// ../../node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename, getDirname, __dirname, __filename;
var init_esm_shims = __esm({
  "../../node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
    getFilename = () => fileURLToPath(import.meta.url);
    getDirname = () => path.dirname(getFilename());
    __dirname = getDirname();
    __filename = getFilename();
  }
});

export {
  __dirname,
  init_esm_shims
};
//# sourceMappingURL=chunk-ZRREZ4KQ.js.map