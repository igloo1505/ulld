import React from 'react'
import { Checkbox } from "@ulld/tailwind/base"


interface LabeledCheckboxProps extends React.ComponentPropsWithRef<typeof Checkbox> {
    label: string
    desc?: string
}

export const LabeledCheckbox = ({ label, desc, ...props }: LabeledCheckboxProps) => {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                {desc && <p className="text-sm text-muted-foreground">
                    {desc}
                </p>}
            </div>
        </div>
    )
}


LabeledCheckbox.displayName = "LabeledCheckbox"


