"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkULDV4FGRcjs = require('./chunk-ULDV4FGR.cjs');


var _chunkHWKC7KYUcjs = require('./chunk-HWKC7KYU.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');

// src/database/inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ServingScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkULDV4FGRcjs.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema), _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereWithAggregatesInputSchema_default = ServingScalarWhereWithAggregatesInputSchema;




exports.ServingScalarWhereWithAggregatesInputSchema = ServingScalarWhereWithAggregatesInputSchema; exports.ServingScalarWhereWithAggregatesInputSchema_default = ServingScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VBGOC6QG.cjs.map