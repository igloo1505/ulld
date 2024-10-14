"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4MGFOONOcjs = require('./chunk-4MGFOONO.cjs');

// src/database/outputTypeSchemas/QuoteCreateManyArgsSchema.ts
var _zod = require('zod');
var QuoteCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4MGFOONOcjs.QuoteCreateManyInputSchema, _chunk4MGFOONOcjs.QuoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QuoteCreateManyArgsSchema_default = QuoteCreateManyArgsSchema;




exports.QuoteCreateManyArgsSchema = QuoteCreateManyArgsSchema; exports.QuoteCreateManyArgsSchema_default = QuoteCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZTKY57XN.cjs.map