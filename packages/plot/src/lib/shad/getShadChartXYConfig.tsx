import { ChartConfig, XYPlotProps, XYPropsReturnType } from "../../types";
/* import { getTwoDData } from "../data/getTwoDData"; */
import { DynamicIcon, ValidIconName } from '@ulld/icons';

type ColorThemeProps = {} & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<"light" | "dark", string> }
  )


const getThemeData = (item: XYPlotProps["data"][number]): ColorThemeProps => {
    if (typeof item.color === "object") {
        return {
            theme: {
                light: item.color?.light || item.color?.dark || "hsl(var(--primary))",
                dark: item.color.dark || item.color.light || "hsl(var(--primary))",
            }
        } satisfies ColorThemeProps
    }
    return {
        color: item.color || "hsl(var(--primary))"
    } satisfies ColorThemeProps
}


export const getShadChartXYConfig = (props: XYPlotProps): XYPropsReturnType => {
    let config: ChartConfig = {}
    for (const item of props.data) {
        config[`${item.id}`] = {
            label: item.label,
            icon: typeof item.icon === "string" ? (...props) => <DynamicIcon
                {...props as any}
                name={item.icon as ValidIconName}
            /> : item.icon,
            ...getThemeData(item)
        }
    }
    return {
        config:config, 
        data: [] as any
        /* data: getTwoDData(props) */
    }
}
