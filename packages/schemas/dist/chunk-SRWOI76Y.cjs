"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkMBVDRCYTcjs = require('./chunk-MBVDRCYT.cjs');


var _chunk4AO4LYBGcjs = require('./chunk-4AO4LYBG.cjs');


var _chunkJPIXPBEIcjs = require('./chunk-JPIXPBEI.cjs');

// src/database/inputTypeSchemas/IpynbCreateInputSchema.ts
var _zod = require('zod');
var IpynbCreateInputSchema = _zod.z.object({
  rootRelativePath: _zod.z.string(),
  isProtected: _zod.z.boolean().optional().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkMBVDRCYTcjs.IpynbCreatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkJPIXPBEIcjs.IpynbCreateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  href: _zod.z.string(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunk4AO4LYBGcjs.IpynbCreateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  raw: _zod.z.instanceof(Buffer),
  sequentialIndex: _zod.z.number().int().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SequentialNoteListCreateNestedOneWithoutIpynbInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ReadingListCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
var IpynbCreateInputSchema_default = IpynbCreateInputSchema;




exports.IpynbCreateInputSchema = IpynbCreateInputSchema; exports.IpynbCreateInputSchema_default = IpynbCreateInputSchema_default;
//# sourceMappingURL=chunk-SRWOI76Y.cjs.map