import {
    DocumentTypeConfig,
    documentTypeConfigSchema,
} from "../zod/documentConfigSchema.js";
import { getInternalConfig } from "../zod/getInternalConfig.js";
import { AppConfigSchemaOutput } from "../zod/main.js";
import { DocTypes } from "./docTypes.js";
import { WithFs } from "../types.js";

export const getDocumentTypeConfig = (
    docType: string | DocumentTypeConfig,
    config?: AppConfigSchemaOutput,
): DocumentTypeConfig | undefined => {
    const _config: AppConfigSchemaOutput =
        (config as AppConfigSchemaOutput) ||
        (getInternalConfig<{}>() as AppConfigSchemaOutput);
    let dt = typeof docType === "string" ? docType : docType.docType;
    return _config.noteTypes?.find((f) => f.docType === dt);
};

// TODO: Move this to a glob pattern using the fs or path module when used on the backend to avoid multiple matches returning the first. Globs would allow much more fine tuning of paths.
export const getNoteTypeFromPath = (
    rootRelativePath?: string | null,
    config?: AppConfigSchemaOutput,
) => {
    if (!rootRelativePath) return "RemoteNote" as "RemoteNote";
    const _config = config || getInternalConfig();
    let nts = _config.noteTypes?.filter((n) =>
        Boolean(n.fs && rootRelativePath.includes(n.fs)),
    ) as WithFs[];
    let nt = nts
        .filter((f) => typeof f.fs !== "undefined")
        .sort((a: WithFs, b: WithFs) => b.fs?.length - a.fs?.length)?.[0];
    return nt ? documentTypeConfigSchema.parse(nt) : undefined;
};

export const getRootRelativePath = (
    slug: string,
    docType: DocTypes,
    config?: AppConfigSchemaOutput,
) => {
    const _config = config || getInternalConfig();
    return `${_config.noteTypes?.find((t) => t.docType === docType)?.fs}/${slug}`;
};
