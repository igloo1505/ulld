'use strict';

var chunkO4MUVT72_cjs = require('../../chunk-O4MUVT72.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var e=zod.z.object({page:zod.z.number().int().default(1),take:zod.z.number().int().default(20)}),a=zod.z.object({sortDir:zod.z.union([zod.z.literal("asc"),zod.z.literal("desc")]).default("desc")}),s=zod.z.object({tags:zod.z.union([zod.z.string(),zod.z.string().array()]).transform(chunkO4MUVT72_cjs.a.beArray).default([]),variables:zod.z.union([zod.z.string(),zod.z.string().array()]).transform(chunkO4MUVT72_cjs.a.beArray).default([]),query:zod.z.string().optional(),value:zod.z.string().optional(),orderBy:zod.z.union([zod.z.literal("title"),zod.z.literal("createdAt")]).default("title")}).merge(e).merge(a);

exports.equationSearchParamsSchema = s;
exports.paginationProps = e;
exports.sortDirProps = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=zod.cjs.map