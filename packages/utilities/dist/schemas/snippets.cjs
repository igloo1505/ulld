'use strict';

var chunk2YQ62VG7_cjs = require('../chunk-2YQ62VG7.cjs');
require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var p=zod.z.object({id:zod.z.number().int(),content:zod.z.string(),description:zod.z.string(),keywords:zod.z.string().array().default([]),language:zod.z.enum(chunk2YQ62VG7_cjs.a)});

exports.snippetValidator = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=snippets.cjs.map