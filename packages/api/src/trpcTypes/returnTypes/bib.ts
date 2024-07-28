import type { Prisma } from "@ulld/database";
import type { getBibWithEntries } from "../../trpc/routers/bibliography/methods";

export type BibWithEntries = Prisma.PromiseReturnType<typeof getBibWithEntries>
