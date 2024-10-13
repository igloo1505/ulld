"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPN52GJUFcjs = require('./chunk-PN52GJUF.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/AutoSettingWhereInputSchema.ts
var _zod = require('zod');
var AutoSettingWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => AutoSettingWhereInputSchema), _zod.z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => AutoSettingWhereInputSchema), _zod.z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkPN52GJUFcjs.EnumautoSettingFilterSchema), _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional()
}).strict();
var AutoSettingWhereInputSchema_default = AutoSettingWhereInputSchema;




exports.AutoSettingWhereInputSchema = AutoSettingWhereInputSchema; exports.AutoSettingWhereInputSchema_default = AutoSettingWhereInputSchema_default;
//# sourceMappingURL=chunk-AS7EH6S2.cjs.map