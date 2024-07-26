import { PlotMathHandler } from "@ulld/math/plotMathHandler";
import { ChartConfig } from "../../lib/shad/shadChart";
import { XYPlotProps } from "../../types";
import { PlotThemeHandler } from "./themeHandler";
import { ShadChartConfigManager } from "./shad/chartConfig";

export class XYDataHandler {
    config: ShadChartConfigManager
    constructor(public props: XYPlotProps){
        this.config = new ShadChartConfigManager(props)
        this.config = this.getChartConfig()
    }
}
