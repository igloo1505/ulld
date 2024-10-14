"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/ReadingListWhereUniqueInputSchema.ts
var _zod = require('zod');
var ReadingListWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.ReadingListWhereInputSchema).array()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  bibEntries: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.IpynbListRelationFilterSchema).optional()
}).strict());
var ReadingListWhereUniqueInputSchema_default = ReadingListWhereUniqueInputSchema;




exports.ReadingListWhereUniqueInputSchema = ReadingListWhereUniqueInputSchema; exports.ReadingListWhereUniqueInputSchema_default = ReadingListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-L6PAM4FL.cjs.map