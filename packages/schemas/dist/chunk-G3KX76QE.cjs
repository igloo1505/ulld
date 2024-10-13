"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPJNE5XUOcjs = require('./chunk-PJNE5XUO.cjs');


var _chunkE7XD6YKXcjs = require('./chunk-E7XD6YKX.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/TimePeriodUpdateManyArgsSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkE7XD6YKXcjs.TimePeriodUpdateManyMutationInputSchema, _chunkPJNE5XUOcjs.TimePeriodUncheckedUpdateManyInputSchema]),
  where: _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema.optional()
}).strict();
var TimePeriodUpdateManyArgsSchema_default = TimePeriodUpdateManyArgsSchema;




exports.TimePeriodUpdateManyArgsSchema = TimePeriodUpdateManyArgsSchema; exports.TimePeriodUpdateManyArgsSchema_default = TimePeriodUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-G3KX76QE.cjs.map