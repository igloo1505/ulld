"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIDD2ZS66cjs = require('./chunk-IDD2ZS66.cjs');


var _chunkCEUENONOcjs = require('./chunk-CEUENONO.cjs');


var _chunk4HJTH7WMcjs = require('./chunk-4HJTH7WM.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanbanGroupByArgsSchema.ts
var _zod = require('zod');
var KanbanGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkCEUENONOcjs.KanbanOrderByWithAggregationInputSchema.array(), _chunkCEUENONOcjs.KanbanOrderByWithAggregationInputSchema]).optional(),
  by: _chunk4HJTH7WMcjs.KanbanScalarFieldEnumSchema.array(),
  having: _chunkIDD2ZS66cjs.KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanbanGroupByArgsSchema_default = KanbanGroupByArgsSchema;




exports.KanbanGroupByArgsSchema = KanbanGroupByArgsSchema; exports.KanbanGroupByArgsSchema_default = KanbanGroupByArgsSchema_default;
//# sourceMappingURL=chunk-BXINIM5A.cjs.map