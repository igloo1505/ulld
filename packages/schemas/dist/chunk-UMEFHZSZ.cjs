"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/ReadingListWhereUniqueInputSchema.ts
var _zod = require('zod');
var ReadingListWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.ReadingListWhereInputSchema).array()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  bibEntries: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbListRelationFilterSchema).optional()
}).strict());
var ReadingListWhereUniqueInputSchema_default = ReadingListWhereUniqueInputSchema;




exports.ReadingListWhereUniqueInputSchema = ReadingListWhereUniqueInputSchema; exports.ReadingListWhereUniqueInputSchema_default = ReadingListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-UMEFHZSZ.cjs.map