import React, { ComponentProps } from "react";
import { motion } from "framer-motion";
import { CheckIcon as CI } from "lucide-react";
import cn from "@ulld/utilities/cn";

const CheckIcon = motion(CI);

interface AnimatedCheckboxProps extends ComponentProps<typeof motion.div> { 
    classes?: {
        outerContainer?: string
        innerContainer?: string
        check?: string
    }
    checked?: boolean
}

const AnimatedCheckbox = ({classes = {}, checked, ...props}: AnimatedCheckboxProps) => {
    return (
        <motion.div
            className={
                cn("h-full flex flex-col py-3 justify-start items-center overflow-visible", classes?.outerContainer)
            }
            initial="initial"
            animate={checked ? "animate" : "initial"}
            {...props}
        >
            <motion.div
                className={
                    cn("float-left overflow-visible w-6 h-6 inline-flex flex-col justify-start items-center rounded relative bg-primary place-self-center", classes.innerContainer)
                }
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 0,
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                    },
                }}
            >
                <CheckIcon
                    className={
                        cn("stroke-white top-0 right-0 scale-150 translate-x-[6px] -translate-y-[4px]", classes.check)
                    }
                    /* initial="initial" */
                    /* whileInView={"animate"} */
                    variants={{
                        initial: {
                            pathLength: 0,
                            opacity: 0,
                            strokeWidth: 0,
                        },
                        animate: {
                            opacity: 1,
                            strokeWidth: 3,
                            pathLength: 1,
                            transition: {
                                delay: 0.5,
                            },
                        },
                    }}
                    transition={{
                        pathLength: {
                            delay: 2,
                        },
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

AnimatedCheckbox.displayName = "AnimatedCheckbox";

export default AnimatedCheckbox;
