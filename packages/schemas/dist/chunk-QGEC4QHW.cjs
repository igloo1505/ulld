"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIUZVTRHKcjs = require('./chunk-IUZVTRHK.cjs');

// src/database/outputTypeSchemas/SubjectCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SubjectCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIUZVTRHKcjs.SubjectCreateManyInputSchema, _chunkIUZVTRHKcjs.SubjectCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SubjectCreateManyAndReturnArgsSchema_default = SubjectCreateManyAndReturnArgsSchema;




exports.SubjectCreateManyAndReturnArgsSchema = SubjectCreateManyAndReturnArgsSchema; exports.SubjectCreateManyAndReturnArgsSchema_default = SubjectCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-QGEC4QHW.cjs.map