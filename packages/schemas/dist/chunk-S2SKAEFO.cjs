"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/QuoteWhereInputSchema.ts
var _zod = require('zod');
var QuoteWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QuoteWhereInputSchema), _zod.z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QuoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QuoteWhereInputSchema), _zod.z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  body: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  author: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var QuoteWhereInputSchema_default = QuoteWhereInputSchema;




exports.QuoteWhereInputSchema = QuoteWhereInputSchema; exports.QuoteWhereInputSchema_default = QuoteWhereInputSchema_default;
//# sourceMappingURL=chunk-S2SKAEFO.cjs.map