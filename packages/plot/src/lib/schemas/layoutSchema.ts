import {z} from 'zod'
import { colorScaleArray, colorScaleSchema } from './colorSchema';
import { modeBarBtn, modeBarBtnRemove } from './modebarSchemas';
import { fontSchema } from './fontSchema';
import { xAxis, yAxis } from './axis';


export const layout2dSchema = z.object({
    title: z
        .object({
            automargin: z.boolean().default(true),
            font: fontSchema.default({}),
            pad: z
                .object({
                    b: z.number().default(0),
                    l: z.number().default(0),
                    r: z.number().default(0),
                    t: z.number().default(0),
                })
                .default({}),
            text: z.string().optional(),
            xanchor: z
                .union([
                    z.literal("auto"),
                    z.literal("left"),
                    z.literal("center"),
                    z.literal("right"),
                ])
                .default("auto"),
            xref: z.union([z.literal("container"), z.literal("paper")]).optional(),
            yanchor: z
                .union([
                    z.literal("auto"),
                    z.literal("top"),
                    z.literal("middle"),
                    z.literal("bottom"),
                ])
                .default("auto"),
        })
        .default({}),
    showlegend: z.boolean().default(true),
    legend: z
        .object({
            bgcolor: z.string().optional(),
            bordercolor: z.string().optional(),
            borderwidth: z.number().default(0),
            entrywidth: z.number().optional(),
            entrywidthmode: z
                .union([z.literal("pixels"), z.literal("fraction")])
                .default("pixels"),
            font: fontSchema.optional(),
            groupclick: z
                .union([z.literal("toggleitem"), z.literal("togglegroup")])
                .default("togglegroup"),
            grouptitlefont: fontSchema.optional(),
            itemclick: z
                .union([
                    z.literal("toggle"),
                    z.literal("toggleothers"),
                    z.literal(false),
                ])
                .default("toggle"),
            itemdoubleclick: z
                .union([
                    z.literal("toggle"),
                    z.literal("toggleothers"),
                    z.literal(false),
                ])
                .default("toggleothers"),
            itemsizing: z
                .union([z.literal("trace"), z.literal("constant")])
                .optional(),
            itemwidth: z.number().min(30).default(30),
            orientation: z.union([z.literal("v"), z.literal("h")]).default("v"),
            title: z
                .object({
                    font: fontSchema.default({
                        color: "hsl(var(--card-foreground))",
                    }),
                    side: z
                        .union([
                            z.literal("top"),
                            z.literal("left"),
                            z.literal("top left"),
                            z.literal("top center"),
                            z.literal("top right"),
                        ])
                        .optional(),
                    text: z.string().optional(),
                })
                .default({}),
            tracegroupgap: z.number().min(10).default(10),
            traceorder: z
                .union([
                    z.literal("reversed"),
                    z.literal("grouped"),
                    z.literal("reversed+grouped"),
                    z.literal("normal"),
                ])
                .default("normal"),
            valign: z
                .union([z.literal("top"), z.literal("middle"), z.literal("bottom")])
                .default("middle"),
            visible: z.boolean().default(true),
            xanchor: z
                .union([
                    z.literal("auto"),
                    z.literal("left"),
                    z.literal("center"),
                    z.literal("right"),
                ])
                .default("auto"),
            xref: z.union([z.literal("container"), z.literal("paper")]).optional(),
            yanchor: z
                .union([
                    z.literal("auto"),
                    z.literal("top"),
                    z.literal("middle"),
                    z.literal("bottom"),
                ])
                .default("auto"),
        })
        .default({}),
    margin: z
        .object({
            autoexpand: z.boolean().default(true),
            b: z.number().min(0).default(80),
            l: z.number().min(0).default(80),
            t: z.number().min(0).default(100),
            r: z.number().min(0).default(80),
            pad: z.number().min(0).default(0),
        })
        .default({}),
    autosize: z.boolean().optional(),
    width: z.number().min(10).default(700),
    height: z.number().min(10).default(450),
    font: fontSchema.default({
        color: "hsl(var(--foreground))",
    }),
    paper_bgcolor: z.string().default("hsl(var(--background))"),
    plot_bgcolor: z.string().default("hsl(var(--card))"),
    colorscale: z
        .object({
            diverging: colorScaleArray
                .default([
                    [0, "rgb(5,10,172)"],
                    [0.35, "rgb(106,137,247)"],
                    [0.5, "rgb(190,190,190)"],
                    [0.6, "rgb(220,170,132)"],
                    [0.7, "rgb(230,145,90)"],
                    [1, "rgb(178,10,28)"],
                ])
                .describe("autocolorscale must be true for this to work."),
            sequential: colorScaleArray
                .default([
                    [0, "rgb(220,220,220)"],
                    [0.2, "rgb(245,195,157)"],
                    [0.4, "rgb(245,160,105)"],
                    [1, "rgb(178,10,28)"],
                ])
                .describe("autocolorscale must be true for this to work."),

            sequentialminux: colorScaleArray
                .default([
                    [0, "rgb(5,10,172)"],
                    [0.35, "rgb(40,60,190)"],
                    [0.5, "rgb(70,100,245)"],
                    [0.6, "rgb(90,120,245)"],
                    [0.7, "rgb(106,137,247)"],
                    [1, "rgb(220,220,220)"],
                ])
                .describe("autocolorscale must be true for this to work."),
        })
        .default({}),
    colorway: z
        .string()
        .array()
        .default([
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728",
            "#9467bd",
            "#8c564b",
            "#e377c2",
            "#7f7f7f",
            "#bcbd22",
            "#17becf",
        ]),
    modebar: z
        .object({
            activeColor: z.string().optional(),
            add: z.union([modeBarBtn, modeBarBtn.array()]).optional(),
            bgcolor: z.string().default("hsl(var(--popover))"),
            color: z.string().default("hsl(var(--foreground))"),
            orientation: z.union([z.literal("h"), z.literal("v")]).default("h"),
            remove: z.union([modeBarBtnRemove, modeBarBtnRemove.array()]).optional(),
        })
        .default({}),
    hovermode: z
        .union([
            z.literal("x"),
            z.literal("y"),
            z.literal("closest"),
            z.literal(false),
            z.literal("x unified"),
            z.literal("y unified"),
        ])
        .default("closest"),
    dragmode: z
        .union([
            z.literal("zoom"),
            z.literal("pan"),
            z.literal("select"),
            z.literal("lasso"),
            z.literal("drawclosedpath"),
            z.literal("drawopenpath"),
            z.literal("drawline"),
            z.literal("drawrect"),
            z.literal("drawcircle"),
            z.literal("orbit"),
            z.literal("turntable"),
            z.literal(false),
        ])
        .default("zoom"),
    activeselection: z
        .object({
            fillcolor: z.string().default("hsl(var(--primary))"),
            opacity: z.number().min(0).max(1).default(0.5),
        })
        .default({}),
    hoverlabel: z
        .object({
            align: z
                .union([z.literal("left"), z.literal("right"), z.literal("auto")])
                .default("auto"),
            bgcolor: z
                .union([colorScaleSchema, z.string()])
                .default("hsl(var(--popover))"),
            bordercolor: z.string().default("hsl(var(--border))"),
            font: fontSchema.default({
                color: "hsl(var(--popover-foreground))",
            }),
        })
        .default({}),
        xaxis: xAxis.default({}),
        yaxis: yAxis.default({}),
});

