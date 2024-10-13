"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH7ATQFXCcjs = require('./chunk-H7ATQFXC.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/RandomImageWhereUniqueInputSchema.ts
var _zod = require('zod');
var RandomImageWhereUniqueInputSchema = _zod.z.object({
  path: _zod.z.string()
}).and(_zod.z.object({
  path: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkH7ATQFXCcjs.RandomImageWhereInputSchema), _zod.z.lazy(() => _chunkH7ATQFXCcjs.RandomImageWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkH7ATQFXCcjs.RandomImageWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkH7ATQFXCcjs.RandomImageWhereInputSchema), _zod.z.lazy(() => _chunkH7ATQFXCcjs.RandomImageWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var RandomImageWhereUniqueInputSchema_default = RandomImageWhereUniqueInputSchema;




exports.RandomImageWhereUniqueInputSchema = RandomImageWhereUniqueInputSchema; exports.RandomImageWhereUniqueInputSchema_default = RandomImageWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-4VZCZVTK.cjs.map