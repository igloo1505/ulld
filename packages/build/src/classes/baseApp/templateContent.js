import { makeValidId } from "@ulld/utilities/identity";
import { FileManager } from "../baseClasses/fileManager.js";
export class TemplateContent extends FileManager {
    constructor(subPath, paths) {
        super(subPath, paths);
        this.subPath = subPath;
        this.paths = paths;
        this.replaceMeRegex = /REPLACEME(\<[^\>]*>)?/gm;
    }
    getPropsName(componentName) {
        let validID = makeValidId(componentName);
        return `${validID[0].toUpperCase()}${validID.slice(1)}`;
    }
    appendExportedType(componentName, exportedType) {
        let re = /^interface\s+TemporaryComponentProps\s*\{/gm;
        let propsName = this.getPropsName(componentName);
        let lines = this.getLines().map((l) => {
            let t = l.trim();
            if (re.test(t)) {
                return `interface ${propsName} extends ${exportedType} {}`;
            }
            return l.replaceAll("TemporaryComponentProps", propsName);
        });
        this.content = lines.join("\n");
    }
    removeREPLACEMEImport() {
        let re = /^import\s+REPLACEME/;
        this.filterLines((l) => !re.test(l));
    }
    appendImport(importString) {
        let importLines = this.getImportLines();
        let _importString = importString.trim();
        if (importLines.some((s) => s.content === _importString)) {
            return;
        }
        let lastImportLine = importLines[importLines.length - 1];
        importLines.push({
            content: importString,
            index: lastImportLine.index,
            appendLine: true
        });
        this.replaceLinesByIndex(importLines);
    }
    replaceREPLACEME(componentName) {
        this.content = this.content?.replaceAll(this.replaceMeRegex, componentName);
    }
    generate(componentImport, formattedExport, itemData, exportedProps) {
        this.throwIfNotExists();
        console.log(`Did not throw...`);
        if (exportedProps) {
            this.appendExportedType(componentImport, exportedProps);
        }
        this.removeREPLACEMEImport();
        this.appendImport(`import ${componentImport} from "${formattedExport}"`);
        this.replaceREPLACEME(componentImport);
        this.writeContent();
    }
}
