"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');

// src/database/inputTypeSchemas/CitationsGroupSelectSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupSelectSchema_default = CitationsGroupSelectSchema;




exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupSelectSchema_default = CitationsGroupSelectSchema_default;
//# sourceMappingURL=chunk-RSY4BTLO.cjs.map