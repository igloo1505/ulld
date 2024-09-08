'use strict';

var zod = require('zod');

// src/schemas/filePath/filePathInput.ts
var filePathGlobPropsSchema = zod.z.object({
  glob: zod.z.string().default("**/*").transform((x) => x.startsWith("/") ? x.slice(1) : x),
  type: zod.z.union([zod.z.literal("dirs"), zod.z.literal("files"), zod.z.literal("dirsAndFiles")]).default("files"),
  ignore: zod.z.union([zod.z.string(), zod.z.string().array()]).nullish(),
  returnAs: zod.z.union([zod.z.literal("absolute"), zod.z.literal("rootRelative")]).default("absolute")
});

exports.filePathGlobPropsSchema = filePathGlobPropsSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=filePathInput.cjs.map