"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var BusinessContactScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  companyName: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  contactName: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  contactPreference: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var BusinessContactScalarWhereWithAggregatesInputSchema_default = BusinessContactScalarWhereWithAggregatesInputSchema;




exports.BusinessContactScalarWhereWithAggregatesInputSchema = BusinessContactScalarWhereWithAggregatesInputSchema; exports.BusinessContactScalarWhereWithAggregatesInputSchema_default = BusinessContactScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-QA5C3LIP.cjs.map