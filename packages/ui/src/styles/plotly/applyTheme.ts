import { deepMerge } from "#/utils/plotting/arrayUtils";
import { plotly_dark } from './plotly_dark'
import { plotly } from './plotly'
import { PlotDataType } from "#/types/plotly/plotlyTypes";


export const applyPlotlyTheme = (layout: Partial<Plotly.Layout>, plots: Partial<PlotDataType[]>, darkMode: boolean) => {
    const theme = darkMode ? plotly_dark : plotly
    const newLayout = deepMerge(theme.layout, layout)
    /// @ts-ignore
    const newData = plots.map((p) => deepMerge(theme.data, p))
    return {
        layout: newLayout,
        plots: newData
    }
}
