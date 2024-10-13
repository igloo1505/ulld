"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWKAU5QB7cjs = require('./chunk-WKAU5QB7.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DJTWhereUniqueInputSchema.ts
var _zod = require('zod');
var DJTWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkWKAU5QB7cjs.DJTWhereInputSchema), _zod.z.lazy(() => _chunkWKAU5QB7cjs.DJTWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkWKAU5QB7cjs.DJTWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkWKAU5QB7cjs.DJTWhereInputSchema), _zod.z.lazy(() => _chunkWKAU5QB7cjs.DJTWhereInputSchema).array()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict());
var DJTWhereUniqueInputSchema_default = DJTWhereUniqueInputSchema;




exports.DJTWhereUniqueInputSchema = DJTWhereUniqueInputSchema; exports.DJTWhereUniqueInputSchema_default = DJTWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-EGACULCY.cjs.map