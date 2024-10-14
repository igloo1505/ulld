"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHQOIV23Mcjs = require('./chunk-HQOIV23M.cjs');

// src/database/outputTypeSchemas/BusinessContactCreateManyArgsSchema.ts
var _zod = require('zod');
var BusinessContactCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkHQOIV23Mcjs.BusinessContactCreateManyInputSchema, _chunkHQOIV23Mcjs.BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BusinessContactCreateManyArgsSchema_default = BusinessContactCreateManyArgsSchema;




exports.BusinessContactCreateManyArgsSchema = BusinessContactCreateManyArgsSchema; exports.BusinessContactCreateManyArgsSchema_default = BusinessContactCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-NNYD624F.cjs.map