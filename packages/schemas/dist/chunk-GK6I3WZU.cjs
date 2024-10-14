"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/FeatureRequestScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var FeatureRequestScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var FeatureRequestScalarWhereWithAggregatesInputSchema_default = FeatureRequestScalarWhereWithAggregatesInputSchema;




exports.FeatureRequestScalarWhereWithAggregatesInputSchema = FeatureRequestScalarWhereWithAggregatesInputSchema; exports.FeatureRequestScalarWhereWithAggregatesInputSchema_default = FeatureRequestScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-GK6I3WZU.cjs.map