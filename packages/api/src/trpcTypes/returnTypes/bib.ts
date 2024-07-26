import type { Prisma } from "@ulld/types";
import type { getBibWithEntries } from "../../trpc/routers/bibliography/methods";

export type BibWithEntries = Prisma.PromiseReturnType<typeof getBibWithEntries>
