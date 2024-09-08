'use strict';

var zod = require('zod');

// src/zod/build/additional/additionalUserContent.ts
var validImageExtends = ["jpg", "jpeg", "svg", "png", "webp"];
var validFaviconExtensions = ["ico", "png", "jpg", "svg"];
var additionalUserContent = zod.z.object({
  css: zod.z.string().optional(),
  favicon: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validFaviconExtensions.includes(_s);
    },
    {
      message: `Your favicon must be of a valid favicon type. Currently supported extensions are:
${validFaviconExtensions.join("\n")}`
    }
  ).optional(),
  logo: zod.z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validImageExtends.includes(_s);
    },
    {
      message: `Your logo must be of a valid image type. Currently supported image extensions are:
${validImageExtends.join("\n")}`
    }
  ).optional()
}).default({});

exports.additionalUserContent = additionalUserContent;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalUserContent.cjs.map