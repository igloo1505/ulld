import { z } from 'zod';

export const QUANTITY_GUESSSchema = z.enum(['nibble','fewBites','snack','smallMeal','fullMeal','largeMeal','multipleMeals','allMeals','completelyStuffed']);

export type QUANTITY_GUESSType = `${z.infer<typeof QUANTITY_GUESSSchema>}`

export default QUANTITY_GUESSSchema;
