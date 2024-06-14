import { docTypeUISchema } from "@ulld/configschema/zod/documentConfigSchema";
import { Path, useFormContext } from "@ulld/full-form/form";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { ColorInput } from "@ulld/full-form/colorInput";
import { FormLabel } from "@ulld/tailwind/form";
import tinycolor from "tinycolor2";
import { Label } from "@ulld/tailwind/label";

interface ThemeColorsProps {
    theme: "dark" | "light";
}

type FormType = z.infer<typeof docTypeUISchema>;

const ThemeColors = ({ theme }: ThemeColorsProps) => {
    const names: {bg: Path<FormType>, fg: Path<FormType>} = {
        bg: `styles.${theme}.bg`,
        fg: `styles.${theme}.fg`,
    }
    const form = useFormContext<FormType>();
    const [isDefault, setDefault] = useState({
        bg: true,
        fg: true
    })
    const bg = form.watch(names.bg)
    const fg = form.watch(names.fg)
    useEffect(() => {
        let opts = ["#000", "#fff"]
        if(fg){
            opts.push(fg as string)
        }
        if(isDefault.fg && bg){
            let bgColor = tinycolor.mostReadable(bg as string, opts).toHslString()
            form.setValue(names.fg, bgColor)
        }
    }, [bg])

    return (
        <div className={"flex flex-col gap-6"}>
            <Label className={"text-base"}>{theme === "dark" ? "Dark Mode" : "Light Mode"}</Label>
            <ColorInput<FormType>
                name={names.bg}
                label="Background"
                desc={`Background color while in ${theme} mode`}
                setNotDefault={() => setDefault({...isDefault, bg: false})}
                defaultColor={theme === "light" ? "hsl(240, 100.0%, 40.2%)" : undefined}
                classes={{
                    container: theme === "light" ? "light" : undefined
                }}
            />
            <ColorInput<FormType>
                name={names.fg}
                label="Foreground"
                desc={`Foreground color while in ${theme} mode`}
                setNotDefault={() => setDefault({...isDefault, fg: false})}
                classes={{
                    container: theme === "light" ? "light" : undefined
                }}
                defaultColor="#fff"
            />
        </div>
    );
};

ThemeColors.displayName = "ThemeColors";

export default ThemeColors;
