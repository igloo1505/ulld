"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUX5UF2XNcjs = require('./chunk-UX5UF2XN.cjs');

// src/database/outputTypeSchemas/BibEntryCreateManyArgsSchema.ts
var _zod = require('zod');
var BibEntryCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkUX5UF2XNcjs.BibEntryCreateManyInputSchema, _chunkUX5UF2XNcjs.BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyArgsSchema_default = BibEntryCreateManyArgsSchema;




exports.BibEntryCreateManyArgsSchema = BibEntryCreateManyArgsSchema; exports.BibEntryCreateManyArgsSchema_default = BibEntryCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-MAGPNMD7.cjs.map