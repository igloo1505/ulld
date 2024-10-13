"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AA252C7cjs = require('./chunk-5AA252C7.cjs');

// src/database/outputTypeSchemas/BibEntryCreateManyArgsSchema.ts
var _zod = require('zod');
var BibEntryCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5AA252C7cjs.BibEntryCreateManyInputSchema, _chunk5AA252C7cjs.BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyArgsSchema_default = BibEntryCreateManyArgsSchema;




exports.BibEntryCreateManyArgsSchema = BibEntryCreateManyArgsSchema; exports.BibEntryCreateManyArgsSchema_default = BibEntryCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-7UIUMW3D.cjs.map