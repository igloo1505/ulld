"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk77PRTUN3cjs = require('./chunk-77PRTUN3.cjs');


var _chunkL7KVTBIScjs = require('./chunk-L7KVTBIS.cjs');


var _chunk7LT5VVHFcjs = require('./chunk-7LT5VVHF.cjs');

// src/database/outputTypeSchemas/DailyFocusUpdateManyArgsSchema.ts
var _zod = require('zod');
var DailyFocusUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk77PRTUN3cjs.DailyFocusUpdateManyMutationInputSchema, _chunkL7KVTBIScjs.DailyFocusUncheckedUpdateManyInputSchema]),
  where: _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema.optional()
}).strict();
var DailyFocusUpdateManyArgsSchema_default = DailyFocusUpdateManyArgsSchema;




exports.DailyFocusUpdateManyArgsSchema = DailyFocusUpdateManyArgsSchema; exports.DailyFocusUpdateManyArgsSchema_default = DailyFocusUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-45SIUCOP.cjs.map