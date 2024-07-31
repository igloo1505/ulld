"use client"
import React from "react";

interface FormattedDonutLabelProps { 
}

const FormattedDonutLabel = ({ payload, ...props }: any) => {
    return (
        <text
            cx={props.cx}
            cy={props.cy}
            x={props.x}
            y={props.y}
            textAnchor={props.textAnchor}
            dominantBaseline={props.dominantBaseline}
            fill="hsla(var(--foreground))"
        >
                {payload.category}
        </text>
    );
};

FormattedDonutLabel.displayName = "FormattedDonutLabel";

export default FormattedDonutLabel;
