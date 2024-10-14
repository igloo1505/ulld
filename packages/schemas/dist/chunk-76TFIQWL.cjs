"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLGEPTHBHcjs = require('./chunk-LGEPTHBH.cjs');

// src/database/outputTypeSchemas/BibCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BibCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLGEPTHBHcjs.BibCreateManyInputSchema, _chunkLGEPTHBHcjs.BibCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibCreateManyAndReturnArgsSchema_default = BibCreateManyAndReturnArgsSchema;




exports.BibCreateManyAndReturnArgsSchema = BibCreateManyAndReturnArgsSchema; exports.BibCreateManyAndReturnArgsSchema_default = BibCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-76TFIQWL.cjs.map