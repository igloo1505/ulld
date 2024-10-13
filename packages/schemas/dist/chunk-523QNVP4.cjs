"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHXBZ4SBLcjs = require('./chunk-HXBZ4SBL.cjs');


var _chunkW2Q6WIZGcjs = require('./chunk-W2Q6WIZG.cjs');


var _chunkS2SKAEFOcjs = require('./chunk-S2SKAEFO.cjs');

// src/database/outputTypeSchemas/QuoteUpdateManyArgsSchema.ts
var _zod = require('zod');
var QuoteUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkW2Q6WIZGcjs.QuoteUpdateManyMutationInputSchema, _chunkHXBZ4SBLcjs.QuoteUncheckedUpdateManyInputSchema]),
  where: _chunkS2SKAEFOcjs.QuoteWhereInputSchema.optional()
}).strict();
var QuoteUpdateManyArgsSchema_default = QuoteUpdateManyArgsSchema;




exports.QuoteUpdateManyArgsSchema = QuoteUpdateManyArgsSchema; exports.QuoteUpdateManyArgsSchema_default = QuoteUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-523QNVP4.cjs.map