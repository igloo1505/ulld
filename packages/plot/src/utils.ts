import { MathFunc, ExtendedMath } from "./types";

export const getMathFuncValue = (value: number | MathFunc, math: ExtendedMath) => typeof value === "function" ? value(math) : value
