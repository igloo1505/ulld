import { ValidIconName, DynamicIcon } from "@ulld/icons";
import { ChartConfig } from "../../../lib/shad/shadChart";
import { XYPlotProps } from "../../../types";

export class ShadChartConfigManager {
    constructor(public props: XYPlotProps) { }
    getChartConfig(): ChartConfig {
        let config: ChartConfig = {};
        for (const item of this.props.data) {
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
                ...getThemeData(item),
            };
        }
        return config;
    }
}
