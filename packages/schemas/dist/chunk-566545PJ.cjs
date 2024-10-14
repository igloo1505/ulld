"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHQOIV23Mcjs = require('./chunk-HQOIV23M.cjs');

// src/database/outputTypeSchemas/BusinessContactCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BusinessContactCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkHQOIV23Mcjs.BusinessContactCreateManyInputSchema, _chunkHQOIV23Mcjs.BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BusinessContactCreateManyAndReturnArgsSchema_default = BusinessContactCreateManyAndReturnArgsSchema;




exports.BusinessContactCreateManyAndReturnArgsSchema = BusinessContactCreateManyAndReturnArgsSchema; exports.BusinessContactCreateManyAndReturnArgsSchema_default = BusinessContactCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-566545PJ.cjs.map