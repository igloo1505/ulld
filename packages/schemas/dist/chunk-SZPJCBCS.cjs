"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkMBVDRCYTcjs = require('./chunk-MBVDRCYT.cjs');


var _chunk4AO4LYBGcjs = require('./chunk-4AO4LYBG.cjs');


var _chunkJPIXPBEIcjs = require('./chunk-JPIXPBEI.cjs');

// src/database/inputTypeSchemas/IpynbUncheckedCreateInputSchema.ts
var _zod = require('zod');
var IpynbUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  rootRelativePath: _zod.z.string(),
  isProtected: _zod.z.boolean().optional().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkMBVDRCYTcjs.IpynbCreatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkJPIXPBEIcjs.IpynbCreateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  href: _zod.z.string(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunk4AO4LYBGcjs.IpynbCreateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  raw: _zod.z.instanceof(Buffer),
  sequentialKey: _zod.z.string().optional().nullable(),
  sequentialIndex: _zod.z.number().int().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
var IpynbUncheckedCreateInputSchema_default = IpynbUncheckedCreateInputSchema;




exports.IpynbUncheckedCreateInputSchema = IpynbUncheckedCreateInputSchema; exports.IpynbUncheckedCreateInputSchema_default = IpynbUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-SZPJCBCS.cjs.map