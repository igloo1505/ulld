import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "class-variance-authority";
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "lg" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "lg" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.d.ts.map