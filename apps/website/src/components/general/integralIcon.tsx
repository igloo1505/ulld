import React, { HTMLProps } from "react";

interface IntegralIconProps extends HTMLProps<SVGSVGElement> { }

const IntegralIcon = (props: IntegralIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
        </svg>
    );
};

IntegralIcon.displayName = "IntegralIcon";

export default IntegralIcon;
