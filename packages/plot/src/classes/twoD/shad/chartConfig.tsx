import { ValidIconName, DynamicIcon } from "@ulld/icons";
import { ChartConfig } from "../../../lib/shad/shadChart";
import { XYPlotProps } from "../../../types";

export class ShadChartConfigManager {
    data: ChartConfig = {}
    constructor(public props: XYPlotProps) {
        this.data = this.getChartConfig()
    }
    getChartConfig(): ChartConfig {
        let config: ChartConfig = {};
        this.props.data.forEach((item, i) => {
            config[`${item.id}`] = {
                label: item.label,
                icon:
                    typeof item.icon === "string"
                        ? (...props) => (
                            <DynamicIcon
                                {...(props as any)}
                                name={item.icon as ValidIconName}
                            />
                        )
                        : item.icon,
                color: item.color || this.getIndexedColor(i)
            };
        })
        return config;
    }
    getIndexedColor(idx: number){
        /* TODO: Return an acutal indexed color here. */
        return "hsl(var(--primary))"
    }
}
