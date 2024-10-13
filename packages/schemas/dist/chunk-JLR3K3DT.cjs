"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/WaitlistRequestWhereInputSchema.ts
var _zod = require('zod');
var WaitlistRequestWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WaitlistRequestWhereInputSchema), _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WaitlistRequestWhereInputSchema), _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional()
}).strict();
var WaitlistRequestWhereInputSchema_default = WaitlistRequestWhereInputSchema;




exports.WaitlistRequestWhereInputSchema = WaitlistRequestWhereInputSchema; exports.WaitlistRequestWhereInputSchema_default = WaitlistRequestWhereInputSchema_default;
//# sourceMappingURL=chunk-JLR3K3DT.cjs.map