import type {
    DevelopmentOutputConstructorProps,
    GenFileContentItem,
    OutputToFileOpts,
    SeparatedInputTypes,
} from "./types";
import { DevelopmentTypescriptOutputs } from "./typescriptOutputs";
import { functionPlacementMap } from "./staticData";

export class DevelopmentOutput extends DevelopmentTypescriptOutputs {

    constructor(props?: DevelopmentOutputConstructorProps) { 
        super(props)
    }

    clear(): void {
        this.initialContent = ""
    }

    getSeperatedInputs(items: GenFileContentItem[]): SeparatedInputTypes<GenFileContentItem>{
        const data: SeparatedInputTypes<GenFileContentItem> = {
            prefix: [],
            body: [],
            suffix: [],
            locationComments: []
        }
        for (const item of items) {
            if(functionPlacementMap.prefix.includes(item.fnc)){
                data.prefix.push(item)
            } else if(functionPlacementMap.suffix.includes(item.fnc)){
data.suffix.push(item)
            } else if (functionPlacementMap.locationComments.includes(item.fnc)) {
                data.locationComments.push(item)
            } else {
                data.body.push(item)
            }
        }
        return data
    }

    genFileContent(
        items: GenFileContentItem[],
        outputToFile?: OutputToFileOpts,
    ): string {
        const inputs = this.getSeperatedInputs(items)
        for (const item of inputs.body) {
            /* @ts-expect-error -- Half assing the types here, as this is only used during development. */
            const res = this[item.fnc](item.props);
            this.initialContent += `\n\n${res}`;
        }
        for (const item of inputs.prefix) {
            /* @ts-expect-error -- Half assing the types here, as this is only used during development. */
            const res = this[item.fnc](item.props);
            this.initialContent = `${res}\n${this.initialContent}`;
        }
        for (const item of inputs.suffix) {
            /* @ts-expect-error -- Half assing the types here, as this is only used during development. */
            const res = this[item.fnc](item.props);
            this.initialContent += `\n\n${res}`;
        }
        for (const item of inputs.locationComments) {
            /* @ts-expect-error -- Half assing the types here, as this is only used during development. */
            const res = this[item.fnc](item.props);
            this.initialContent = `${res}\n\n${this.initialContent}`;
        }
        this.outputToFile(this.initialContent, outputToFile);
        return this.initialContent;
    }
}
