"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2YVVIAZOcjs = require('./chunk-2YVVIAZO.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibEntryUpdateManyArgsSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema, _chunk2YVVIAZOcjs.BibEntryUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.BibEntryWhereInputSchema.optional()
}).strict();
var BibEntryUpdateManyArgsSchema_default = BibEntryUpdateManyArgsSchema;




exports.BibEntryUpdateManyArgsSchema = BibEntryUpdateManyArgsSchema; exports.BibEntryUpdateManyArgsSchema_default = BibEntryUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-EBKMS4XS.cjs.map