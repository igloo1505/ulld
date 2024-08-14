import { z } from 'zod';

export const ServingScalarFieldEnumSchema = z.enum(['id','dietaryItemId','quant_oz','quant_guess']);

export default ServingScalarFieldEnumSchema;
