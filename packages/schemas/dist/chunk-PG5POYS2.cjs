"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO6M6Q6H2cjs = require('./chunk-O6M6Q6H2.cjs');


var _chunk5ORXECZJcjs = require('./chunk-5ORXECZJ.cjs');


var _chunkIYNN3UKQcjs = require('./chunk-IYNN3UKQ.cjs');

// src/database/outputTypeSchemas/BusinessContactUpdateManyArgsSchema.ts
var _zod = require('zod');
var BusinessContactUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkO6M6Q6H2cjs.BusinessContactUpdateManyMutationInputSchema, _chunk5ORXECZJcjs.BusinessContactUncheckedUpdateManyInputSchema]),
  where: _chunkIYNN3UKQcjs.BusinessContactWhereInputSchema.optional()
}).strict();
var BusinessContactUpdateManyArgsSchema_default = BusinessContactUpdateManyArgsSchema;




exports.BusinessContactUpdateManyArgsSchema = BusinessContactUpdateManyArgsSchema; exports.BusinessContactUpdateManyArgsSchema_default = BusinessContactUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-PG5POYS2.cjs.map