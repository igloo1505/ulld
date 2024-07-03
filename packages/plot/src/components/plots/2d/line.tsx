import React, { useCallback, useMemo } from "react";
import { BasePlotProps, LineAndScatterProps } from "../../../types";
import { PlotContainer } from "../../general/container";
import {
    lineAndScatterSchema,
    LineAndScatterSchema,
} from "../../../schemas/plotProps/lineAndScatterSchema";
import { usePlotVariables } from "../../../hooks/usePlotInput";
import { ComposedContainer } from "../../general/composedContainer";
import { getRandomId } from "@ulld/utilities/identity";
/* import { PlotMathHandler } from "@ulld/math/plotMathHandler"; */

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

interface LinePlotProps
    extends BasePlotProps,
    LineAndScatterSchema { }

export const LinePlot = (props: LinePlotProps) => {
    const parsed = lineAndScatterSchema.parse(props);
    const vars = usePlotVariables(props.id, props.variables);
    /* let x = useMemo(() => 10, [props.min, props.max]) */
    /* const values = useMemo(() => props.fnc, []); */
    return (
        <PlotContainer validVariables={vars.isValid}>
            <ComposedContainer>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </ComposedContainer>
        </PlotContainer>
    );
};

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposedContainer } from "../../general/composedContainer";


export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        return (
    );
    }
}

LinePlot.displayName = "LinePlot";
