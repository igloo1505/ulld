"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DJTWhereInputSchema.ts
var _zod = require('zod');
var DJTWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DJTWhereInputSchema), _zod.z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DJTWhereInputSchema), _zod.z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var DJTWhereInputSchema_default = DJTWhereInputSchema;




exports.DJTWhereInputSchema = DJTWhereInputSchema; exports.DJTWhereInputSchema_default = DJTWhereInputSchema_default;
//# sourceMappingURL=chunk-WKAU5QB7.cjs.map