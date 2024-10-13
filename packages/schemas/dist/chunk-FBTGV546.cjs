"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBQ7BTCOLcjs = require('./chunk-BQ7BTCOL.cjs');


var _chunkHWKC7KYUcjs = require('./chunk-HWKC7KYU.cjs');


var _chunkKPYBLHSBcjs = require('./chunk-KPYBLHSB.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DietScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkBQ7BTCOLcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  vegan: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  pescatarian: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  vegetarian: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkBQ7BTCOLcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkBQ7BTCOLcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkBQ7BTCOLcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  goals: _zod.z.lazy(() => _chunkKPYBLHSBcjs.EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DietScalarWhereWithAggregatesInputSchema_default = DietScalarWhereWithAggregatesInputSchema;




exports.DietScalarWhereWithAggregatesInputSchema = DietScalarWhereWithAggregatesInputSchema; exports.DietScalarWhereWithAggregatesInputSchema_default = DietScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-FBTGV546.cjs.map