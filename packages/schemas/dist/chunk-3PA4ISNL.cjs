"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVJ2RQ6OCcjs = require('./chunk-VJ2RQ6OC.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/BibEntryArgsSchema.ts
var _zod = require('zod');
var BibEntryArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkVJ2RQ6OCcjs.BibEntrySelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryIncludeSchema).optional()
}).strict();
var BibEntryArgsSchema_default = BibEntryArgsSchema;




exports.BibEntryArgsSchema = BibEntryArgsSchema; exports.BibEntryArgsSchema_default = BibEntryArgsSchema_default;
//# sourceMappingURL=chunk-3PA4ISNL.cjs.map