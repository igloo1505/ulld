import { ParsableExtensions } from "../../generated/configschema/zod/secondaryConfigParse/getParsableExtensions";

export type NotePropertiesOutput = ({
    useFs: true
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension: string
    absolutePath: string
}) | ({
    useFs: false
    format: ParsableExtensions
    rootRelativePath: string
    rootRelativePathWithExtension?: string
    absolutePath?: string
})
