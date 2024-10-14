"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF34NF5FQcjs = require('./chunk-F34NF5FQ.cjs');


var _chunkFSPKHZ3Xcjs = require('./chunk-FSPKHZ3X.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');

// src/database/inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ServingScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkF34NF5FQcjs.EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema)]).optional().nullable()
}).strict();
var ServingScalarWhereWithAggregatesInputSchema_default = ServingScalarWhereWithAggregatesInputSchema;




exports.ServingScalarWhereWithAggregatesInputSchema = ServingScalarWhereWithAggregatesInputSchema; exports.ServingScalarWhereWithAggregatesInputSchema_default = ServingScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-H2X7TT7S.cjs.map