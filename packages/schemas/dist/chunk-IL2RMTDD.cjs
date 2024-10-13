"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');

// src/database/inputTypeSchemas/KanBanCardScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanBanCardScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereWithAggregatesInputSchema_default = KanBanCardScalarWhereWithAggregatesInputSchema;




exports.KanBanCardScalarWhereWithAggregatesInputSchema = KanBanCardScalarWhereWithAggregatesInputSchema; exports.KanBanCardScalarWhereWithAggregatesInputSchema_default = KanBanCardScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-IL2RMTDD.cjs.map