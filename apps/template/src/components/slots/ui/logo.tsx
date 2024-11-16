// Slot: UI/logo type:component propsExtends:HTMLProps<HTMLOrSVGElement>
import REPLACEME from "#/components/REPLACEMEcomponent";
import React, { HTMLProps } from "react";

interface LogoProps extends HTMLProps<HTMLOrSVGElement> { }

const LogoTemplate = (props: LogoProps) => {
    return <REPLACEME {...props as any}/>
};

LogoTemplate.displayName = "REPLACEME";

export default LogoTemplate;
