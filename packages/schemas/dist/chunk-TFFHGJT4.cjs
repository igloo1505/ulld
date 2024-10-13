"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEO4DPBYKcjs = require('./chunk-EO4DPBYK.cjs');

// src/database/outputTypeSchemas/BibCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BibCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkEO4DPBYKcjs.BibCreateManyInputSchema, _chunkEO4DPBYKcjs.BibCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibCreateManyAndReturnArgsSchema_default = BibCreateManyAndReturnArgsSchema;




exports.BibCreateManyAndReturnArgsSchema = BibCreateManyAndReturnArgsSchema; exports.BibCreateManyAndReturnArgsSchema_default = BibCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-TFFHGJT4.cjs.map