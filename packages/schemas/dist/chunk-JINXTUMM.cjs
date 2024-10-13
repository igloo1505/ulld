"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLR3K3DTcjs = require('./chunk-JLR3K3DT.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.ts
var _zod = require('zod');
var WaitlistRequestWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema), _zod.z.lazy(() => _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema), _zod.z.lazy(() => _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema).array()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number().int()]).optional()
}).strict());
var WaitlistRequestWhereUniqueInputSchema_default = WaitlistRequestWhereUniqueInputSchema;




exports.WaitlistRequestWhereUniqueInputSchema = WaitlistRequestWhereUniqueInputSchema; exports.WaitlistRequestWhereUniqueInputSchema_default = WaitlistRequestWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-JINXTUMM.cjs.map