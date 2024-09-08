export class PluginParser {
    parserType;
    data;
    paths;
    parserConfig;
    importName;
    constructor(parserType, data, paths) {
        this.parserType = parserType;
        this.data = data;
        this.paths = paths;
        this.parserConfig = data.parsers[parserType];
        this.importName = `${parserType}Parser`;
    }
    applyIndex(idx) {
        this.importName = `${this.importName}_${idx}`;
    }
    getImportString() {
        return `import ${this.importName} from "${this.data.pluginName}/${this.parserConfig?.export}";`;
    }
}
