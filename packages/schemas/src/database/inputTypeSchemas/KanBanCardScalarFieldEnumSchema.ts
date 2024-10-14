import { z } from 'zod';

export const KanBanCardScalarFieldEnumSchema = z.enum(['id','listId','indexWithinList','label','details']);

export default KanBanCardScalarFieldEnumSchema;
