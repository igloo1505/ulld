"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBZZ6MZQFcjs = require('./chunk-BZZ6MZQF.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/ServingScalarWhereInputSchema.ts
var _zod = require('zod');
var ServingScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereInputSchema), _zod.z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ServingScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereInputSchema), _zod.z.lazy(() => ServingScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkBZZ6MZQFcjs.EnumQUANTITY_GUESSNullableFilterSchema), _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereInputSchema_default = ServingScalarWhereInputSchema;




exports.ServingScalarWhereInputSchema = ServingScalarWhereInputSchema; exports.ServingScalarWhereInputSchema_default = ServingScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-3LLSBTYI.cjs.map