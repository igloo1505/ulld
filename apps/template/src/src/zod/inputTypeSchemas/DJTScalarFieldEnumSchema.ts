import { z } from 'zod';

export const DJTScalarFieldEnumSchema = z.enum(['id','pluginName','modelId','utilityStringField','utilityNumberField','utilityDateField','utilityDateFieldTwo','data']);

export default DJTScalarFieldEnumSchema;
