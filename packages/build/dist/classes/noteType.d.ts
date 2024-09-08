import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { TargetPaths } from "./paths.js";
export declare class NoteType {
    data: AppConfigSchemaOutput["noteTypes"][number];
    paths: TargetPaths;
    noteTargetPaths: ReturnType<InstanceType<typeof TargetPaths>["getNoteTypePathsFromTargetUrl"]>;
    constructor(data: AppConfigSchemaOutput["noteTypes"][number], paths: TargetPaths);
    private writeNoteTypePage;
    private writeIndividualNotePage;
    writePage(): void;
}
