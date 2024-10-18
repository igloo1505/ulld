import { mdxNotePropsSchema } from "../../../api/prismaMdxRelations/mdxNote/classProps.js";

export const mdxNoteIntriguingValSummaryPropsSchema = mdxNotePropsSchema
  .omit({
    latexTitle: true,
    raw: true,
    floatImages: true,
    formatted: true,
    citations: true,
    quickLinkId: true,
    citationsListOrder: true,
    outgoingQuickLinks: true,
    equationIds: true,
    isProtected: true,
    sequentialKey: true,
    sequentialIndex: true,
    remoteUrl: true,
    noLog: true,
    saveFormatted: true,
    trackRemote: true,
    topics: true,
    tags: true,
    subjects: true,
  });
