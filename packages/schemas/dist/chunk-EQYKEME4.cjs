"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS2SKAEFOcjs = require('./chunk-S2SKAEFO.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/QuoteWhereUniqueInputSchema.ts
var _zod = require('zod');
var QuoteWhereUniqueInputSchema = _zod.z.object({
  body: _zod.z.string()
}).and(_zod.z.object({
  body: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkS2SKAEFOcjs.QuoteWhereInputSchema), _zod.z.lazy(() => _chunkS2SKAEFOcjs.QuoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkS2SKAEFOcjs.QuoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkS2SKAEFOcjs.QuoteWhereInputSchema), _zod.z.lazy(() => _chunkS2SKAEFOcjs.QuoteWhereInputSchema).array()]).optional(),
  author: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var QuoteWhereUniqueInputSchema_default = QuoteWhereUniqueInputSchema;




exports.QuoteWhereUniqueInputSchema = QuoteWhereUniqueInputSchema; exports.QuoteWhereUniqueInputSchema_default = QuoteWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-EQYKEME4.cjs.map