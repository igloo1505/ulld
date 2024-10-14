"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIUZVTRHKcjs = require('./chunk-IUZVTRHK.cjs');

// src/database/outputTypeSchemas/SubjectCreateManyArgsSchema.ts
var _zod = require('zod');
var SubjectCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIUZVTRHKcjs.SubjectCreateManyInputSchema, _chunkIUZVTRHKcjs.SubjectCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SubjectCreateManyArgsSchema_default = SubjectCreateManyArgsSchema;




exports.SubjectCreateManyArgsSchema = SubjectCreateManyArgsSchema; exports.SubjectCreateManyArgsSchema_default = SubjectCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-K7LGBEVA.cjs.map