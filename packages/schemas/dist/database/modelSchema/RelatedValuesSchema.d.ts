import { z } from 'zod';
import type { EquationWithRelations } from './EquationSchema.js';
import type { EquationPartialWithRelations } from './EquationSchema.js';
export declare const RelatedValuesSchema: z.ZodObject<{
    id: z.ZodNumber;
    input: z.ZodType<import(".prisma/client").Prisma.JsonValue, z.ZodTypeDef, import(".prisma/client").Prisma.JsonValue>;
    output: z.ZodNumber;
    equationId: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    input: import(".prisma/client").Prisma.JsonValue;
    output: number;
    equationId: number[];
}, {
    id: number;
    input: import(".prisma/client").Prisma.JsonValue;
    output: number;
    equationId: number[];
}>;
export type RelatedValues = z.infer<typeof RelatedValuesSchema>;
export declare const RelatedValuesPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    input: z.ZodOptional<z.ZodType<import(".prisma/client").Prisma.JsonValue, z.ZodTypeDef, import(".prisma/client").Prisma.JsonValue>>;
    output: z.ZodOptional<z.ZodNumber>;
    equationId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    input?: import(".prisma/client").Prisma.JsonValue | undefined;
    output?: number | undefined;
    equationId?: number[] | undefined;
}, {
    id?: number | undefined;
    input?: import(".prisma/client").Prisma.JsonValue | undefined;
    output?: number | undefined;
    equationId?: number[] | undefined;
}>;
export type RelatedValuesPartial = z.infer<typeof RelatedValuesPartialSchema>;
export type RelatedValuesRelations = {
    equations: EquationWithRelations[];
};
export type RelatedValuesWithRelations = z.infer<typeof RelatedValuesSchema> & RelatedValuesRelations;
export declare const RelatedValuesWithRelationsSchema: z.ZodType<RelatedValuesWithRelations>;
export type RelatedValuesPartialRelations = {
    equations?: EquationPartialWithRelations[];
};
export type RelatedValuesPartialWithRelations = z.infer<typeof RelatedValuesPartialSchema> & RelatedValuesPartialRelations;
export declare const RelatedValuesPartialWithRelationsSchema: z.ZodType<RelatedValuesPartialWithRelations>;
export type RelatedValuesWithPartialRelations = z.infer<typeof RelatedValuesSchema> & RelatedValuesPartialRelations;
export declare const RelatedValuesWithPartialRelationsSchema: z.ZodType<RelatedValuesWithPartialRelations>;
export default RelatedValuesSchema;
//# sourceMappingURL=RelatedValuesSchema.d.ts.map