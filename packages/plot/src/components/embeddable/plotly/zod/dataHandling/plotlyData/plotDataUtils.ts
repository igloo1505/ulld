import { z } from "zod";

export const plotlyDataModeSchema = z.union([
    z.literal("lines"),
    z.literal("markers"),
    z.literal("text"),
    z.literal("lines+markers"),
    z.literal("text+markers"),
    z.literal("text+lines"),
    z.literal("text+lines+markers"),
    z.literal("none"),
    z.literal("gauge"),
    z.literal("number"),
    z.literal("delta"),
    z.literal("number+delta"),
    z.literal("gauge+number"),
    z.literal("gauge+number+delta"),
    z.literal("gauge+delta"),
]);

export const plotlyDataHistFuncSchema = z.union([
    z.literal("count"),
    z.literal("sum"),
    z.literal("avg"),
    z.literal("min"),
    z.literal("max"),
]);

export const plotlyDataHistNormSchema = z.union([
    z.literal(""),
    z.literal("percent"),
    z.literal("probability"),
    z.literal("density"),
    z.literal("probability density"),
]);

export const plotlyDataHoverOnSchema = z.union([
    z.literal("points"),
    z.literal("fills"),
]);

export const plotlyDataHoverInfoSchema = z.union([
    z.literal("all"),
    z.literal("name"),
    z.literal("none"),
    z.literal("skip"),
    z.literal("text"),
    z.literal("x"),
    z.literal("x+text"),
    z.literal("x+name"),
    z.literal("x+y"),
    z.literal("x+y+text"),
    z.literal("x+y+name"),
    z.literal("x+y+z"),
    z.literal("x+y+z+text"),
    z.literal("x+y+z+name"),
    z.literal("y"),
    z.literal("y+name"),
    z.literal("y+x"),
    z.literal("y+text"),
    z.literal("y+x+text"),
    z.literal("y+x+name"),
    z.literal("y+z"),
    z.literal("y+z+text"),
    z.literal("y+z+name"),
    z.literal("y+x+z"),
    z.literal("y+x+z+text"),
    z.literal("y+x+z+name"),
    z.literal("z"),
    z.literal("z+x"),
    z.literal("z+x+text"),
    z.literal("z+x+name"),
    z.literal("z+y+x"),
    z.literal("z+y+x+text"),
    z.literal("z+y+x+name"),
    z.literal("z+x+y"),
    z.literal("z+x+y+text"),
    z.literal("z+x+y+name"),
]);

export const plotlyDataTextInfo = z.union([
    z.literal("label"),
    z.literal("label+text"),
    z.literal("label+value"),
    z.literal("label+percent"),
    z.literal("label+text+value"),
    z.literal("label+text+percent"),
    z.literal("label+value+percent"),
    z.literal("text"),
    z.literal("text+value"),
    z.literal("text+percent"),
    z.literal("text+value+percent"),
    z.literal("value"),
    z.literal("value+percent"),
    z.literal("percent"),
    z.literal("none"),
]);

export const plotlyDataTextPosition = z.union([
    z.literal("top left"),
    z.literal("top center"),
    z.literal("top right"),
    z.literal("middle left"),
    z.literal("middle center"),
    z.literal("middle right"),
    z.literal("bottom left"),
    z.literal("bottom center"),
    z.literal("bottom right"),
    z.literal("inside"),
    z.literal("outside"),
    z.literal("auto"),
    z.literal("none"),
]);

export const plotlyDataConstrainTextSchema = z.union([
    z.literal("inside"),
    z.literal("outside"),
    z.literal("both"),
    z.literal("none"),
]);

export const plotlyDataFillSchema = z.union([
    z.literal("none"),
    z.literal("tozeroy"),
    z.literal("tozerox"),
    z.literal("tonexty"),
    z.literal("tonextx"),
    z.literal("toself"),
    z.literal("tonext"),
]);
