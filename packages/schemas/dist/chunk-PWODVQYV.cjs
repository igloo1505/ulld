"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQMTU7IZCcjs = require('./chunk-QMTU7IZC.cjs');


var _chunkZR7LYAPFcjs = require('./chunk-ZR7LYAPF.cjs');


var _chunk4FYHHISDcjs = require('./chunk-4FYHHISD.cjs');

// src/database/outputTypeSchemas/BusinessContactAggregateArgsSchema.ts
var _zod = require('zod');
var BusinessContactAggregateArgsSchema = _zod.z.object({
  where: _chunk4FYHHISDcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQMTU7IZCcjs.BusinessContactOrderByWithRelationInputSchema.array(), _chunkQMTU7IZCcjs.BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkZR7LYAPFcjs.BusinessContactWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BusinessContactAggregateArgsSchema_default = BusinessContactAggregateArgsSchema;




exports.BusinessContactAggregateArgsSchema = BusinessContactAggregateArgsSchema; exports.BusinessContactAggregateArgsSchema_default = BusinessContactAggregateArgsSchema_default;
//# sourceMappingURL=chunk-PWODVQYV.cjs.map