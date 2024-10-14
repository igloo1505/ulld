"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');

// src/database/inputTypeSchemas/KanBanCardScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanBanCardScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanBanCardScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var KanBanCardScalarWhereWithAggregatesInputSchema_default = KanBanCardScalarWhereWithAggregatesInputSchema;




exports.KanBanCardScalarWhereWithAggregatesInputSchema = KanBanCardScalarWhereWithAggregatesInputSchema; exports.KanBanCardScalarWhereWithAggregatesInputSchema_default = KanBanCardScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-3YN3FDZP.cjs.map