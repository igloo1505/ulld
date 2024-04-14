import React from "react";

interface SanboxPageProps {}

const SanboxPage = (props: SanboxPageProps) => {
  return (
    <div
      className={
        "w-full h-full flex flex-col justify-center items-center gap-6"
      }
    >
      <h1 className={"text-5xl font-bold text-foreground"}>Sandbox</h1>
    </div>
  );
};

SanboxPage.displayName = "SanboxPage";

export default SanboxPage;
