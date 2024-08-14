import { SupportedFileType, supportedFileTypes } from "@ulld/types/enums"
import { filePathGlobPropsSchema } from "../schemas/filePath"
import { z } from 'zod'
import { ArrayUtilities } from "./arrayUtilities"
import { AppConfigSchemaOutput } from "@ulld/types"
import "server-only"
import { getGlobServerSide } from "./glob/getGlobServerSide"

interface FsRootGlobProps {
    path: string
    isSinglePath?: boolean
    fileTypes?: SupportedFileType | SupportedFileType[]
}


type GlobInput = z.input<typeof filePathGlobPropsSchema>

export class FsRootGlob {
    constructor(public props: FsRootGlobProps){}

    formatFileTypeArrayGlobPattern(fts: (SupportedFileType)[] | typeof supportedFileTypes) {
        return `{${fts.join(",")}}`
    }

    getGlobPattern(defaultOpts?: Partial<GlobInput>): string {
        let fts = this.props.fileTypes ? ArrayUtilities.beArray(this.props.fileTypes) : supportedFileTypes
        return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(fts)}`
    }

    getFetchOpts(defaultOpts?: Partial<GlobInput>): GlobInput {
        return {
            type: "files",
            glob: this.getGlobPattern(),
            ...defaultOpts
        }
    }

    // TODO: Add method here to sort these results by the file types preffered order in the appConfig.
    sortResults(vals: string[]) {
        return vals
    }

    async getFileMatches(appConfig: AppConfigSchemaOutput, opts?: Partial<GlobInput>){
        let res = await getGlobServerSide(this.getFetchOpts(opts), appConfig)
        return res ? this.sortResults(res) : []
    }
}
