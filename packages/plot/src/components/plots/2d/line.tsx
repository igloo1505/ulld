import React from "react";
import { DataManager2d } from "../../../lib/classes/dataManager";
import { Plot } from "../plot"
import { DataManager2dLinePropInput, dataManagerPropsLine2d } from "../../../lib/schemas/plotSpecific/line2d";


const testParams = {
    "type": "scatter",
    "visible": true,
    "showLegend": true,
    "legendrank": 1000,
    "legendgroup": "",
    "opacity": 1,
    "hovertext": "",
    "hoverinfo": "all",
    "hovertemplate": "",
    "xaxis": "x",
    "yaxis": "y",
    "marker": {
        "angle": 0,
        "angleref": "up",
        "cauto": true,
        "colorbar": {
            "bgcolor": "hsl(var(--card))",
            "bordercolor": "hsl(var(--border))",
            "borderwidth": 0,
            "exponentformat": "power",
            "nticks": 0,
            "orientation": "v",
            "outlinecolor": "hsl(var(--border))",
            "outlinewidth": 1,
            "seperatethousands": true,
            "thickness": 30,
            "thicknessmode": "pixels"
        },
        "colorscale": "Rainbow",
        "colorscaleDark": "Electric",
        "sizeref": 1,
        "symbol": "circle",
        "line": {
            "cauto": true,
            "colorscale": "Rainbow",
            "colorscaleDark": "Electric"
        }
    },
    "textfont": {
        "color": "hsl(var(--primary))",
        "family": "var(--font-sans)"
    },
    "fillgradient": {},
    "hoverlabel": {
        "align": "auto",
        "bgcolor": "hsl(var(--popover))",
        "font": {
            "color": "hsl(var(--popover-foreground))",
            "family": "var(--font-sans)"
        }
    },
    "layout": {
        "title": {
            "text": "$\\gamma$",
            "automargin": true,
            "font": {
                "color": "hsl(var(--foreground))",
                "family": "var(--font-sans)"
            },
            "pad": {
                "b": 0,
                "l": 0,
                "r": 0,
                "t": 0
            },
            "xanchor": "auto",
            "yanchor": "auto"
        },
        "showlegend": true,
        "legend": {
            "bgcolor": "hsl(var(--card))",
            "bordercolor": "hsl(var(--border))",
            "borderwidth": 0,
            "entrywidthmode": "pixels",
            "font": {
                "color": "hsl(var(--card-foreground))",
                "family": "var(--font-sans)"
            },
            "groupclick": "togglegroup",
            "grouptitlefont": {
                "color": "hsl(var(--card-foreground))",
                "family": "var(--font-sans)"
            },
            "itemclick": "toggle",
            "itemdoubleclick": "toggleothers",
            "itemwidth": 30,
            "orientation": "v",
            "title": {
                "font": {
                    "color": "hsl(var(--card-foreground))",
                    "family": "var(--font-sans)"
                }
            },
            "tracegroupgap": 10,
            "traceorder": "normal",
            "valign": "middle",
            "visible": true,
            "xanchor": "auto",
            "yanchor": "auto"
        },
        "margin": {
            "autoexpand": true,
            "b": 80,
            "l": 80,
            "t": 100,
            "r": 80,
            "pad": 0
        },
        "width": 700,
        "height": 450,
        "font": {
            "color": "hsl(var(--foreground))",
            "family": "var(--font-sans)"
        },
        "paper_bgcolor": "hsl(var(--background))",
        "plot_bgcolor": "hsl(var(--card))",
        "colorscale": {
            "diverging": [
                [
                    0,
                    "rgb(5,10,172)"
                ],
                [
                    0.35,
                    "rgb(106,137,247)"
                ],
                [
                    0.5,
                    "rgb(190,190,190)"
                ],
                [
                    0.6,
                    "rgb(220,170,132)"
                ],
                [
                    0.7,
                    "rgb(230,145,90)"
                ],
                [
                    1,
                    "rgb(178,10,28)"
                ]
            ],
            "sequential": [
                [
                    0,
                    "rgb(220,220,220)"
                ],
                [
                    0.2,
                    "rgb(245,195,157)"
                ],
                [
                    0.4,
                    "rgb(245,160,105)"
                ],
                [
                    1,
                    "rgb(178,10,28)"
                ]
            ],
            "sequentialminux": [
                [
                    0,
                    "rgb(5,10,172)"
                ],
                [
                    0.35,
                    "rgb(40,60,190)"
                ],
                [
                    0.5,
                    "rgb(70,100,245)"
                ],
                [
                    0.6,
                    "rgb(90,120,245)"
                ],
                [
                    0.7,
                    "rgb(106,137,247)"
                ],
                [
                    1,
                    "rgb(220,220,220)"
                ]
            ]
        },
        "colorway": [
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728",
            "#9467bd",
            "#8c564b",
            "#e377c2",
            "#7f7f7f",
            "#bcbd22",
            "#17becf"
        ],
        "modebar": {
            "bgcolor": "hsl(var(--popover))",
            "color": "hsl(var(--foreground))",
            "orientation": "h"
        },
        "hovermode": "closest",
        "dragmode": "zoom",
        "activeselection": {
            "fillcolor": "hsl(var(--primary))",
            "opacity": 0.5
        },
        "hoverlabel": {
            "align": "auto",
            "bgcolor": "hsl(var(--popover))",
            "bordercolor": "hsl(var(--border))",
            "font": {
                "color": "hsl(var(--popover-foreground))",
                "family": "var(--font-sans)"
            }
        },
        "xaxis": {
            "anchor": "free",
            "automargin": true,
            "autorange": true,
            "color": "hsl(var(--muted-foreground))",
            "constraintoward": "center",
            "dividercolor": "hsl(var(--muted-foreground))",
            "dividerwidth": 1,
            "exponentformat": "power",
            "griddash": "solid",
            "gridwidth": 1,
            "layer": "above traces",
            "linewidth": 1,
            "font": {
                "family": "var(--font-sans)"
            },
            "scaleratio": 1,
            "tickfont": {
                "color": "hsl(var(--muted-foreground))",
                "family": "var(--font-sans)",
                "size": 6
            },
            "ticklabelposition": "outside",
            "title": {
                "font": {
                    "color": "hsl(var(--muted-foreground))",
                    "family": "var(--font-sans)"
                },
                "text": "x"
            },
            "type": "linear",
            "range": [
                -10,
                9.999999999999995
            ]
        },
        "yaxis": {
            "anchor": "free",
            "automargin": true,
            "autorange": true,
            "color": "hsl(var(--muted-foreground))",
            "constraintoward": "center",
            "dividercolor": "hsl(var(--muted-foreground))",
            "dividerwidth": 1,
            "exponentformat": "power",
            "griddash": "solid",
            "gridwidth": 1,
            "layer": "above traces",
            "linewidth": 1,
            "font": {
                "family": "var(--font-sans)"
            },
            "scaleratio": 1,
            "tickfont": {
                "color": "hsl(var(--muted-foreground))",
                "family": "var(--font-sans)",
                "size": 6
            },
            "ticklabelposition": "outside",
            "title": {
                "font": {
                    "color": "hsl(var(--muted-foreground))",
                    "family": "var(--font-sans)"
                },
                "text": "y"
            },
            "type": "linear",
            "range": [
                -1.1106373367127835,
                1.1106373367127835
            ]
        }
    },
    "xAxis": {
        "anchor": "free",
        "automargin": true,
        "autorange": true,
        "color": "hsl(var(--muted-foreground))",
        "constraintoward": "center",
        "dividercolor": "hsl(var(--muted-foreground))",
        "dividerwidth": 1,
        "exponentformat": "power",
        "griddash": "solid",
        "gridwidth": 1,
        "layer": "above traces",
        "linewidth": 1,
        "font": {
            "family": "var(--font-sans)"
        },
        "scaleratio": 1,
        "tickfont": {
            "color": "hsl(var(--muted-foreground))",
            "family": "var(--font-sans)",
            "size": 6
        },
        "ticklabelposition": "outside",
        "title": {
            "font": {
                "color": "hsl(var(--muted-foreground))",
                "family": "var(--font-sans)"
            }
        }
    },
    "yAxis": {
        "anchor": "free",
        "automargin": true,
        "autorange": false,
        "color": "hsl(var(--muted-foreground))",
        "constraintoward": "center",
        "dividercolor": "hsl(var(--muted-foreground))",
        "dividerwidth": 1,
        "exponentformat": "power",
        "griddash": "solid",
        "gridwidth": 1,
        "layer": "above traces",
        "linewidth": 1,
        "font": {
            "family": "var(--font-sans)"
        },
        "scaleratio": 1,
        "tickfont": {
            "color": "hsl(var(--muted-foreground))",
            "family": "var(--font-sans)",
            "size": 6
        },
        "ticklabelposition": "outside",
        "title": {
            "font": {
                "color": "hsl(var(--muted-foreground))",
                "family": "var(--font-sans)"
            }
        }
    },
    "cube": false,
    "xLabel": "x",
    "yLabel": "y",
    "zLabel": "z",
    "noGrid": false,
    "title": "$\\gamma$",
    "range": [
        -10,
        10
    ],
    "axisPoints": 100,
    "xRange": [
        -10,
        10
    ],
    "data": [
        {
            "type": "scatter",
            "line": {
                "color": "hsl(var(--primary))"
            },
            "marker": {
                "angle": 0,
                "angleref": "up",
                /* "cauto": true, */
                "colorbar": {
                    "bgcolor": "hsl(var(--card))",
                    "bordercolor": "hsl(var(--border))",
                    "borderwidth": 0,
                    "exponentformat": "power",
                    "nticks": 0,
                    "orientation": "v",
                    "outlinecolor": "hsl(var(--border))",
                    "outlinewidth": 1,
                    "seperatethousands": true,
                    "thickness": 30,
                    "thicknessmode": "pixels"
                },
                /* "colorscale": "Rainbow", */
                /* "colorscaleDark": "Electric", */
                "sizeref": 1,
                "symbol": "circle",
                /* "line": { */
                /*     "cauto": true, */
                /*     "colorscale": "Rainbow", */
                /*     "colorscaleDark": "Electric" */
                /* }, */
                "color": "var(--primary-rgb)"
            },
            "x": [
                -10,
                -9.8,
                -9.600000000000001,
                -9.400000000000002,
                -9.200000000000003,
                -9.000000000000004,
                -8.800000000000004,
                -8.600000000000005,
                -8.400000000000006,
                -8.200000000000006,
                -8.000000000000007,
                -7.800000000000007,
                -7.600000000000007,
                -7.400000000000007,
                -7.200000000000006,
                -7.000000000000006,
                -6.800000000000006,
                -6.600000000000006,
                -6.400000000000006,
                -6.2000000000000055,
                -6.000000000000005,
                -5.800000000000005,
                -5.600000000000005,
                -5.400000000000005,
                -5.200000000000005,
                -5.000000000000004,
                -4.800000000000004,
                -4.600000000000004,
                -4.400000000000004,
                -4.200000000000004,
                -4.0000000000000036,
                -3.8000000000000034,
                -3.600000000000003,
                -3.400000000000003,
                -3.200000000000003,
                -3.0000000000000027,
                -2.8000000000000025,
                -2.6000000000000023,
                -2.400000000000002,
                -2.200000000000002,
                -2.0000000000000018,
                -1.8000000000000018,
                -1.6000000000000019,
                -1.400000000000002,
                -1.200000000000002,
                -1.000000000000002,
                -0.800000000000002,
                -0.6000000000000021,
                -0.4000000000000021,
                -0.20000000000000207,
                -2.0539125955565396e-15,
                0.19999999999999796,
                0.39999999999999797,
                0.599999999999998,
                0.799999999999998,
                0.999999999999998,
                1.199999999999998,
                1.399999999999998,
                1.5999999999999979,
                1.7999999999999978,
                1.9999999999999978,
                2.199999999999998,
                2.399999999999998,
                2.5999999999999983,
                2.7999999999999985,
                2.9999999999999987,
                3.199999999999999,
                3.399999999999999,
                3.599999999999999,
                3.7999999999999994,
                3.9999999999999996,
                4.199999999999999,
                4.3999999999999995,
                4.6,
                4.8,
                5,
                5.2,
                5.4,
                5.6000000000000005,
                5.800000000000001,
                6.000000000000001,
                6.200000000000001,
                6.400000000000001,
                6.600000000000001,
                6.800000000000002,
                7.000000000000002,
                7.200000000000002,
                7.400000000000002,
                7.600000000000002,
                7.8000000000000025,
                8.000000000000002,
                8.200000000000001,
                8.4,
                8.6,
                8.799999999999999,
                8.999999999999998,
                9.199999999999998,
                9.399999999999997,
                9.599999999999996,
                9.799999999999995,
                9.999999999999995
            ],
            "y": [
                0.5440211108893698,
                0.3664791292519284,
                0.1743267812229814,
                -0.02477542545335599,
                -0.2228899141002442,
                -0.4121184852417533,
                -0.5849171928917588,
                -0.7343970978741098,
                -0.8545989080882778,
                -0.9407305566797707,
                -0.9893582466233808,
                -0.9985433453746053,
                -0.9679196720314881,
                -0.8987080958116297,
                -0.7936678638491569,
                -0.6569865987187938,
                -0.4941133511386136,
                -0.31154136351338374,
                -0.11654920485049894,
                0.0830894028174911,
                0.27941549819892075,
                0.46460217941375265,
                0.6312666378723174,
                0.7727644875559843,
                0.8834546557201511,
                0.9589242746631372,
                0.9961646088358403,
                0.993691003633465,
                0.9516020738895171,
                0.8715757724135899,
                0.7568024953079306,
                0.6118578909427217,
                0.44252044329485524,
                0.2555411020268342,
                0.05837414342758274,
                -0.14112000805986458,
                -0.33498815015590255,
                -0.5155013718214623,
                -0.6754631805511493,
                -0.808496403819589,
                -0.9092974268256809,
                -0.9738476308781948,
                -0.9995736030415051,
                -0.9854497299884605,
                -0.9320390859672271,
                -0.8414709848078976,
                -0.7173560908995242,
                -0.564642473395037,
                -0.3894183423086524,
                -0.19866933079506324,
                -2.0539125955565396e-15,
                0.19866933079505922,
                0.38941834230864864,
                0.5646424733950337,
                0.7173560908995215,
                0.8414709848078954,
                0.9320390859672256,
                0.9854497299884598,
                0.9995736030415052,
                0.9738476308781957,
                0.9092974268256826,
                0.8084964038195914,
                0.6754631805511523,
                0.5155013718214657,
                0.33498815015590633,
                0.14112000805986855,
                -0.058374143427578754,
                -0.2555411020268304,
                -0.4425204432948517,
                -0.6118578909427186,
                -0.756802495307928,
                -0.8715757724135877,
                -0.9516020738895158,
                -0.9936910036334644,
                -0.9961646088358407,
                -0.9589242746631385,
                -0.8834546557201531,
                -0.7727644875559871,
                -0.6312666378723208,
                -0.4646021794137566,
                -0.279415498198925,
                -0.08308940281749552,
                0.11654920485049453,
                0.3115413635133795,
                0.4941133511386097,
                0.6569865987187904,
                0.7936678638491542,
                0.8987080958116277,
                0.967919672031487,
                0.9985433453746051,
                0.9893582466233816,
                0.9407305566797726,
                0.8545989080882805,
                0.7343970978741134,
                0.5849171928917631,
                0.4121184852417582,
                0.2228899141002494,
                0.024775425453361317,
                -0.17432678122297612,
                -0.36647912925192344,
                -0.5440211108893653
            ],
            "mode": "lines",
            "showlegend": true,
            "visible": true,
            "opacity": 1,
            "locationmode": "USA-states",
            "colorbar": {
                "bgcolor": "hsl(var(--card))",
                "bordercolor": "hsl(var(--border))",
                "borderwidth": 0,
                "exponentformat": "power",
                "nticks": 0,
                "orientation": "v",
                "outlinecolor": "hsl(var(--border))",
                "outlinewidth": 1,
                "seperatethousands": true,
                "thickness": 30,
                "thicknessmode": "pixels"
            }
        }
    ]
}


const LinePlot2d = (_props: DataManager2dLinePropInput) => {
    const manager = new DataManager2d(dataManagerPropsLine2d.parse(_props));
    const data = manager.getDataAs("scatter")
    return <div>
        <Plot 
            params={testParams as any}
           /*  params={{ */
           /*      ...manager.getProps(), */
           /*      data: data */
           /* }} */
        />
    </div>
};

LinePlot2d.displayName = "LinePlot2d";

export default LinePlot2d;
