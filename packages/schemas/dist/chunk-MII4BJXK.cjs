"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAEVB5URNcjs = require('./chunk-AEVB5URN.cjs');


var _chunkPEDSKPWEcjs = require('./chunk-PEDSKPWE.cjs');


var _chunkVDUZ3NHLcjs = require('./chunk-VDUZ3NHL.cjs');

// src/database/outputTypeSchemas/QuoteUpdateManyArgsSchema.ts
var _zod = require('zod');
var QuoteUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPEDSKPWEcjs.QuoteUpdateManyMutationInputSchema, _chunkAEVB5URNcjs.QuoteUncheckedUpdateManyInputSchema]),
  where: _chunkVDUZ3NHLcjs.QuoteWhereInputSchema.optional()
}).strict();
var QuoteUpdateManyArgsSchema_default = QuoteUpdateManyArgsSchema;




exports.QuoteUpdateManyArgsSchema = QuoteUpdateManyArgsSchema; exports.QuoteUpdateManyArgsSchema_default = QuoteUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-MII4BJXK.cjs.map