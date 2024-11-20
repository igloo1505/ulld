import { z } from 'zod';

export const DJTOrderByRelevanceFieldEnumSchema = z.enum(['pluginName','modelId','utilityStringField']);

export default DJTOrderByRelevanceFieldEnumSchema;
