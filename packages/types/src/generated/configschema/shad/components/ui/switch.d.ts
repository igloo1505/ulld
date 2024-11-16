import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
interface ExtraSwitchProps {
    white?: boolean;
    thumbWhite?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & ExtraSwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
//# sourceMappingURL=switch.d.ts.map