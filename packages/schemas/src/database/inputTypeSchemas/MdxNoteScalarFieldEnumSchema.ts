import { z } from 'zod';

export const MdxNoteScalarFieldEnumSchema = z.enum(['id','isProtected','dietSummaryKey','title','latexTitle','rootRelativePath','noteType','content','formatted','summary','citationsListOrder','importantValues','imageSrc','href','sequentialKey','sequentialIndex','floatImages','remoteUrl','trackRemote','outgoingQuickLinks','quickLink','bookmarked','firstSync','lastSync','lastAccess']);

export default MdxNoteScalarFieldEnumSchema;
