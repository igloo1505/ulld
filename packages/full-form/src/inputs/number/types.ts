import  { ComponentProps } from 'react'
import type { Input } from '@ulld/tailwind/input'


export interface NumberInputProps {
    onChange: (n: number | string) => void
    value: number
    min?: number
    max?: number
    step: number
    initial?: number
    integerOnly?: boolean
    label?: string
    desc?: string
    decimals?: number
    inputProps?: Omit<ComponentProps<typeof Input>, "onChange" | "value">
}
