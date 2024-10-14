import { z } from 'zod';

export const DietScalarFieldEnumSchema = z.enum(['name','summary','activelyFollowing','gf','vegan','pescatarian','vegetarian','fasting','cardioTraining','weightTraining','carb','pro','fat','goals','created','lastUpdate']);

export default DietScalarFieldEnumSchema;
