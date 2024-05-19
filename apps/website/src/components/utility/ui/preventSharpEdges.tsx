import React from "react";
import cn from '@ulld/utilities/cn'

interface PreventSharpEdgesProps {
    className?: string
}

const PreventSharpEdges = ({className}: PreventSharpEdgesProps) => {
  return (
    <div className={cn("absolute top-0 left-0 z-10 pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]", className)} />
  );
};

PreventSharpEdges.displayName = "PreventSharpEdges";

export default PreventSharpEdges;
