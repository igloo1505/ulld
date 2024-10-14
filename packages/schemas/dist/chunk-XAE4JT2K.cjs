"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUX5UF2XNcjs = require('./chunk-UX5UF2XN.cjs');

// src/database/outputTypeSchemas/BibEntryCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BibEntryCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkUX5UF2XNcjs.BibEntryCreateManyInputSchema, _chunkUX5UF2XNcjs.BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyAndReturnArgsSchema_default = BibEntryCreateManyAndReturnArgsSchema;




exports.BibEntryCreateManyAndReturnArgsSchema = BibEntryCreateManyAndReturnArgsSchema; exports.BibEntryCreateManyAndReturnArgsSchema_default = BibEntryCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-XAE4JT2K.cjs.map