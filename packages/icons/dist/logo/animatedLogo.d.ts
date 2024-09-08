import React from "react";
import { motion } from "framer-motion";
export interface BaseProps extends React.ComponentProps<typeof motion.svg> {
    delay?: number;
    speed?: number;
    h1?: boolean;
    suffix?: string;
    suffixDelay?: number;
    noAnimate?: boolean;
    brandColor?: boolean;
}
export type AnimatedUlldLogoProps = (BaseProps & {
    show: boolean;
    useInView?: never;
}) | (BaseProps & {
    useInView: true;
    show?: never;
});
export declare const AnimatedUlldLogo: {
    (props: AnimatedUlldLogoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
