"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4MGFOONOcjs = require('./chunk-4MGFOONO.cjs');

// src/database/outputTypeSchemas/QuoteCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var QuoteCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4MGFOONOcjs.QuoteCreateManyInputSchema, _chunk4MGFOONOcjs.QuoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QuoteCreateManyAndReturnArgsSchema_default = QuoteCreateManyAndReturnArgsSchema;




exports.QuoteCreateManyAndReturnArgsSchema = QuoteCreateManyAndReturnArgsSchema; exports.QuoteCreateManyAndReturnArgsSchema_default = QuoteCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-WKOUWE2W.cjs.map