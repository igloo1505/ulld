import { z } from "zod";
import { f2d, functionFieldTransform, functionObjectSchema } from "./function";
import { twoDimensionalPlotTypes } from "./staticData";

const functionObject2dSchema = functionObjectSchema.extend({
    f: f2d,
});

const functionField2d = z
    .union([f2d, functionObject2dSchema])
    .transform((data) => {
        return functionFieldTransform<
            typeof data,
            z.output<typeof functionObject2dSchema>
        >(data, functionObject2dSchema);
    });

const internalPropState = z
    .object({
        f: z.union([functionField2d, functionField2d.array()]).default([]),
        cube: z.boolean().default(false),
        xTicks: z.number().optional(),
        yTicks: z.number().optional(),
        zTicks: z.number().optional(),
        xLabel: z.string().default("x"),
        yLabel: z.string().default("y"),
        zLabel: z.string().default("z"),
        noGrid: z.boolean().default(false),
        title: z.string().optional(),
        range: z
            .tuple([z.number(), z.number()])
            .default([-10, 10])
            .describe("Override default range's and apply to all independent axis'"),
        xRange: z.tuple([z.number(), z.number()]).optional(),
        yRange: z.tuple([z.number(), z.number()]).optional(),
        zRange: z.tuple([z.number(), z.number()]).optional(),
        axisPoints: z.number().default(100),
    })
    .describe(
        "Data passed to plotly after being handled internally. Not part of Plotly's API directly.",
    );

const modeBarBtn = z.union([
    z.literal("v1hovermode"),
    z.literal("hoverclosest"),
    z.literal("hovercompare"),
    z.literal("togglehover"),
    z.literal("togglespikelines"),
    z.literal("drawline"),
    z.literal("drawopenpath"),
    z.literal("drawclosedpath"),
    z.literal("drawcircle"),
    z.literal("drawrect"),
    z.literal("eraseshape"),
]);

const exponentFormatSchema = z.union([
    z.literal("none"),
    z.literal("e"),
    z.literal("E"),
    z.literal("power"),
    z.literal("SI"),
    z.literal("B"),
]);

const modeBarBtnRemove = z.union([
    z.literal("autoScale2d"),
    z.literal("autoscale"),
    z.literal("editInChartStudio"),
    z.literal("editinchartstudio"),
    z.literal("hoverCompareCartesian"),
    z.literal("hovercompare"),
    z.literal("lasso"),
    z.literal("lasso2d"),
    z.literal("orbitRotation"),
    z.literal("orbitrotation"),
    z.literal("pan"),
    z.literal("pan2d"),
    z.literal("pan3d"),
    z.literal("reset"),
    z.literal("resetCameraDefault3d"),
    z.literal("resetCameraLastSave3d"),
    z.literal("resetGeo"),
    z.literal("resetSankeyGroup"),
    z.literal("resetScale2d"),
    z.literal("resetViewMapbox"),
    z.literal("resetViews"),
    z.literal("resetcameradefault"),
    z.literal("resetcameralastsave"),
    z.literal("resetsankeygroup"),
    z.literal("resetscale"),
    z.literal("resetview"),
    z.literal("resetviews"),
    z.literal("select"),
    z.literal("select2d"),
    z.literal("sendDataToCloud"),
    z.literal("senddatatocloud"),
    z.literal("tableRotation"),
    z.literal("tablerotation"),
    z.literal("toImage"),
    z.literal("toggleHover"),
    z.literal("toggleSpikelines"),
    z.literal("togglehover"),
    z.literal("togglespikelines"),
    z.literal("toimage"),
    z.literal("zoom"),
    z.literal("zoom2d"),
    z.literal("zoom3d"),
    z.literal("zoomIn2d"),
    z.literal("zoomInGeo"),
    z.literal("zoomInMapbox"),
    z.literal("zoomOut2d"),
    z.literal("zoomOutGeo"),
    z.literal("zoomOutMapbox"),
    z.literal("zoomin"),
    z.literal("zoomout"),
]);

const fontSchema = z.object({
    color: z.string().optional(),
    famile: z.string().optional(),
    size: z.number().min(1).optional(),
});

