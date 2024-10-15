import { z } from 'zod';
import type { DietWithRelations } from './DietSchema.js';
import type { DietPartialWithRelations } from './DietSchema.js';
import type { ServingWithRelations } from './ServingSchema.js';
import type { ServingPartialWithRelations } from './ServingSchema.js';
export declare const DietaryItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    barcode: z.ZodNullable<z.ZodString>;
    gi: z.ZodNullable<z.ZodNumber>;
    calsPerOz: z.ZodNullable<z.ZodNumber>;
    glutenFree: z.ZodBoolean;
    minimalFructose: z.ZodBoolean;
    natural: z.ZodBoolean;
    organic: z.ZodBoolean;
    impactScore: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    barcode: string | null;
    id: number;
    name: string;
    gi: number | null;
    calsPerOz: number | null;
    glutenFree: boolean;
    minimalFructose: boolean;
    natural: boolean;
    organic: boolean;
    impactScore: number;
}, {
    barcode: string | null;
    id: number;
    name: string;
    gi: number | null;
    calsPerOz: number | null;
    glutenFree: boolean;
    minimalFructose: boolean;
    natural: boolean;
    organic: boolean;
    impactScore: number;
}>;
export type DietaryItem = z.infer<typeof DietaryItemSchema>;
export declare const DietaryItemPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gi: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    calsPerOz: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    glutenFree: z.ZodOptional<z.ZodBoolean>;
    minimalFructose: z.ZodOptional<z.ZodBoolean>;
    natural: z.ZodOptional<z.ZodBoolean>;
    organic: z.ZodOptional<z.ZodBoolean>;
    impactScore: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    barcode?: string | null | undefined;
    id?: number | undefined;
    name?: string | undefined;
    gi?: number | null | undefined;
    calsPerOz?: number | null | undefined;
    glutenFree?: boolean | undefined;
    minimalFructose?: boolean | undefined;
    natural?: boolean | undefined;
    organic?: boolean | undefined;
    impactScore?: number | undefined;
}, {
    barcode?: string | null | undefined;
    id?: number | undefined;
    name?: string | undefined;
    gi?: number | null | undefined;
    calsPerOz?: number | null | undefined;
    glutenFree?: boolean | undefined;
    minimalFructose?: boolean | undefined;
    natural?: boolean | undefined;
    organic?: boolean | undefined;
    impactScore?: number | undefined;
}>;
export type DietaryItemPartial = z.infer<typeof DietaryItemPartialSchema>;
export type DietaryItemRelations = {
    Diet: DietWithRelations[];
    Serving: ServingWithRelations[];
};
export type DietaryItemWithRelations = z.infer<typeof DietaryItemSchema> & DietaryItemRelations;
export declare const DietaryItemWithRelationsSchema: z.ZodType<DietaryItemWithRelations>;
export type DietaryItemPartialRelations = {
    Diet?: DietPartialWithRelations[];
    Serving?: ServingPartialWithRelations[];
};
export type DietaryItemPartialWithRelations = z.infer<typeof DietaryItemPartialSchema> & DietaryItemPartialRelations;
export declare const DietaryItemPartialWithRelationsSchema: z.ZodType<DietaryItemPartialWithRelations>;
export type DietaryItemWithPartialRelations = z.infer<typeof DietaryItemSchema> & DietaryItemPartialRelations;
export declare const DietaryItemWithPartialRelationsSchema: z.ZodType<DietaryItemWithPartialRelations>;
export default DietaryItemSchema;
//# sourceMappingURL=DietaryItemSchema.d.ts.map