"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5DEJBS5Ycjs = require('./chunk-5DEJBS5Y.cjs');

// src/zod/ui/mediaConfig.ts
var _zod = require('zod');
var mediaConfigSchema = _zod.z.object({
  imageMap: _zod.z.record(_zod.z.string().describe("An alias to more easily embed this image throughout your notes."), _chunk5DEJBS5Ycjs.zodPathStringField.call(void 0, "The fsRoot relative path at which this image can be found.")).default({}),
  includeDefaultImageMap: _zod.z.boolean().default(true).describe("Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."),
  imageRemoteTest: _zod.z.instanceof(RegExp).array().default([])
}).default({});



exports.mediaConfigSchema = mediaConfigSchema;
//# sourceMappingURL=chunk-O5CTXNDN.cjs.map