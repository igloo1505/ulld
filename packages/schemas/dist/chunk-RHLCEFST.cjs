"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUCNHQRTGcjs = require('./chunk-UCNHQRTG.cjs');

// src/database/outputTypeSchemas/SubjectCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SubjectCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkUCNHQRTGcjs.SubjectCreateManyInputSchema, _chunkUCNHQRTGcjs.SubjectCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SubjectCreateManyAndReturnArgsSchema_default = SubjectCreateManyAndReturnArgsSchema;




exports.SubjectCreateManyAndReturnArgsSchema = SubjectCreateManyAndReturnArgsSchema; exports.SubjectCreateManyAndReturnArgsSchema_default = SubjectCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-RHLCEFST.cjs.map