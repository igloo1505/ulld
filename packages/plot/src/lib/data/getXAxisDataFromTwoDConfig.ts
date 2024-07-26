import { TwoDDataValues, TwoDFunc } from "../../types";
import { ExtendedMath } from "@ulld/math/extendedMath";
import { PlotMathHandler } from "@ulld/math/plotMathHandler";
import {NumericList} from "@ulld/math/list"
import { TwoDFuncConfigOutput } from "../../components/shad/xyPlot/schemas/2DFuncConfig";

type Props = {
    f: TwoDFunc;
    funcConfig?: TwoDFuncConfigOutput;
};

export const getXAxisFromTwoDConfig = (config: Props): number[] => { 
    let c = new PlotMathHandler()
    let x = new ExtendedMath()
    return NumericList.fromLinSpace(config.range[0], config.range[1], config.dataPoints || 100)
};
