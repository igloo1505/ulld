"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');


var _chunkBZZ6MZQFcjs = require('./chunk-BZZ6MZQF.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/ServingWhereUniqueInputSchema.ts
var _zod = require('zod');
var ServingWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingWhereInputSchema).array()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkBZZ6MZQFcjs.EnumQUANTITY_GUESSNullableFilterSchema), _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema)]).optional().nullable(),
  item: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemRelationFilterSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema)]).optional()
}).strict());
var ServingWhereUniqueInputSchema_default = ServingWhereUniqueInputSchema;




exports.ServingWhereUniqueInputSchema = ServingWhereUniqueInputSchema; exports.ServingWhereUniqueInputSchema_default = ServingWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-U7MTPHNY.cjs.map