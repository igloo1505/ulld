import { z } from 'zod';

export const DietaryItemScalarFieldEnumSchema = z.enum(['id','name','barcode','gi','calsPerOz','glutenFree','minimalFructose','natural','organic','impactScore']);

export default DietaryItemScalarFieldEnumSchema;
