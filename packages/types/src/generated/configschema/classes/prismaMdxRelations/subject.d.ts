import { MdxNote as PrismaMdxNote, Prisma, Subject as PrismaSubject } from "@ulld/database/internalDatabaseTypes";
import { MdxNote } from "./MdxNote";
import { SubjectZodOutput } from "@ulld/configschema/configUtilityTypes/docTypes";
export declare class Subject {
    MdxNotes: MdxNote[];
    value: string;
    constructor(props: SubjectZodOutput);
    toPlainObject(): {
        value: string;
    };
    whereInput(): Prisma.SubjectWhereInput;
    whereUniqueInput(): Prisma.SubjectWhereUniqueInput;
    createInput(): Prisma.SubjectCreateInput;
    createArgs(): Prisma.SubjectCreateArgs;
    upsertArgs(): Prisma.SubjectUpsertArgs;
    connectOrCreateArgs(): Prisma.SubjectCreateOrConnectWithoutMdxNotesInput;
    static fromPrisma(item: PrismaSubject & {
        MdxNotes?: PrismaMdxNote[];
    }): Subject;
    static fromList(items: (Subject | PrismaSubject & {
        MdxNotes?: PrismaMdxNote[];
    })[] | undefined | null): Subject[];
}
//# sourceMappingURL=subject.d.ts.map