"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkRV6ENYGOcjs = require('./chunk-RV6ENYGO.cjs');

// src/database/inputTypeSchemas/ReadingListSelectSchema.ts
var _zod = require('zod');
var ReadingListSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkRV6ENYGOcjs.ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListSelectSchema_default = ReadingListSelectSchema;




exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListSelectSchema_default = ReadingListSelectSchema_default;
//# sourceMappingURL=chunk-5YUMPL66.cjs.map