"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVSVR6NS5cjs = require('./chunk-VSVR6NS5.cjs');

// src/database/outputTypeSchemas/TagCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var TagCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkVSVR6NS5cjs.TagCountOutputTypeSelectSchema).nullish()
}).strict();
var TagCountOutputTypeArgsSchema_default = _chunkVSVR6NS5cjs.TagCountOutputTypeSelectSchema;




exports.TagCountOutputTypeArgsSchema = TagCountOutputTypeArgsSchema; exports.TagCountOutputTypeArgsSchema_default = TagCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-IUZEYFDJ.cjs.map