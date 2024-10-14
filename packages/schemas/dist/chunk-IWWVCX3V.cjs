"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOSYB6JG7cjs = require('./chunk-OSYB6JG7.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.ts
var _zod = require('zod');
var WaitlistRequestWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema), _zod.z.lazy(() => _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema), _zod.z.lazy(() => _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema).array()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number().int()]).optional()
}).strict());
var WaitlistRequestWhereUniqueInputSchema_default = WaitlistRequestWhereUniqueInputSchema;




exports.WaitlistRequestWhereUniqueInputSchema = WaitlistRequestWhereUniqueInputSchema; exports.WaitlistRequestWhereUniqueInputSchema_default = WaitlistRequestWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-IWWVCX3V.cjs.map