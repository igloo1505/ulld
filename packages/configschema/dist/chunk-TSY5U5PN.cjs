"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');

// src/zod/ui/mediaConfig.ts
var _zod = require('zod');
var mediaConfigSchema = _zod.z.object({
  imageMap: _zod.z.record(
    _zod.z.string().describe(
      "An alias to more easily embed this image throughout your notes."
    ),
    _chunkJUH5FQQRcjs.zodPathStringField.call(void 0, 
      "The fsRoot relative path at which this image can be found."
    )
  ).default({}),
  includeDefaultImageMap: _zod.z.boolean().default(true).describe(
    "Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."
  ),
  imageRemoteTest: _zod.z.union([_zod.z.instanceof(RegExp), _zod.z.string()]).array().default([]).transform((l) => l.map((x) => typeof x === "string" ? x : x.source))
}).default({});
var mediaConfigSchemaOutput = _zod.z.object({
  imageMap: _zod.z.record(
    _zod.z.string(),
    _chunkJUH5FQQRcjs.zodPathStringField.call(void 0, 
      "The fsRoot relative path at which this image can be found."
    )
  ),
  includeDefaultImageMap: _zod.z.boolean(),
  imageRemoteTest: _zod.z.string().array()
});




exports.mediaConfigSchema = mediaConfigSchema; exports.mediaConfigSchemaOutput = mediaConfigSchemaOutput;
//# sourceMappingURL=chunk-TSY5U5PN.cjs.map