import { z } from 'zod';

export const KanBanListScalarFieldEnumSchema = z.enum(['id','indexWithinBoard','title','boardId']);

export default KanBanListScalarFieldEnumSchema;
