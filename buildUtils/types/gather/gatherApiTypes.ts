import path from "path";
import { getTypesExportString } from "../../utils";
import { TypeExportUnifier } from "./typeExportUnifier";

const outputFile = path.join(__dirname, "../../../packages/api/src/types.ts");

let typeDirRoot = path.join(__dirname, "../../../packages/api/src/trpcTypes");

let typeIndividualDirRoot = path.join(
    __dirname,
    "../../../packages/api/src/individualTypesForDocumentation",
);

getTypesExportString(typeDirRoot, outputFile, "**", true);

let unifier = new TypeExportUnifier(
    outputFile,
    [typeDirRoot, typeIndividualDirRoot],
    "**/*.{ts,tsx}",
);


unifier.generate()
