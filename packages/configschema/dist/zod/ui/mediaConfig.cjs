'use strict';

var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');

// src/zod/ui/mediaConfig.ts
zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodPathStringField = (desc, optional) => desc ? optional ? zod.z.string().optional().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : optional ? zod.z.string().optional().transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().transform((a) => a && fsUtils.withForwardSlash(a));

// src/zod/ui/mediaConfig.ts
var mediaConfigSchema = zod.z.object({
  imageMap: zod.z.record(zod.z.string().describe("An alias to more easily embed this image throughout your notes."), zodPathStringField("The fsRoot relative path at which this image can be found.")).default({}),
  includeDefaultImageMap: zod.z.boolean().default(true).describe("Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."),
  imageRemoteTest: zod.z.instanceof(RegExp).array().default([])
}).default({});

exports.mediaConfigSchema = mediaConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mediaConfig.cjs.map