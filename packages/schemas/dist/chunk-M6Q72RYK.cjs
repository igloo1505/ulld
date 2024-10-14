"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkZ7PRTGGPcjs = require('./chunk-Z7PRTGGP.cjs');


var _chunkRABUJBOBcjs = require('./chunk-RABUJBOB.cjs');


var _chunkY3GZBA7Dcjs = require('./chunk-Y3GZBA7D.cjs');

// src/database/inputTypeSchemas/IpynbUncheckedCreateInputSchema.ts
var _zod = require('zod');
var IpynbUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  rootRelativePath: _zod.z.string(),
  isProtected: _zod.z.boolean().optional().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().optional().nullable(),
  citationsListOrder: _zod.z.union([_zod.z.lazy(() => _chunkZ7PRTGGPcjs.IpynbCreatecitationsListOrderInputSchema), _zod.z.string().array()]).optional(),
  importantValues: _zod.z.union([_zod.z.lazy(() => _chunkY3GZBA7Dcjs.IpynbCreateimportantValuesInputSchema), _zod.z.number().array()]).optional(),
  href: _zod.z.string(),
  outgoingQuickLinks: _zod.z.union([_zod.z.lazy(() => _chunkRABUJBOBcjs.IpynbCreateoutgoingQuickLinksInputSchema), _zod.z.string().array()]).optional(),
  raw: _zod.z.instanceof(Buffer),
  sequentialKey: _zod.z.string().optional().nullable(),
  sequentialIndex: _zod.z.number().int().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ReadingListUncheckedCreateNestedManyWithoutIpynbNotesInputSchema).optional()
}).strict();
var IpynbUncheckedCreateInputSchema_default = IpynbUncheckedCreateInputSchema;




exports.IpynbUncheckedCreateInputSchema = IpynbUncheckedCreateInputSchema; exports.IpynbUncheckedCreateInputSchema_default = IpynbUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-M6Q72RYK.cjs.map