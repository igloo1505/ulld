import { z } from 'zod';

export const IpynbScalarFieldEnumSchema = z.enum(['id','rootRelativePath','isProtected','title','latexTitle','citationsListOrder','importantValues','href','outgoingQuickLinks','raw','sequentialKey','sequentialIndex','bookmarked','firstSync','lastSync','lastAccess']);

export default IpynbScalarFieldEnumSchema;
