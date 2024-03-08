import { dietRouter } from "./dietRouter";
import { healthReportRouter } from "./healthReportRouter";
import { router } from "../..";

export const healthRouter = router({
    diet: dietRouter,
    reports: healthReportRouter
})
