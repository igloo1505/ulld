import type { DevelopmentOutputConstructorProps, GenFileContentItem, OutputToFileOpts, SeparatedInputTypes } from "./types";
import { DevelopmentTypescriptOutputs } from "./typescriptOutputs";
export declare class DevelopmentOutput extends DevelopmentTypescriptOutputs {
    constructor(props?: DevelopmentOutputConstructorProps);
    clear(): void;
    getSeperatedInputs(items: GenFileContentItem[]): SeparatedInputTypes<GenFileContentItem>;
    genFileContent(items: GenFileContentItem[], outputToFile?: OutputToFileOpts): string;
}
//# sourceMappingURL=main.d.ts.map