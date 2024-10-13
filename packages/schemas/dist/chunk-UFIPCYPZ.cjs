"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var DailyFocusUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DailyFocusUncheckedUpdateInputSchema_default = DailyFocusUncheckedUpdateInputSchema;




exports.DailyFocusUncheckedUpdateInputSchema = DailyFocusUncheckedUpdateInputSchema; exports.DailyFocusUncheckedUpdateInputSchema_default = DailyFocusUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-UFIPCYPZ.cjs.map