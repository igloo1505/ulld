"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/TopicScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var TopicScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var TopicScalarWhereWithAggregatesInputSchema_default = TopicScalarWhereWithAggregatesInputSchema;




exports.TopicScalarWhereWithAggregatesInputSchema = TopicScalarWhereWithAggregatesInputSchema; exports.TopicScalarWhereWithAggregatesInputSchema_default = TopicScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-Z3QVNVQ5.cjs.map