import {
    MdxNote,
} from "@ulld/api/classes/prismaMdxRelations/mdxNote";
import type { InternalMdxStringParseParams } from "@ulld/schemas/mdx-parsing-params";

// RESUME: Come back and handle this.
export const formatMdxString = async (props: InternalMdxStringParseParams) => {
    let note = await MdxNote.fromMdxString(
        props.props,
        props._opts,
        props.parseParams
        // props.parseParams as (typeof props.parseParams & {appConfig: AppConfigSchemaOutput, parser: (appConfig: UnifiedMdxParserParams) => Promise<FrontMatterType & Record<string, any>>}),
    );
    return note.formatted || note.raw || ""
};
