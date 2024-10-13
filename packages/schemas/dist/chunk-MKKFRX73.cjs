"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYU7M2MSRcjs = require('./chunk-YU7M2MSR.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateManyArgsSchema.ts
var _zod = require('zod');
var WhiteboardCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkYU7M2MSRcjs.WhiteboardCreateManyInputSchema, _chunkYU7M2MSRcjs.WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateManyArgsSchema_default = WhiteboardCreateManyArgsSchema;




exports.WhiteboardCreateManyArgsSchema = WhiteboardCreateManyArgsSchema; exports.WhiteboardCreateManyArgsSchema_default = WhiteboardCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-MKKFRX73.cjs.map