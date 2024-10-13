"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEO4DPBYKcjs = require('./chunk-EO4DPBYK.cjs');

// src/database/outputTypeSchemas/BibCreateManyArgsSchema.ts
var _zod = require('zod');
var BibCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkEO4DPBYKcjs.BibCreateManyInputSchema, _chunkEO4DPBYKcjs.BibCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibCreateManyArgsSchema_default = BibCreateManyArgsSchema;




exports.BibCreateManyArgsSchema = BibCreateManyArgsSchema; exports.BibCreateManyArgsSchema_default = BibCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-JCMZONNY.cjs.map