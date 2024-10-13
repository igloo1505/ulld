"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBXDUF2KZcjs = require('./chunk-BXDUF2KZ.cjs');

// src/database/inputTypeSchemas/ReadingListSelectSchema.ts
var _zod = require('zod');
var ReadingListSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBXDUF2KZcjs.ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListSelectSchema_default = ReadingListSelectSchema;




exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListSelectSchema_default = ReadingListSelectSchema_default;
//# sourceMappingURL=chunk-DATXXKYW.cjs.map