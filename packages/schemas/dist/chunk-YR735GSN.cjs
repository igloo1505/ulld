"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT2BI746Hcjs = require('./chunk-T2BI746H.cjs');


var _chunkNK5Y2KJAcjs = require('./chunk-NK5Y2KJA.cjs');




var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkSH7GPM33cjs = require('./chunk-SH7GPM33.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateArgsSchema.ts
var _zod = require('zod');
var DietaryItemSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  name: _zod.z.boolean().optional(),
  barcode: _zod.z.boolean().optional(),
  gi: _zod.z.boolean().optional(),
  calsPerOz: _zod.z.boolean().optional(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSH7GPM33cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemCreateArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.DietaryItemIncludeSchema.optional(),
  data: _zod.z.union([_chunkT2BI746Hcjs.DietaryItemCreateInputSchema, _chunkNK5Y2KJAcjs.DietaryItemUncheckedCreateInputSchema])
}).strict();
var DietaryItemCreateArgsSchema_default = DietaryItemCreateArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemCreateArgsSchema = DietaryItemCreateArgsSchema; exports.DietaryItemCreateArgsSchema_default = DietaryItemCreateArgsSchema_default;
//# sourceMappingURL=chunk-YR735GSN.cjs.map