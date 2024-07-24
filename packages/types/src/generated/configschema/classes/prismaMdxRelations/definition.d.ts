import { DefinitionProtocol } from "./protocols/definition";
import type { Definition as PrismaDefinition } from "@prisma/client";
import { MdxNote } from "./MdxNote";
import { DefinitionZodObjectOutput } from "./schemas/definitionSchema";
export declare class Definition extends DefinitionProtocol {
    mdxNote?: MdxNote;
    mdxNoteId?: number | null;
    id: string;
    label?: string | null;
    content?: string | null;
    constructor(data: DefinitionZodObjectOutput);
    toPlainObject(): {
        id: string;
        label: string | null | undefined;
        content: string | null | undefined;
        mdxNoteId: number | null | undefined;
    };
    whereInput(): {
        id: string;
    };
    whereUniqueInput(): {
        id: string;
    };
    createInput(): {
        label: string | null | undefined;
        content: string | null;
        id: string;
    };
    createArgs(): {
        data: {
            label: string | null | undefined;
            content: string | null;
            id: string;
        };
    };
    upsertArgs(): {
        where: {
            id: string;
        };
        create: {
            label: string | null | undefined;
            content: string | null;
            id: string;
        };
        update: {
            label: string | null | undefined;
            content: string | null;
            id: string;
        };
    };
    connectOrCreateArgs(): {
        where: {
            id: string;
        };
        create: {
            label: string | null | undefined;
            content: string | null;
            id: string;
        };
    };
    fromPrisma(item: PrismaDefinition): Definition;
    getAlphabeticalLabel(): Promise<string>;
}
//# sourceMappingURL=definition.d.ts.map