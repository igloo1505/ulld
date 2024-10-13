"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFRK4R4PMcjs = require('./chunk-FRK4R4PM.cjs');

// src/database/outputTypeSchemas/QuoteCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var QuoteCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFRK4R4PMcjs.QuoteCreateManyInputSchema, _chunkFRK4R4PMcjs.QuoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QuoteCreateManyAndReturnArgsSchema_default = QuoteCreateManyAndReturnArgsSchema;




exports.QuoteCreateManyAndReturnArgsSchema = QuoteCreateManyAndReturnArgsSchema; exports.QuoteCreateManyAndReturnArgsSchema_default = QuoteCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-MY2NNUOO.cjs.map