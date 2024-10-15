import { z } from 'zod';
export const QUANTITY_GUESSSchema = z.enum(['nibble', 'fewBites', 'snack', 'smallMeal', 'fullMeal', 'largeMeal', 'multipleMeals', 'allMeals', 'completelyStuffed']);
export default QUANTITY_GUESSSchema;
