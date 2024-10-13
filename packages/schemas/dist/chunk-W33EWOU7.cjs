"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA2J5Q2K6cjs = require('./chunk-A2J5Q2K6.cjs');


var _chunkUVLCTKCGcjs = require('./chunk-UVLCTKCG.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/IpynbScalarWhereInputSchema.ts
var _zod = require('zod');
var IpynbScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereInputSchema), _zod.z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => IpynbScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => IpynbScalarWhereInputSchema), _zod.z.lazy(() => IpynbScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  rootRelativePath: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkA2J5Q2K6cjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkUVLCTKCGcjs.FloatNullableListFilterSchema).optional(),
  href: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  raw: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var IpynbScalarWhereInputSchema_default = IpynbScalarWhereInputSchema;




exports.IpynbScalarWhereInputSchema = IpynbScalarWhereInputSchema; exports.IpynbScalarWhereInputSchema_default = IpynbScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-W33EWOU7.cjs.map