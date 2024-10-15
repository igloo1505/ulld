import { z } from 'zod';
import type { DietaryItemWithRelations } from './DietaryItemSchema.js';
import type { DietaryItemPartialWithRelations } from './DietaryItemSchema.js';
export declare const ServingSchema: z.ZodObject<{
    quant_guess: z.ZodNullable<z.ZodEnum<["nibble", "fewBites", "snack", "smallMeal", "fullMeal", "largeMeal", "multipleMeals", "allMeals", "completelyStuffed"]>>;
    id: z.ZodNumber;
    dietaryItemId: z.ZodNumber;
    quant_oz: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    quant_guess: "nibble" | "fewBites" | "snack" | "smallMeal" | "fullMeal" | "largeMeal" | "multipleMeals" | "allMeals" | "completelyStuffed" | null;
    dietaryItemId: number;
    quant_oz: number | null;
}, {
    id: number;
    quant_guess: "nibble" | "fewBites" | "snack" | "smallMeal" | "fullMeal" | "largeMeal" | "multipleMeals" | "allMeals" | "completelyStuffed" | null;
    dietaryItemId: number;
    quant_oz: number | null;
}>;
export type Serving = z.infer<typeof ServingSchema>;
export declare const ServingPartialSchema: z.ZodObject<{
    quant_guess: z.ZodOptional<z.ZodNullable<z.ZodEnum<["nibble", "fewBites", "snack", "smallMeal", "fullMeal", "largeMeal", "multipleMeals", "allMeals", "completelyStuffed"]>>>;
    id: z.ZodOptional<z.ZodNumber>;
    dietaryItemId: z.ZodOptional<z.ZodNumber>;
    quant_oz: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    quant_guess?: "nibble" | "fewBites" | "snack" | "smallMeal" | "fullMeal" | "largeMeal" | "multipleMeals" | "allMeals" | "completelyStuffed" | null | undefined;
    dietaryItemId?: number | undefined;
    quant_oz?: number | null | undefined;
}, {
    id?: number | undefined;
    quant_guess?: "nibble" | "fewBites" | "snack" | "smallMeal" | "fullMeal" | "largeMeal" | "multipleMeals" | "allMeals" | "completelyStuffed" | null | undefined;
    dietaryItemId?: number | undefined;
    quant_oz?: number | null | undefined;
}>;
export type ServingPartial = z.infer<typeof ServingPartialSchema>;
export type ServingRelations = {
    item: DietaryItemWithRelations;
};
export type ServingWithRelations = z.infer<typeof ServingSchema> & ServingRelations;
export declare const ServingWithRelationsSchema: z.ZodType<ServingWithRelations>;
export type ServingPartialRelations = {
    item?: DietaryItemPartialWithRelations;
};
export type ServingPartialWithRelations = z.infer<typeof ServingPartialSchema> & ServingPartialRelations;
export declare const ServingPartialWithRelationsSchema: z.ZodType<ServingPartialWithRelations>;
export type ServingWithPartialRelations = z.infer<typeof ServingSchema> & ServingPartialRelations;
export declare const ServingWithPartialRelationsSchema: z.ZodType<ServingWithPartialRelations>;
export default ServingSchema;
//# sourceMappingURL=ServingSchema.d.ts.map