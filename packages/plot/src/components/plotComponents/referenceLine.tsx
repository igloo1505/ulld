import React, { ComponentProps } from "react";
import { ReferenceLine as RL } from "recharts";
import { z } from "zod";

interface ReferenceLineProps extends ComponentProps<typeof RL> { }

const referenceLinePlotSchema = z.object({});

export const ReferenceLine = ({ ...props }: ReferenceLineProps) => {
    return <RL {...props} />;
};

ReferenceLine.displayName = "ReferenceLine";
