import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import React from "react";
import AnimatedBrokenSubtitle from "./animatedBrokenSubtitle";
import NavbarButtonGroup from "./navbarButtonGroup";
import InternalReduxProvider from "#/state/provider";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div
      className={
        "absolute z-50 top-0 left-0 right-0 w-full flex flex-row justify-between items-center h-20 px-6 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }
    >
      <div className={"w-fit h-full flex flex-row justify-start items-center"}>
        <div className={"w-16 mr-4"}>
          <AnimatedUlldLogo delay={3} show={true} speed={3} />
        </div>
        <AnimatedBrokenSubtitle delay={5} />
      </div>
      <InternalReduxProvider>
        <NavbarButtonGroup />
      </InternalReduxProvider>
    </div>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;