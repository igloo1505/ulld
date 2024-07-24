import { IpynbPropsOutput, IpynbRemotePropsOutput } from "./schemas/ipynbPropsSchema";
import { Prisma } from "@ulld/database/internalDatabaseTypes";
export declare class IpynbNote {
    id?: number;
    filepath?: string | null;
    content: string;
    rootRelativePath: string;
    title?: string | null;
    latexTitle?: string;
    href: string;
    constructor(props: IpynbPropsOutput | IpynbRemotePropsOutput);
    connectOrCreateArgs(): Prisma.IpynbCreateOrConnectWithoutTagsInput;
}
//# sourceMappingURL=IpynbNote.d.ts.map