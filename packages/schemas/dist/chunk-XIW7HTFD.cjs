"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var DailyFocusUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUncheckedUpdateInputSchema_default = DailyFocusUncheckedUpdateInputSchema;




exports.DailyFocusUncheckedUpdateInputSchema = DailyFocusUncheckedUpdateInputSchema; exports.DailyFocusUncheckedUpdateInputSchema_default = DailyFocusUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-XIW7HTFD.cjs.map