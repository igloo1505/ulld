"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJOH437Ucjs = require('./chunk-IJOH437U.cjs');


var _chunkKVAM6TUNcjs = require('./chunk-KVAM6TUN.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');

// src/database/outputTypeSchemas/CitationsGroupCreateArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupCreateArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  data: _zod.z.union([_chunkIJOH437Ucjs.CitationsGroupCreateInputSchema, _chunkKVAM6TUNcjs.CitationsGroupUncheckedCreateInputSchema])
}).strict();
var CitationsGroupCreateArgsSchema_default = CitationsGroupCreateArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupCreateArgsSchema = CitationsGroupCreateArgsSchema; exports.CitationsGroupCreateArgsSchema_default = CitationsGroupCreateArgsSchema_default;
//# sourceMappingURL=chunk-ZIOM6FOQ.cjs.map