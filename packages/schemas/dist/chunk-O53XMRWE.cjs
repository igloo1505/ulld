"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkFYSONMJHcjs = require('./chunk-FYSONMJH.cjs');


var _chunk6O57SVSScjs = require('./chunk-6O57SVSS.cjs');

// src/database/outputTypeSchemas/CitationsGroupFindUniqueArgsSchema.ts
var _zod = require('zod');
var CitationsGroupSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkFYSONMJHcjs.CitationsGroupCountOutputTypeArgsSchema)]).optional()
}).strict();
var CitationsGroupFindUniqueArgsSchema = _zod.z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema.optional(),
  where: _chunk6O57SVSScjs.CitationsGroupWhereUniqueInputSchema
}).strict();
var CitationsGroupFindUniqueArgsSchema_default = CitationsGroupFindUniqueArgsSchema;





exports.CitationsGroupSelectSchema = CitationsGroupSelectSchema; exports.CitationsGroupFindUniqueArgsSchema = CitationsGroupFindUniqueArgsSchema; exports.CitationsGroupFindUniqueArgsSchema_default = CitationsGroupFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-O53XMRWE.cjs.map