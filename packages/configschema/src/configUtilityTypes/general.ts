import { ParsedAppConfig, WithFs } from "../types"
import { DocumentTypeConfig, documentTypeConfigSchema } from "../zod/documentConfigSchema"
import { getInternalConfig } from "../zod/getInternalConfig"
import { DocTypes } from "./docTypes"


export const getDocumentTypeConfig = (docType: DocTypes | DocumentTypeConfig, config?: ParsedAppConfig): DocumentTypeConfig | undefined => {
    const _config: ParsedAppConfig = config as ParsedAppConfig || getInternalConfig<{}>() as ParsedAppConfig
    let dt = typeof docType === "string" ? docType : docType.docType
    return _config.noteTypes?.find((f) => f.docType === dt)
}



// TODO: Move this to a glob pattern using the fs or path module when used on the backend to avoid multiple matches returning the first. Globs would allow much more fine tuning of paths.
export const getNoteTypeFromPath = (rootRelativePath?: string | null, config?: ParsedAppConfig) => {
    if(!rootRelativePath) return "RemoteNote" as "RemoteNote"
    const _config = config || getInternalConfig()
    let nts = _config.noteTypes?.filter((n) => Boolean(n.fs && rootRelativePath.includes(n.fs))) as WithFs[]
    let nt = nts.filter((f) => typeof f.fs !== "undefined").sort((a: WithFs, b: WithFs) => b.fs?.length - a.fs?.length)?.[0]
    return nt ? documentTypeConfigSchema.parse(nt) : undefined
}

export const getRootRelativePath = (slug: string, docType: DocTypes, config?: ParsedAppConfig) => {
    const _config = config || getInternalConfig()
    return `${_config.noteTypes?.find((t) => t.docType === docType)?.fs}/${slug}`
}

