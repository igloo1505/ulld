import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { TargetPaths } from "./paths";

export class NoteType {
    constructor(public data: AppConfigSchemaOutput["noteTypes"][number]) { }
    writePage(paths: TargetPaths) { }
    // ULLD_BUILD_PROCESS: Come back and handle this.
    // getCss(): string { }
}
