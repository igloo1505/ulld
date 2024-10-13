"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AA252C7cjs = require('./chunk-5AA252C7.cjs');

// src/database/outputTypeSchemas/BibEntryCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BibEntryCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5AA252C7cjs.BibEntryCreateManyInputSchema, _chunk5AA252C7cjs.BibEntryCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyAndReturnArgsSchema_default = BibEntryCreateManyAndReturnArgsSchema;




exports.BibEntryCreateManyAndReturnArgsSchema = BibEntryCreateManyAndReturnArgsSchema; exports.BibEntryCreateManyAndReturnArgsSchema_default = BibEntryCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-MA4OJEIT.cjs.map