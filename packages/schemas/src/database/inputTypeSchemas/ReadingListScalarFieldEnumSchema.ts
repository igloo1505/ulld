import { z } from 'zod';

export const ReadingListScalarFieldEnumSchema = z.enum(['name','description','createdAt','lastUpdate']);

export default ReadingListScalarFieldEnumSchema;
