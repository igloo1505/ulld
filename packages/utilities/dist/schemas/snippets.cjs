'use strict';

var chunk3BRCCAVV_cjs = require('../chunk-3BRCCAVV.cjs');
require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var a=zod.z.object({id:zod.z.number().int(),content:zod.z.string(),description:zod.z.string(),keywords:zod.z.string().array().default([]),language:zod.z.enum(chunk3BRCCAVV_cjs.a)});

exports.snippetValidator = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=snippets.cjs.map