'use strict';

var glob = require('glob');
var fs = require('fs');
var path = require('path');
var zod = require('zod');
require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/glob/getGlobServerSide.ts
var filePathGlobPropsSchema = zod.z.object({
  glob: zod.z.string().default("**/*").transform((x) => x.startsWith("/") ? x.slice(1) : x),
  type: zod.z.union([zod.z.literal("dirs"), zod.z.literal("files"), zod.z.literal("dirsAndFiles")]).default("files"),
  ignore: zod.z.union([zod.z.string(), zod.z.string().array()]).nullish(),
  returnAs: zod.z.union([zod.z.literal("absolute"), zod.z.literal("rootRelative")]).default("absolute")
});
var withForwardSlash = (p) => p.startsWith("/") ? p : `/${p}`;

// src/utils/glob/getGlobServerSide.ts
var getGlobServerSide = async (props, appConfig) => {
  let input = filePathGlobPropsSchema.parse(props);
  let res = await glob.glob(
    input.glob,
    {
      cwd: appConfig.fsRoot,
      ignore: input.ignore || void 0,
      nodir: input.type === "files"
    }
  );
  let returnAbsolute = input.returnAs === "absolute";
  if (returnAbsolute) {
    res = res.map((x) => path__default.default.join(appConfig.fsRoot, x));
  } else {
    res = res.map((x) => withForwardSlash(x));
  }
  if (input.type === "dirs") {
    res = res.filter(
      (x) => fs__default.default.statSync(returnAbsolute ? x : path__default.default.join(appConfig.fsRoot, x)).isDirectory()
    );
  }
  return res;
};

exports.getGlobServerSide = getGlobServerSide;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getGlobServerSide.cjs.map