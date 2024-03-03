
import { router } from "#/trpc/trpc";
import { dietRouter } from "./dietRouter";
import { healthReportRouter } from "./healthReportRouter";

export const healthRouter = router({
    diet: dietRouter,
    reports: healthReportRouter
})
