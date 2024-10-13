"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEVO4UFVScjs = require('./chunk-EVO4UFVS.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/BibEntryArgsSchema.ts
var _zod = require('zod');
var BibEntryArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkEVO4UFVScjs.BibEntrySelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryIncludeSchema).optional()
}).strict();
var BibEntryArgsSchema_default = BibEntryArgsSchema;




exports.BibEntryArgsSchema = BibEntryArgsSchema; exports.BibEntryArgsSchema_default = BibEntryArgsSchema_default;
//# sourceMappingURL=chunk-AT2UJ4TQ.cjs.map