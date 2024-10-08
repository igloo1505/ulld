import { MdxNoteParseParams } from "@ulld/api/classes/prismaMdxRelations/mdxNote";
import type { SpecificNoteQueryManager } from "@ulld/api/classes/specificNoteQuery/specificNoteQueryManager";
import { AdditionalComponents } from "@ulld/component-map/types";

export type NotePageProps = Awaited<
    ReturnType<typeof SpecificNoteQueryManager.formatNoteProps>
> & {
    parsers: {
        mdx: MdxNoteParseParams;
    };
    embeddableComponents: AdditionalComponents;
    rootRelativePath: string;
    rootRelativeWithExtension?: string;
    absolutePath?: string;
};
