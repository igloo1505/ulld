import { z } from 'zod';

export const MdxNoteOrderByRelevanceFieldEnumSchema = z.enum(['dietSummaryKey','title','latexTitle','rootRelativePath','noteType','content','formatted','summary','citationsListOrder','imageSrc','href','sequentialKey','remoteUrl','outgoingQuickLinks','quickLink']);

export default MdxNoteOrderByRelevanceFieldEnumSchema;
