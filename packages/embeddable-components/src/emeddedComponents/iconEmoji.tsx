import React, { CSSProperties } from "react";
import { DynamicIcon, IconProps } from "@ulld/icons";
import { ulldColorVars } from "@ulld/utilities/ulldColorVars";

type ColorVarOpts = {[k in typeof ulldColorVars[number]]?: boolean} 

interface IconStyleProps extends ColorVarOpts {
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    xxxl?: boolean;
    xxxxl?: boolean;
    xxxxxl?: boolean;
    primary?: boolean;
    important?: boolean;
    muted?: boolean;
}

interface IconEmojiProps extends Omit<IconProps, "fill">, IconStyleProps { 
    /** A valid css color string or a boolean which will apply the stroke color also to the fill. */
    fill?: boolean | string
    /** margin along the x-axis in rem. Useful to trim margin that's a part of the svg itself by setting a negative value. */
    marginX?: boolean
}

const stylesByProperty: { [k in keyof IconStyleProps]: CSSProperties } = {
    lg: {
        height: "1.5rem",
        width: "auto",
    },
    xl: {
        height: "2rem",
        width: "auto",
    },
    xxl: {
        height: "2.5rem",
        width: "auto",
    },
    xxxl: {
        height: "3rem",
        width: "auto",
    },
    xxxxl: {
        height: "3.5rem",
        width: "auto",
    },
    xxxxxl: {
        height: "4rem",
        width: "auto",
    },
    muted: {
        color: "hsl(var(--muted-foreground))",
    },
    primary: {
        color: "hsl(var(--primary))",
    },
};

const getStylesByProps = (props: IconEmojiProps) => {
    let s: CSSProperties = {};
    for (const k in props) {
        if (k in stylesByProperty) {
            s = {
                ...s,
                ...stylesByProperty[k as keyof typeof stylesByProperty],
            };
        } else if(ulldColorVars.includes(k as any)){
            s = {
                ...s,
                color: `var(--ulld-${k})`,
                ...(props.fill && {
                    fill: typeof props.fill === "string" ? props.fill : `var(--ulld-${k})`
                })
            }
        }
    }
    if(!s.fill && props.fill){
        s.fill = typeof props.fill === "string" ? props.fill : "hsl(var(--foreground))"
    }
    if(props.marginX){
        s.margin = `0px ${props.marginX}rem`
    }
    return s;
};

export const IconEmoji = (props: IconEmojiProps) => {
    let style: CSSProperties = {
        height: "1rem",
        width: "auto",
        display: "inline-block",
        ...getStylesByProps(props),
        ...props.style,
    };

    return <DynamicIcon
        {...props} 
        style={style}
    />;
};

IconEmoji.displayName = "IconEmoji";
