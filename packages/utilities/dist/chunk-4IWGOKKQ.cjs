'use strict';

var zod = require('zod');

var i=zod.z.object({glob:zod.z.string().default("**/*").transform(l=>l.startsWith("/")?l.slice(1):l),type:zod.z.union([zod.z.literal("dirs"),zod.z.literal("files"),zod.z.literal("dirsAndFiles")]).default("files"),ignore:zod.z.union([zod.z.string(),zod.z.string().array()]).nullish(),returnAs:zod.z.union([zod.z.literal("absolute"),zod.z.literal("rootRelative")]).default("absolute")});

exports.a = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-4IWGOKKQ.cjs.map