const colorScaleArray = z.tuple([z.number().min(0).max(1), z.string()]).array();

const colorScaleSchema = z.union([
    colorScaleArray,
    z.literal("Blackbody"),
    z.literal("Bluered"),
    z.literal("Blues"),
    z.literal("Cividis"),
    z.literal("Earth"),
    z.literal("Electric"),
    z.literal("Greens"),
    z.literal("Greys"),
    z.literal("Hot"),
    z.literal("Jet"),
    z.literal("Picnic"),
    z.literal("Portland"),
    z.literal("Rainbow"),
    z.literal("RdBu"),
    z.literal("Reds"),
    z.literal("Viridis"),
    z.literal("YlGnBu"),
    z.literal("YlOrRd"),
]);

const layout2dSchema = z.object({
    title: z
        .object({
            automargin: z.boolean().default(true),
            font: fontSchema.default({
                color: "hsl(var(--foreground))",
            }),
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
    showlegend: z.boolean().optional(),
    legend: z
        .object({
            bgcolor: z.string().default("hsl(var(--card))"),
            bordercolor: z.string().default("hsl(var(--border))"),
            borderwidth: z.number().default(0),
            entrywidth: z.number().optional(),
            entrywidthmode: z
                .union([z.literal("pixels"), z.literal("fraction")])
                .default("pixels"),
            font: fontSchema.default({
                color: "hsl(var(--card-foreground))",
            }),
            groupclick: z
                .union([z.literal("toggleitem"), z.literal("togglegroup")])
                .default("togglegroup"),
            grouptitlefont: fontSchema.default({
                color: "hsl(var(--card-foreground))",
            }),
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
            bgcolor: z.string().optional(),
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
});

const _markerSchema = z.object({
    angle: z.number().default(0),
    angleref: z.union([z.literal("previous"), z.literal("up")]).default("up"),
    autocolorscale: z
        .boolean()
        .default(true)
        .describe("Whether or not to use default color palette."),
    cauto: z
        .boolean()
        .default(true)
        .describe("Whether or not to automatically compute color scale."),
    cmax: z.number().optional(),
    cmid: z.number().optional(),
    cmin: z.number().optional(),
    color: z.union([z.string(), z.string().array()]).optional(),
    coloraxis: z
        .string()
        .optional()
        .describe("The subplotid to attach the color axis to."),
    colorbar: z
        .object({
            bgcolor: z.string().default("hsl(var(--card))"),
            bordercolor: z.string().default("hsl(var(--border))"),
            borderwidth: z.number().default(0),
            title: z
                .object({
                    text: z.string().optional(),
                    side: z
                        .union([z.literal("right"), z.literal("top"), z.literal("bottom")])
                        .default("top"),
                    font: fontSchema.default({
                        color: "hsl(var(--card-foreground))",
                    }),
                })
                .default({}),
            exponentformat: exponentFormatSchema.default("power"),
            nticks: z.number().default(0),
            orientation: z.union([z.literal("v"), z.literal("h")]).default("v"),
            outlinecolor: z.string().default("hsl(var(--border))"),
            outlinewidth: z.number().default(1),
            seperatethousands: z.boolean().default(true),
            thickness: z.number().default(30),
            thicknessmode: z
                .union([z.literal("fraction"), z.literal("pixels")])
                .default("pixels"),
            tickfont: fontSchema.default({
                color: "hsl(var(--card-foreground))",
            }),
        })
        .default({}),
    colorscale: colorScaleSchema.default("Rainbow"),
    colorscaleDark: colorScaleSchema.default("Electric"),
    width: z.number().optional(),
    sizemode: z
        .union([z.literal("diameter"), z.literal("area")])
        .default("diameter"),
    sizeref: z.number().default(1),
    symbol: z
        .union([
            z.literal("0"),
            z.literal("0"),
            z.literal("circle"),
            z.literal("100"),
            z.literal("100"),
            z.literal("circle-open"),
            z.literal("200"),
            z.literal("200"),
            z.literal("circle-dot"),
            z.literal("300"),
            z.literal("300"),
            z.literal("circle-open-dot"),
            z.literal("1"),
            z.literal("1"),
            z.literal("square"),
            z.literal("101"),
            z.literal("101"),
            z.literal("square-open"),
            z.literal("201"),
            z.literal("201"),
            z.literal("square-dot"),
            z.literal("301"),
            z.literal("301"),
            z.literal("square-open-dot"),
            z.literal("2"),
            z.literal("2"),
            z.literal("diamond"),
            z.literal("102"),
            z.literal("102"),
            z.literal("diamond-open"),
            z.literal("202"),
            z.literal("202"),
            z.literal("diamond-dot"),
            z.literal("302"),
            z.literal("302"),
            z.literal("diamond-open-dot"),
            z.literal("3"),
            z.literal("3"),
            z.literal("cross"),
            z.literal("103"),
            z.literal("103"),
            z.literal("cross-open"),
            z.literal("203"),
            z.literal("203"),
            z.literal("cross-dot"),
            z.literal("303"),
            z.literal("303"),
            z.literal("cross-open-dot"),
            z.literal("4"),
            z.literal("4"),
            z.literal("x"),
            z.literal("104"),
            z.literal("104"),
            z.literal("x-open"),
            z.literal("204"),
            z.literal("204"),
            z.literal("x-dot"),
            z.literal("304"),
            z.literal("304"),
            z.literal("x-open-dot"),
            z.literal("5"),
            z.literal("5"),
            z.literal("triangle-up"),
            z.literal("105"),
            z.literal("105"),
            z.literal("triangle-up-open"),
            z.literal("205"),
            z.literal("205"),
            z.literal("triangle-up-dot"),
            z.literal("305"),
            z.literal("305"),
            z.literal("triangle-up-open-dot"),
            z.literal("6"),
            z.literal("6"),
            z.literal("triangle-down"),
            z.literal("106"),
            z.literal("106"),
            z.literal("triangle-down-open"),
            z.literal("206"),
            z.literal("206"),
            z.literal("triangle-down-dot"),
            z.literal("306"),
            z.literal("306"),
            z.literal("triangle-down-open-dot"),
            z.literal("7"),
            z.literal("7"),
            z.literal("triangle-left"),
            z.literal("107"),
            z.literal("107"),
            z.literal("triangle-left-open"),
            z.literal("207"),
            z.literal("207"),
            z.literal("triangle-left-dot"),
            z.literal("307"),
            z.literal("307"),
            z.literal("triangle-left-open-dot"),
            z.literal("8"),
            z.literal("8"),
            z.literal("triangle-right"),
            z.literal("108"),
            z.literal("108"),
            z.literal("triangle-right-open"),
            z.literal("208"),
            z.literal("208"),
            z.literal("triangle-right-dot"),
            z.literal("308"),
            z.literal("308"),
            z.literal("triangle-right-open-dot"),
            z.literal("9"),
            z.literal("9"),
            z.literal("triangle-ne"),
            z.literal("109"),
            z.literal("109"),
            z.literal("triangle-ne-open"),
            z.literal("209"),
            z.literal("209"),
            z.literal("triangle-ne-dot"),
            z.literal("309"),
            z.literal("309"),
            z.literal("triangle-ne-open-dot"),
            z.literal("10"),
            z.literal("10"),
            z.literal("triangle-se"),
            z.literal("110"),
            z.literal("110"),
            z.literal("triangle-se-open"),
            z.literal("210"),
            z.literal("210"),
            z.literal("triangle-se-dot"),
            z.literal("310"),
            z.literal("310"),
            z.literal("triangle-se-open-dot"),
            z.literal("11"),
            z.literal("11"),
            z.literal("triangle-sw"),
            z.literal("111"),
            z.literal("111"),
            z.literal("triangle-sw-open"),
            z.literal("211"),
            z.literal("211"),
            z.literal("triangle-sw-dot"),
            z.literal("311"),
            z.literal("311"),
            z.literal("triangle-sw-open-dot"),
            z.literal("12"),
            z.literal("12"),
            z.literal("triangle-nw"),
            z.literal("112"),
            z.literal("112"),
            z.literal("triangle-nw-open"),
            z.literal("212"),
            z.literal("212"),
            z.literal("triangle-nw-dot"),
            z.literal("312"),
            z.literal("312"),
            z.literal("triangle-nw-open-dot"),
            z.literal("13"),
            z.literal("13"),
            z.literal("pentagon"),
            z.literal("113"),
            z.literal("113"),
            z.literal("pentagon-open"),
            z.literal("213"),
            z.literal("213"),
            z.literal("pentagon-dot"),
            z.literal("313"),
            z.literal("313"),
            z.literal("pentagon-open-dot"),
            z.literal("14"),
            z.literal("14"),
            z.literal("hexagon"),
            z.literal("114"),
            z.literal("114"),
            z.literal("hexagon-open"),
            z.literal("214"),
            z.literal("214"),
            z.literal("hexagon-dot"),
            z.literal("314"),
            z.literal("314"),
            z.literal("hexagon-open-dot"),
            z.literal("15"),
            z.literal("15"),
            z.literal("hexagon2"),
            z.literal("115"),
            z.literal("115"),
            z.literal("hexagon2-open"),
            z.literal("215"),
            z.literal("215"),
            z.literal("hexagon2-dot"),
            z.literal("315"),
            z.literal("315"),
            z.literal("hexagon2-open-dot"),
            z.literal("16"),
            z.literal("16"),
            z.literal("octagon"),
            z.literal("116"),
            z.literal("116"),
            z.literal("octagon-open"),
            z.literal("216"),
            z.literal("216"),
            z.literal("octagon-dot"),
            z.literal("316"),
            z.literal("316"),
            z.literal("octagon-open-dot"),
            z.literal("17"),
            z.literal("17"),
            z.literal("star"),
            z.literal("117"),
            z.literal("117"),
            z.literal("star-open"),
            z.literal("217"),
            z.literal("217"),
            z.literal("star-dot"),
            z.literal("317"),
            z.literal("317"),
            z.literal("star-open-dot"),
            z.literal("18"),
            z.literal("18"),
            z.literal("hexagram"),
            z.literal("118"),
            z.literal("118"),
            z.literal("hexagram-open"),
            z.literal("218"),
            z.literal("218"),
            z.literal("hexagram-dot"),
            z.literal("318"),
            z.literal("318"),
            z.literal("hexagram-open-dot"),
            z.literal("19"),
            z.literal("19"),
            z.literal("star-triangle-up"),
            z.literal("119"),
            z.literal("119"),
            z.literal("star-triangle-up-open"),
            z.literal("219"),
            z.literal("219"),
            z.literal("star-triangle-up-dot"),
            z.literal("319"),
            z.literal("319"),
            z.literal("star-triangle-up-open-dot"),
            z.literal("20"),
            z.literal("20"),
            z.literal("star-triangle-down"),
            z.literal("120"),
            z.literal("120"),
            z.literal("star-triangle-down-open"),
            z.literal("220"),
            z.literal("220"),
            z.literal("star-triangle-down-dot"),
            z.literal("320"),
            z.literal("320"),
            z.literal("star-triangle-down-open-dot"),
            z.literal("21"),
            z.literal("21"),
            z.literal("star-square"),
            z.literal("121"),
            z.literal("121"),
            z.literal("star-square-open"),
            z.literal("221"),
            z.literal("221"),
            z.literal("star-square-dot"),
            z.literal("321"),
            z.literal("321"),
            z.literal("star-square-open-dot"),
            z.literal("22"),
            z.literal("22"),
            z.literal("star-diamond"),
            z.literal("122"),
            z.literal("122"),
            z.literal("star-diamond-open"),
            z.literal("222"),
            z.literal("222"),
            z.literal("star-diamond-dot"),
            z.literal("322"),
            z.literal("322"),
            z.literal("star-diamond-open-dot"),
            z.literal("23"),
            z.literal("23"),
            z.literal("diamond-tall"),
            z.literal("123"),
            z.literal("123"),
            z.literal("diamond-tall-open"),
            z.literal("223"),
            z.literal("223"),
            z.literal("diamond-tall-dot"),
            z.literal("323"),
            z.literal("323"),
            z.literal("diamond-tall-open-dot"),
            z.literal("24"),
            z.literal("24"),
            z.literal("diamond-wide"),
            z.literal("124"),
            z.literal("124"),
            z.literal("diamond-wide-open"),
            z.literal("224"),
            z.literal("224"),
            z.literal("diamond-wide-dot"),
            z.literal("324"),
            z.literal("324"),
            z.literal("diamond-wide-open-dot"),
            z.literal("25"),
            z.literal("25"),
            z.literal("hourglass"),
            z.literal("125"),
            z.literal("125"),
            z.literal("hourglass-open"),
            z.literal("26"),
            z.literal("26"),
            z.literal("bowtie"),
            z.literal("126"),
            z.literal("126"),
            z.literal("bowtie-open"),
            z.literal("27"),
            z.literal("27"),
            z.literal("circle-cross"),
            z.literal("127"),
            z.literal("127"),
            z.literal("circle-cross-open"),
            z.literal("28"),
            z.literal("28"),
            z.literal("circle-x"),
            z.literal("128"),
            z.literal("128"),
            z.literal("circle-x-open"),
            z.literal("29"),
            z.literal("29"),
            z.literal("square-cross"),
            z.literal("129"),
            z.literal("129"),
            z.literal("square-cross-open"),
            z.literal("30"),
            z.literal("30"),
            z.literal("square-x"),
            z.literal("130"),
            z.literal("130"),
            z.literal("square-x-open"),
            z.literal("31"),
            z.literal("31"),
            z.literal("diamond-cross"),
            z.literal("131"),
            z.literal("131"),
            z.literal("diamond-cross-open"),
            z.literal("32"),
            z.literal("32"),
            z.literal("diamond-x"),
            z.literal("132"),
            z.literal("132"),
            z.literal("diamond-x-open"),
            z.literal("33"),
            z.literal("33"),
            z.literal("cross-thin"),
            z.literal("133"),
            z.literal("133"),
            z.literal("cross-thin-open"),
            z.literal("34"),
            z.literal("34"),
            z.literal("x-thin"),
            z.literal("134"),
            z.literal("134"),
            z.literal("x-thin-open"),
            z.literal("35"),
            z.literal("35"),
            z.literal("asterisk"),
            z.literal("135"),
            z.literal("135"),
            z.literal("asterisk-open"),
            z.literal("36"),
            z.literal("36"),
            z.literal("hash"),
            z.literal("136"),
            z.literal("136"),
            z.literal("hash-open"),
            z.literal("236"),
            z.literal("236"),
            z.literal("hash-dot"),
            z.literal("336"),
            z.literal("336"),
            z.literal("hash-open-dot"),
            z.literal("37"),
            z.literal("37"),
            z.literal("y-up"),
            z.literal("137"),
            z.literal("137"),
            z.literal("y-up-open"),
            z.literal("38"),
            z.literal("38"),
            z.literal("y-down"),
            z.literal("138"),
            z.literal("138"),
            z.literal("y-down-open"),
            z.literal("39"),
            z.literal("39"),
            z.literal("y-left"),
            z.literal("139"),
            z.literal("139"),
            z.literal("y-left-open"),
            z.literal("40"),
            z.literal("40"),
            z.literal("y-right"),
            z.literal("140"),
            z.literal("140"),
            z.literal("y-right-open"),
            z.literal("41"),
            z.literal("41"),
            z.literal("line-ew"),
            z.literal("141"),
            z.literal("141"),
            z.literal("line-ew-open"),
            z.literal("42"),
            z.literal("42"),
            z.literal("line-ns"),
            z.literal("142"),
            z.literal("142"),
            z.literal("line-ns-open"),
            z.literal("43"),
            z.literal("43"),
            z.literal("line-ne"),
            z.literal("143"),
            z.literal("143"),
            z.literal("line-ne-open"),
            z.literal("44"),
            z.literal("44"),
            z.literal("line-nw"),
            z.literal("144"),
            z.literal("144"),
            z.literal("line-nw-open"),
            z.literal("45"),
            z.literal("45"),
            z.literal("arrow-up"),
            z.literal("145"),
            z.literal("145"),
            z.literal("arrow-up-open"),
            z.literal("46"),
            z.literal("46"),
            z.literal("arrow-down"),
            z.literal("146"),
            z.literal("146"),
            z.literal("arrow-down-open"),
            z.literal("47"),
            z.literal("47"),
            z.literal("arrow-left"),
            z.literal("147"),
            z.literal("147"),
            z.literal("arrow-left-open"),
            z.literal("48"),
            z.literal("48"),
            z.literal("arrow-right"),
            z.literal("148"),
            z.literal("148"),
            z.literal("arrow-right-open"),
            z.literal("49"),
            z.literal("49"),
            z.literal("arrow-bar-up"),
            z.literal("149"),
            z.literal("149"),
            z.literal("arrow-bar-up-open"),
            z.literal("50"),
            z.literal("50"),
            z.literal("arrow-bar-down"),
            z.literal("150"),
            z.literal("150"),
            z.literal("arrow-bar-down-open"),
            z.literal("51"),
            z.literal("51"),
            z.literal("arrow-bar-left"),
            z.literal("151"),
            z.literal("151"),
            z.literal("arrow-bar-left-open"),
            z.literal("52"),
            z.literal("52"),
            z.literal("arrow-bar-right"),
            z.literal("152"),
            z.literal("152"),
            z.literal("arrow-bar-right-open"),
            z.literal("53"),
            z.literal("53"),
            z.literal("arrow"),
            z.literal("153"),
            z.literal("153"),
            z.literal("arrow-open"),
            z.literal("54"),
            z.literal("54"),
            z.literal("arrow-wide"),
            z.literal("154"),
            z.literal("154"),
            z.literal("arrow-wide-open"),
        ])
        .default("circle"),
});

const plotlyMarkerSchema = _markerSchema.extend({
    line: _markerSchema
        .pick({
            autocolorscale: true,
            cauto: true,
            cmax: true,
            cmid: true,
            cmin: true,
            color: true,
            coloraxis: true,
            colorscale: true,
            colorscaleDark: true,
            width: true,
        })
        .default({}),
});

const autoMarginSchema = z.union([
    z.literal("height"),
    z.literal("width"),
    z.literal("left"),
    z.literal("right"),
    z.literal("top"),
    z.literal("bottom"),
]);

const autoRangeSchema = z.union([
    z.boolean(),
    z.literal("reversed"),
    z.literal("min reversed"),
    z.literal("max reversed"),
    z.literal("min"),
    z.literal("max"),
]);

const xAxis = z.object({
    anchor: z.string().default("free"),
    automargin: z
        .union([autoMarginSchema, autoMarginSchema.array(), z.boolean()])
        .default(true)
        .transform((a) => {
            if (!Array.isArray(a)) {
                return a;
            }
            let s = "";
            a.forEach((b, i) => (s += i === a.length - 1 ? b : `${b}+`));
            return s;
        }),
    autorange: autoRangeSchema.default(true),
    color: z
        .string()
        .default("hsl(var(--muted-foreground))")
        .describe(
            "Sets color for line, font, tick and grid colors all at once. Grid color is automatically blended with the background to become more muted.",
        ),
    constrain: z.union([z.literal("range"), z.literal("domain")]).optional(),
    constraintoward: z
        .union([
            z.literal("left"),
            z.literal("center"),
            z.literal("right"),
            z.literal("top"),
            z.literal("middle"),
            z.literal("bottom"),
        ])
        .default("center"),
    dividercolor: z.string().default("hsl(var(--muted-foreground))"),
    dividerwidth: z.number().default(1),
    exponentformat: exponentFormatSchema.default("power"),
    gridcolor: z.string().optional(),
    griddash: z
        .union([
            z.literal("solid"),
            z.literal("dot"),
            z.literal("dash"),
            z.literal("longdash"),
            z.literal("dashdot"),
            z.literal("longdashdot"),
        ])
        .default("solid"),
    gridwidth: z.number().default(1),
    layer: z
        .union([z.literal("above traces"), z.literal("below traces")])
        .default("above traces"),
    linecolor: z.string().optional(),
    linewidth: z.number().default(1),
    font: fontSchema.default({}),
    scaleanchor: z.string().optional(),
    scaleratio: z.number().min(0).default(1),
    tickfont: fontSchema.default({
        color: "hsl(var(--muted-foreground))",
    }),
    ticklabelposition: z
        .union([
            z.literal("outside"),
            z.literal("inside"),
            z.literal("outside top"),
            z.literal("inside top"),
            z.literal("outside left"),
            z.literal("inside left"),
            z.literal("outside right"),
            z.literal("inside right"),
            z.literal("outside bottom"),
            z.literal("inside bottom"),
        ])
        .default("outside"),
    nticks: z.number().optional(),
    title: z
        .object({
            text: z.string().optional(),
            font: fontSchema.default({
                color: "hsl(var(--muted-foreground))",
            }),
        })
        .default({}),
});

const yAxis = xAxis.merge(z.object({}));

export const dataManagerBaseProps = z
    .object({
        type: z.string().default("scatter"),
        visible: z.boolean().default(true),
        showLegend: z.boolean().default(true),
        legendrank: z.number().default(1000),
        legendgroup: z.string().default(""),
        opacity: z.number().min(0).max(1).default(1),
        hovertext: z.string().default(""),
        showscale: z.boolean().default(false),
        size: z.number().default(6),
        hoverinfo: z
            .union([
                z.literal("x"),
                z.literal("y"),
                z.literal("x+y"),
                z.literal("z"),
                z.literal("x+z"),
                z.literal("x+y+y"),
                z.literal("y+z"),
                z.literal("text"),
                z.literal("name"),
                z.literal("all"),
                z.literal("none"),
                z.literal("skip"),
            ])
            .default("all"),
        hovertemplate: z.string().default(""),
        xaxis: z.string().default("x"),
        yaxis: z.string().default("y"),
        orientation: z.union([z.literal("v"), z.literal("h")]).optional(),
        marker: plotlyMarkerSchema.default({}),
        textfont: fontSchema.default({
            color: "hsl(var(--primary))",
        }),
        selected: z
            .object({
                marker: z
                    .object({
                        color: z.string().optional(),
                        opacity: z.number().optional(),
                        size: z.number().optional(),
                    })
                    .default({}),
            })
            .default({}),
        unselected: z
            .object({
                marker: z
                    .object({
                        color: z.string().optional(),
                        opacity: z.number().optional(),
                        size: z.number().optional(),
                    })
                    .default({}),
            })
            .default({}),
        fillcolor: z.string().optional(),
        fillgradient: z
            .object({
                colorscale: colorScaleSchema.optional(),
                start: z.number().optional(),
                stop: z.number().optional(),
                type: z
                    .union([
                        z.literal("radial"),
                        z.literal("horizontal"),
                        z.literal("vertical"),
                        z.literal("none"),
                    ])
                    .optional(),
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
                font: fontSchema.default({
                    color: "hsl(var(--popover-foreground))",
                }),
            })
            .default({}),
        hoveron: z
            .union([
                z.literal("points"),
                z.literal("fills"),
                z.literal("points+fills"),
            ])
            .optional(),
        layout: layout2dSchema.default({}),
        xAxis: xAxis.default({}),
        yAxis: yAxis.default({}),
    })
    .merge(internalPropState)
    .default({})
    .transform((a) => {
        return {
            ...a,
            layout: {
                title: {
                    text: a.layout.title.text,
                    ...a.layout.title,
                },
                xaxis: {
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.xTicks || a.xAxis.nticks,
                    title: {
                        ...a.xAxis.title,
                        text: a.xAxis?.title?.text || a.xLabel,
                    },
                },
                yaxis: {
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.yTicks || a.yAxis.nticks,
                    title: {
                        ...a.yAxis.title,
                        text: a.yAxis?.title?.text || a.yLabel,
                    },
                    ...(a.cube && {
                        scaleanchor: "x",
                        scaleratio: 1,
                    }),
                },
            },
            xRange: a.xRange || a.range,
            yRange:
                a.yRange || twoDimensionalPlotTypes.includes(a.type as any)
                    ? undefined
                    : a.range, // Should be undefined in 2d. Create a list of 2d types and validate against that to change the default.
            zRange: a.zRange || undefined,
        };
    });

export type DataManager2dPropInput = z.input<typeof dataManagerBaseProps>;
export type DataManager2dPropOutput = z.output<typeof dataManagerBaseProps>;
