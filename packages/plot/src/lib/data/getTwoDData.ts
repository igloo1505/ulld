import { NumericDataItem, TwoDDataValueReturnType, TwoDDataValues, XYPlotDataItem, XYPlotProps } from "../../types";

const getXAxis = (item: XYPlotDataItem): number[] => {
       if(Array.isArray(item.x)){
        return item.x
         } else {
        return 
    }
}

const getItemNumericData = (item: XYPlotDataItem): NumericDataItem[] => {
      let x = 
}

export const getTwoDData = (config: XYPlotProps): TwoDDataValueReturnType => {
   let data: TwoDDataValueReturnType = []

    for (const item of config.data) {
        data.push({
            plotType: item.type,
            dataKey: `${item.id}`,
            data: getItemNumericData(item)
        })
    }

    // for (const item of config) {

    //     
    // }

    return data
}
