import { Slider as RadixSlider } from "#/components/shad/ui/slider"
import { cn } from "#/utils"


type SliderProps = React.ComponentProps<typeof RadixSlider>

const Slider = ({ className, ...props }: SliderProps) => {
    return (
        <RadixSlider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
        />
    )
}

export default Slider
