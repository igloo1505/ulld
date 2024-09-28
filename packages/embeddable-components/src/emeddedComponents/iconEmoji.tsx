import React, { CSSProperties } from "react";
import { DynamicIcon, IconProps } from "@ulld/icons";
import { ulldColorVars } from "@ulld/utilities/ulldColorVars";

type ColorVarOpts = {[k in typeof ulldColorVars[number]]?: boolean} 

interface IconStyleProps extends ColorVarOpts {
    lg?: boolean;
    xl?: boolean;
    primary?: boolean;
    important?: boolean;
    muted?: boolean;
}

interface IconEmojiProps extends Omit<IconProps, "fill">, IconStyleProps { 
    fill?: boolean
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
                    fill: `var(--ulld-${k})`
                })
            }
        }
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
