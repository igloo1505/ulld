"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBIXBIGAQcjs = require('./chunk-BIXBIGAQ.cjs');


var _chunkHJUH7Q7Xcjs = require('./chunk-HJUH7Q7X.cjs');


var _chunk4GJEJXOBcjs = require('./chunk-4GJEJXOB.cjs');


var _chunkOLN5KQBLcjs = require('./chunk-OLN5KQBL.cjs');

// src/database/outputTypeSchemas/NoteTypeGroupByArgsSchema.ts
var _zod = require('zod');
var NoteTypeGroupByArgsSchema = _zod.z.object({
  where: _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkHJUH7Q7Xcjs.NoteTypeOrderByWithAggregationInputSchema.array(), _chunkHJUH7Q7Xcjs.NoteTypeOrderByWithAggregationInputSchema]).optional(),
  by: _chunk4GJEJXOBcjs.NoteTypeScalarFieldEnumSchema.array(),
  having: _chunkBIXBIGAQcjs.NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var NoteTypeGroupByArgsSchema_default = NoteTypeGroupByArgsSchema;




exports.NoteTypeGroupByArgsSchema = NoteTypeGroupByArgsSchema; exports.NoteTypeGroupByArgsSchema_default = NoteTypeGroupByArgsSchema_default;
//# sourceMappingURL=chunk-OFUJ3U4P.cjs.map