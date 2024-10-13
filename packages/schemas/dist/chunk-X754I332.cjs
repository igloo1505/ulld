"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');

// src/database/inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanBanListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema;




exports.KanBanListScalarWhereWithAggregatesInputSchema = KanBanListScalarWhereWithAggregatesInputSchema; exports.KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-X754I332.cjs.map