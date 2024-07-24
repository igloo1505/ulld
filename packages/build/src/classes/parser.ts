import { DeveloperConfigOutput, ParserKey } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";

export class PluginParser<T extends ParserKey> {
    parserConfig: DeveloperConfigOutput["parsers"][T]
    importName: string
    constructor(public parserType: T, public data: DeveloperConfigOutput, public paths: TargetPaths){
        this.parserConfig = data.parsers[parserType]
        this.importName = `${parserType}Parser`
    }
    applyIndex(idx: number){
        this.importName = `${this.importName}_${idx}`
    }
    getImportString(){
        return `import ${this.importName} from "${this.data.pluginName}/${this.parserConfig?.export}";`
    }
}
