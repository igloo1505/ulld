"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX46R3GXJcjs = require('./chunk-X46R3GXJ.cjs');


var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkUVLCTKCGcjs = require('./chunk-UVLCTKCG.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkTDJCCTB6cjs = require('./chunk-TDJCCTB6.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/IpynbScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var IpynbScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => IpynbScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  rootRelativePath: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkX46R3GXJcjs.BoolNullableWithAggregatesFilterSchema), _zod.z.boolean()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkUVLCTKCGcjs.FloatNullableListFilterSchema).optional(),
  href: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  raw: _zod.z.union([_zod.z.lazy(() => _chunkTDJCCTB6cjs.BytesWithAggregatesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var IpynbScalarWhereWithAggregatesInputSchema_default = IpynbScalarWhereWithAggregatesInputSchema;




exports.IpynbScalarWhereWithAggregatesInputSchema = IpynbScalarWhereWithAggregatesInputSchema; exports.IpynbScalarWhereWithAggregatesInputSchema_default = IpynbScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-J2S6ISBR.cjs.map