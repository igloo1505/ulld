"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMBVDRCYTcjs = require('./chunk-MBVDRCYT.cjs');


var _chunk4AO4LYBGcjs = require('./chunk-4AO4LYBG.cjs');


var _chunkJPIXPBEIcjs = require('./chunk-JPIXPBEI.cjs');

// src/database/inputTypeSchemas/IpynbCreateManySequentialListInputSchema.ts
var _zod = require('zod');
var IpynbCreateManySequentialListInputSchema = _zod.z.object({
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
  sequentialIndex: _zod.z.number().int().optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var IpynbCreateManySequentialListInputSchema_default = IpynbCreateManySequentialListInputSchema;




exports.IpynbCreateManySequentialListInputSchema = IpynbCreateManySequentialListInputSchema; exports.IpynbCreateManySequentialListInputSchema_default = IpynbCreateManySequentialListInputSchema_default;
//# sourceMappingURL=chunk-WJPOEPE7.cjs.map