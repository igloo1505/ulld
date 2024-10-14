"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJRD7R65Icjs = require('./chunk-JRD7R65I.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SortOrderInputSchema.ts
var _zod = require('zod');
var SortOrderInputSchema = _zod.z.object({
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  nulls: _zod.z.lazy(() => _chunkJRD7R65Icjs.NullsOrderSchema).optional()
}).strict();
var SortOrderInputSchema_default = SortOrderInputSchema;




exports.SortOrderInputSchema = SortOrderInputSchema; exports.SortOrderInputSchema_default = SortOrderInputSchema_default;
//# sourceMappingURL=chunk-MMXO446L.cjs.map