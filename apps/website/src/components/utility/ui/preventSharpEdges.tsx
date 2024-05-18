import React from "react";

interface PreventSharpEdgesProps {}

const PreventSharpEdges = (props: PreventSharpEdgesProps) => {
  return (
    <div className="absolute z-10 pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]" />
  );
};

PreventSharpEdges.displayName = "PreventSharpEdges";

export default PreventSharpEdges;
