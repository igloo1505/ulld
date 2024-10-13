"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUCNHQRTGcjs = require('./chunk-UCNHQRTG.cjs');

// src/database/outputTypeSchemas/SubjectCreateManyArgsSchema.ts
var _zod = require('zod');
var SubjectCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkUCNHQRTGcjs.SubjectCreateManyInputSchema, _chunkUCNHQRTGcjs.SubjectCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SubjectCreateManyArgsSchema_default = SubjectCreateManyArgsSchema;




exports.SubjectCreateManyArgsSchema = SubjectCreateManyArgsSchema; exports.SubjectCreateManyArgsSchema_default = SubjectCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-6LVEJHAA.cjs.map