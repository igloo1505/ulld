import React, { HTMLProps } from "react";
import { AnimatedUlldLogo, BaseProps } from "@ulld/icons/ulld-animated";

interface LogoProps extends HTMLProps<HTMLOrSVGElement> { }

const Logo = (props: LogoProps) => {
    return (
        <AnimatedUlldLogo
            {...props as BaseProps}
            delay={3}
            show={true}
            speed={3}
        />
    );
};

Logo.displayName = "Logo";

export default Logo;
