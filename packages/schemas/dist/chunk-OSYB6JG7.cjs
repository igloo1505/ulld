"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/WaitlistRequestWhereInputSchema.ts
var _zod = require('zod');
var WaitlistRequestWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WaitlistRequestWhereInputSchema), _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WaitlistRequestWhereInputSchema), _zod.z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional()
}).strict();
var WaitlistRequestWhereInputSchema_default = WaitlistRequestWhereInputSchema;




exports.WaitlistRequestWhereInputSchema = WaitlistRequestWhereInputSchema; exports.WaitlistRequestWhereInputSchema_default = WaitlistRequestWhereInputSchema_default;
//# sourceMappingURL=chunk-OSYB6JG7.cjs.map