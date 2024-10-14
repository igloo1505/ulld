"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFX4FA72Acjs = require('./chunk-FX4FA72A.cjs');


var _chunkKBBNTZU5cjs = require('./chunk-KBBNTZU5.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/IpynbScalarWhereInputSchema.ts
var _zod = require('zod');
var IpynbScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereInputSchema), _zod.z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => IpynbScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereInputSchema), _zod.z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  rootRelativePath: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkFX4FA72Acjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkKBBNTZU5cjs.FloatNullableListFilterSchema).optional(),
  href: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  raw: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var IpynbScalarWhereInputSchema_default = IpynbScalarWhereInputSchema;




exports.IpynbScalarWhereInputSchema = IpynbScalarWhereInputSchema; exports.IpynbScalarWhereInputSchema_default = IpynbScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-UPB6NHPE.cjs.map