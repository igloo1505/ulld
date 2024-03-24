"use client"
import { TERTIARY_TOGGLE } from '@ulld/database/internalDatabaseTypes'
import React from 'react'
import { Button } from '@ulld/tailwind/button'
import { AsteriskIcon, MinusIcon, PlusIcon } from 'lucide-react'
import clsx from 'clsx'



interface TertiaryToggleProps extends Omit<React.DetailsHTMLAttributes<HTMLDivElement>, "value" | "onChange"> {
    value: TERTIARY_TOGGLE
    onChange: (val: TERTIARY_TOGGLE) => void
    small?: boolean
}

const TertiaryToggle = ({ value, onChange, small }: TertiaryToggleProps) => {
    const iconClasses = "h-4 w-4"
    return (
        <Button
            variant={value === "on" ? undefined : value === "off" ? "destructive" : "outline"}
            size="icon"
            onClick={() => {
                onChange(value === "on" ? "off" : value === "partial" ? "on" : "partial")
            }}
            className={clsx(small && "w-4 h-4 rounded-sm")}
        >
            {value === "on" && <PlusIcon className={iconClasses} />}
            {value === "off" && <MinusIcon className={iconClasses} />}
            {value === "partial" && <AsteriskIcon className={iconClasses} />}
        </Button>
    )
}


TertiaryToggle.displayName = "TertiaryToggle"


export default TertiaryToggle;
