"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var BibScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  filename: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var BibScalarWhereWithAggregatesInputSchema_default = BibScalarWhereWithAggregatesInputSchema;




exports.BibScalarWhereWithAggregatesInputSchema = BibScalarWhereWithAggregatesInputSchema; exports.BibScalarWhereWithAggregatesInputSchema_default = BibScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-TFOEJAS6.cjs.map