import React, {
    CSSProperties,
    ComponentProps,
    useRef,
    useState,
    useEffect,
} from "react";
import NextImage, { ImageProps } from "next/image";
import { MotionProps, motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";
import { MathUtils } from "three";
import { cn } from "@ulld/utilities/cn";

const Image = motion(NextImage);

type ImageMotion = MotionProps & ImageProps;

type TransitionName = "show";

interface ImageWithBackgroundProps extends ImageMotion {
    pad?: { x: number; y: number; type: "percent" | "padding" | "absolute" };
    rotate?: number;
    show: boolean;
    transitionName?: TransitionName;
    containerClasses?: string;
    delay?: number;
    radius?: number;
}

export const ImageWithBackground = ({
    src,
    pad = { x: 2, y: 2, type: "percent" },
    rotate = MathUtils.randFloatSpread(Math.PI / 6),
    show = false,
    transitionName = "show",
    containerClasses,
    delay = 500,
    radius: _radius = Math.random() * 120,
    onClick,
    ...props
}: ImageWithBackgroundProps) => {
    const ref = useRef<HTMLElement>(null!);
    const bg = useRef<HTMLDivElement>(null!);
    const [styleState, setStyleState] = useState<CSSProperties | null>(null);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [hasSet, setHasSet] = useState(false);
    const vp = useViewport();
    const handleStyles = () => {
        const rect = ref.current.getBoundingClientRect();
        setStyleState({
            width:
                pad.type === "absolute"
                    ? `${pad.x}px`
                    : `${rect.width + (pad.type === "percent" ? (rect.width * pad.x) / 100 : pad.x)}px`,
            height:
                pad.type === "absolute"
                    ? `${pad.y}px`
                    : `${rect.height + (pad.type === "percent" ? (rect.height * pad.y) / 100 : pad.y)}px`,
        });
        setHasSet(true);
    };
    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (show) {
            if (!hasSet) {
                const _timer = setTimeout(handleStyles, delay);
                timer.current = _timer;
            } else {
                handleStyles();
            }
        } else {
            setStyleState(null);
            setHasSet(false);
        }
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [vp, show]);

    return (
        <div
            className={cn(
                "w-full h-full flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
                !show && "-z-10",
                containerClasses,
            )}
            onClick={onClick}
        >
            {(vp?.window.width && vp.window.width > 768) && <motion.div
                className={
                    "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] -z-[10]"
                }
                style={{
                    background:
                        "radial-gradient(circle, rgba(2,0,36,1) 66%, rgba(9,9,121,1) 94%)",
                    width: styleState?.width || "0px",
                    height: styleState?.height || "0px",
                }}
                ref={bg}
                layout
                initial={"hide"}
                animate={Boolean(show && styleState) ? "show" : "hide"}
                variants={{
                    show: {
                        scale: 1,
                        rotateZ: `${rotate}rad`,
                        x: "-50%",
                        y: "-50%",
                        borderRadius: `${_radius}px`,
                        opacity: 0.5,
                        transition: {
                            type: "spring",
                            borderRadius: {
                                delay: 1,
                                duration: 1,
                            },
                        },
                    },
                    hide: {
                        scale: 0,
                        opacity: 0,
                        rotateZ: `${rotate}rad`,
                        borderRadius: `${_radius}px`,
                        x: "-50%",
                        y: "-50%",
                    },
                }}
            />}
            <Image
                src={src}
                ref={ref}
                onLoadingComplete={handleStyles}
                initial={"hide"}
                animate={show ? `${transitionName}` : "showExample"}
                variants={{
                    hide: {
                        y: 500,
                        scale: 0,
                        opacity: 0,
                        boxShadow: "#000 0px 0px 0px 0px",
                    },
                    show: {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        boxShadow:
                            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                        transition: {
                            bounce: 0,
                            boxShadow: {
                                delay: 1.5,
                            },
                        },
                    },
                }}
                {...props}
                className={cn(
                    "border border-border rounded-md max-h-full max-w-full group-[.flow]/feature:w-auto group-[.flow]/feature:h-full group-[.stack]/feature:h-auto group-[.stack]/feature:w-fit object-contain",
                    props.className,
                )}
            />
        </div>
    );
};

ImageWithBackground.displayName = "ImageWithBackground";
