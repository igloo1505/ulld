import { z } from "zod";
import { plotlyLayoutAxisPropSchema } from "../general/axes/layoutAxis";
import {
    plotlyBarModeSchema,
    plotlyBarNormSchema,
    plotlyCalendarSchema,
    plotlyColorSchema,
    plotlyDragMode,
    plotlyFontSchema,
    plotlyLayoutHoverMode,
    plotlySelectDirectionSchema,
} from "../general/utils";
import { plotlyHoverLabelSchema } from "../interaction/hoverLabel";
import { plotlyAxisSchema } from "../general/axes/plotlyAxis";
import { plotlySceneSchema } from "../general/scene/main";
import { plotlyGridSchema } from "../general/grid";
import { plotlyTransitionSchema } from "../general/transition";
import { plotlyTemplateSchema } from "../general/template";
import { numberStringUnionSchema } from "../general/nonspecificUtilities";
import { plotlyTitleSchema } from "../general/title";
import { plotlyModeBarSchema } from "../general/modebar";

export const plotlyLayoutSchema = z.object({
    aspectmode: z
        .union([z.literal("manual"), z.literal("data"), z.literal("cube")])
        .default("data"),
    // yaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    // xaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    // zaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    colorway: z.string().array()jkkkkk:.optional(),
    title: plotlyTitleSchema.default({}),
    titlefont: plotlyFontSchema.default({}),
    autosize: z.boolean().optional(),
    showlegend: z.boolean().optional(),
    paper_bgcolor: plotlyColorSchema.default("hsl(var(--background))"),
    plot_bgcolor: plotlyColorSchema.default("hsl(var(--secondary)/0.25)"),
    separators: z.string().optional(),
    hidesources: z.boolean().optional(),
    xaxis: plotlyLayoutAxisPropSchema.partial(),
    xaxis2: plotlyLayoutAxisPropSchema.partial(),
    xaxis3: plotlyLayoutAxisPropSchema.partial(),
    xaxis4: plotlyLayoutAxisPropSchema.partial(),
    xaxis5: plotlyLayoutAxisPropSchema.partial(),
    xaxis6: plotlyLayoutAxisPropSchema.partial(),
    xaxis7: plotlyLayoutAxisPropSchema.partial(),
    xaxis8: plotlyLayoutAxisPropSchema.partial(),
    xaxis9: plotlyLayoutAxisPropSchema.partial(),
    yaxis: plotlyLayoutAxisPropSchema.partial(),
    yaxis2: plotlyLayoutAxisPropSchema.partial(),
    yaxis3: plotlyLayoutAxisPropSchema.partial(),
    yaxis4: plotlyLayoutAxisPropSchema.partial(),
    yaxis5: plotlyLayoutAxisPropSchema.partial(),
    yaxis6: plotlyLayoutAxisPropSchema.partial(),
    yaxis7: plotlyLayoutAxisPropSchema.partial(),
    yaxis8: plotlyLayoutAxisPropSchema.partial(),
    yaxis9: plotlyLayoutAxisPropSchema.partial(),
    height: z.number().optional(),
    width: z.number().optional(),
    hovermode: plotlyLayoutHoverMode.optional(),
    hoverdistance: z.number().optional(),
    hoverlabel: plotlyHoverLabelSchema.partial(),
    calendar: plotlyCalendarSchema.optional(),
    // mapbox: Mapbox // TODO: Handle this
    subplot: z.string().optional(),
    radialaxis: plotlyAxisSchema.partial().optional(),
    dragmode: plotlyDragMode.optional(),
    orientation: z.number().optional(),
    // annotations: Array<Partial<Annotations>>; TODO: Handle all of these
    // shapes: Array<Partial<Shape>>;
    // images: Array<Partial<Image>>;
    // updatemenus: Array<Partial<UpdateMenu>>;
    // sliders: Array<Partial<Slider>>;
    // legend: Partial<Legend>;
    font: plotlyFontSchema.partial(),
    scene: plotlySceneSchema.partial(),
    scene2: plotlySceneSchema.partial(),
    scene3: plotlySceneSchema.partial(),
    scene4: plotlySceneSchema.partial(),
    scene5: plotlySceneSchema.partial(),
    scene6: plotlySceneSchema.partial(),
    scene7: plotlySceneSchema.partial(),
    scene8: plotlySceneSchema.partial(),
    scene9: plotlySceneSchema.partial(),
    barmode: plotlyBarModeSchema.optional(),
    barnorm: plotlyBarNormSchema.optional(),
    bargap: z.number().optional(),
    bargroupgap: z.number().optional(),
    boxmode: z.literal("group").or(z.literal("overlay")).optional(),
    selectdirection: plotlySelectDirectionSchema.optional(),
    hiddenlabels: z.string().array().optional(),
    grid: plotlyGridSchema.partial(),
    // TODO: Handle the polar layout props here
    // polar: Partial<PolarLayout>;
    // polar2: Partial<PolarLayout>;
    // polar3: Partial<PolarLayout>;
    // polar4: Partial<PolarLayout>;
    // polar5: Partial<PolarLayout>;
    // polar6: Partial<PolarLayout>;
    // polar7: Partial<PolarLayout>;
    // polar8: Partial<PolarLayout>;
    // polar9: Partial<PolarLayout>;
    transition: plotlyTransitionSchema.optional(),
    template: plotlyTemplateSchema.optional(),
    clickmode: z.union([
        z.literal("event"),
        z.literal("select"),
        z.literal("event+select"),
        z.literal("none"),
    ]).optional(),
    uirevision: numberStringUnionSchema.optional(),
    uid: z.string().optional(),
    datarevision: numberStringUnionSchema.optional(),
    editrevision: numberStringUnionSchema.optional(),
    selectionrevision: numberStringUnionSchema.optional(),
    modebar: plotlyModeBarSchema.partial(),
});
