"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYU7M2MSRcjs = require('./chunk-YU7M2MSR.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var WhiteboardCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkYU7M2MSRcjs.WhiteboardCreateManyInputSchema, _chunkYU7M2MSRcjs.WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateManyAndReturnArgsSchema_default = WhiteboardCreateManyAndReturnArgsSchema;




exports.WhiteboardCreateManyAndReturnArgsSchema = WhiteboardCreateManyAndReturnArgsSchema; exports.WhiteboardCreateManyAndReturnArgsSchema_default = WhiteboardCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-EGJOF536.cjs.map