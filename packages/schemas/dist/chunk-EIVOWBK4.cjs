"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkSIUQQM7Dcjs = require('./chunk-SIUQQM7D.cjs');

// src/database/inputTypeSchemas/CitationsGroupSelectSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSIUQQM7Dcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupSelectSchema_default = CitationsGroupSelectSchema;




exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupSelectSchema_default = CitationsGroupSelectSchema_default;
//# sourceMappingURL=chunk-EIVOWBK4.cjs.map