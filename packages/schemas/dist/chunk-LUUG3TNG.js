// src/database/inputTypeSchemas/QUANTITY_GUESSSchema.ts
import { z } from "zod";
var QUANTITY_GUESSSchema = z.enum(["nibble", "fewBites", "snack", "smallMeal", "fullMeal", "largeMeal", "multipleMeals", "allMeals", "completelyStuffed"]);
var QUANTITY_GUESSSchema_default = QUANTITY_GUESSSchema;

export {
  QUANTITY_GUESSSchema,
  QUANTITY_GUESSSchema_default
};
//# sourceMappingURL=chunk-LUUG3TNG.js.map