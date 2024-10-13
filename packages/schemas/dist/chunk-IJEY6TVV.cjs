"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAS7EH6S2cjs = require('./chunk-AS7EH6S2.cjs');


var _chunkPN52GJUFcjs = require('./chunk-PN52GJUF.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/AutoSettingWhereUniqueInputSchema.ts
var _zod = require('zod');
var AutoSettingWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema), _zod.z.lazy(() => _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema), _zod.z.lazy(() => _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema).array()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkPN52GJUFcjs.EnumautoSettingFilterSchema), _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional()
}).strict());
var AutoSettingWhereUniqueInputSchema_default = AutoSettingWhereUniqueInputSchema;




exports.AutoSettingWhereUniqueInputSchema = AutoSettingWhereUniqueInputSchema; exports.AutoSettingWhereUniqueInputSchema_default = AutoSettingWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-IJEY6TVV.cjs.map