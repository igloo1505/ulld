import {
    internalDocumentTypes,
    internalDocumentTypeConfigSchema,
} from "../zod/internalDocumentTypes";

export const getInternalDocumentTypes = () => {
    return internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes);
};
