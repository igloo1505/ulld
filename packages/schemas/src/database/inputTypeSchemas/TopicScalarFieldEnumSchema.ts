import { z } from 'zod';

export const TopicScalarFieldEnumSchema = z.enum(['value','kanbanId','createdAt','lastAccess']);

export default TopicScalarFieldEnumSchema;
