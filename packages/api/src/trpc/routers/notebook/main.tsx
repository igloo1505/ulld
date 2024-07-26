import { publicProcedure, router } from "../../trpc";


export const notebookRouter = router({
    getRemoteIpynbFromPathname: publicProcedure.input(z.string()).query(async (opts) => {
        return await getRemoteIpynbFromPathname(opts.input)
    }),
    getFsIpynb: publicProcedure.input(z.object({ absolutePath: z.string() })).query(async (opts) => {
        return await fs.promises.readFile(opts.input.absolutePath, { encoding: "utf-8" })
    }),
    getPrismaIpynb: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.ipynb.findFirst({
            where: {
                rootRelativePath: opts.input
            },
            include: {
                tags: true,
                citations: true,
                topics: true,
                readingList: true
            }
        })
    }),
    getAllNotebookPaths: publicProcedure.query(async (opts) => {
        let d = await getRootRelativePathsOfFiletype(".ipynb")
        return d
    }),
    getDatabaseNotebook: publicProcedure.input(z.object({
        rootRelativePath: z.string()
    })).query(async ({ input }) => {
        return prisma.ipynb.findFirst({
            where: {
                rootRelativePath: input.rootRelativePath
            },
            include: {
                tags: true,
                subjects: true,
                topics: true
            }
        })
    })
})
