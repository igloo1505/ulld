import { motion } from "framer-motion";
import NextLink from "next/link";
import { ComponentProps } from "react";


export const MotionLink = motion(NextLink)


export type MotionLinkProps = ComponentProps<typeof MotionLink>
