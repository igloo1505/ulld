"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWM65OPNIcjs = require('./chunk-WM65OPNI.cjs');

// src/database/inputTypeSchemas/BytesFilterSchema.ts
var _zod = require('zod');
var BytesFilterSchema = _zod.z.object({
  equals: _zod.z.instanceof(Buffer).optional(),
  in: _zod.z.instanceof(Buffer).array().optional(),
  notIn: _zod.z.instanceof(Buffer).array().optional(),
  not: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkWM65OPNIcjs.NestedBytesFilterSchema)]).optional()
}).strict();
var BytesFilterSchema_default = BytesFilterSchema;




exports.BytesFilterSchema = BytesFilterSchema; exports.BytesFilterSchema_default = BytesFilterSchema_default;
//# sourceMappingURL=chunk-QR4642W7.cjs.map