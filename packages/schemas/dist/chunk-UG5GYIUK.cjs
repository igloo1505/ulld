"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');

// src/database/inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanBanListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable()
}).strict();
var KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema;




exports.KanBanListScalarWhereWithAggregatesInputSchema = KanBanListScalarWhereWithAggregatesInputSchema; exports.KanBanListScalarWhereWithAggregatesInputSchema_default = KanBanListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-UG5GYIUK.cjs.map