import React, { ReactNode } from "react";
import { ComponentDemoCard } from "./componentCard";

interface ComponentDemoItemProps {
  component: ReactNode;
  children: ReactNode;
  dir: "left" | "right";
}

const ComponentDemoItem = ({
  component,
  children,
  dir,
}: ComponentDemoItemProps) => {
  return (
    <section>
      <div>{children}</div>
      <ComponentDemoCard component={component} />
    </section>
  );
};

ComponentDemoItem.displayName = "ComponentDemoItem";

export default ComponentDemoItem;
