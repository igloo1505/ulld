import { plotlyPlotDataSchema } from "./plotData";

// NOTE: Use this as a union once other plot data types are handled.
    // | Partial<PlotData>
    // | Partial<BoxPlotData>
    // | Partial<ViolinData>
    // | Partial<OhlcData>
    // | Partial<CandlestickData>
    // | Partial<PieData>
    // | Partial<SankeyData>;

export const plotlyDataSchema = plotlyPlotDataSchema
