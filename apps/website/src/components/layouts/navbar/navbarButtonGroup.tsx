"use client";
import React from "react";
import { RootState } from "#/state/store";
import { connect } from "react-redux";
import { InitialCoreState } from "#/state/initialState/core";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@ulld/tailwind/button";

const Link = motion(NextLink);

const connector = connect((state: RootState, props: any) => ({
  buttons: state.core.navbarButtons,
  props: props,
}));

interface NavbarButtonGroupProps {
  buttons: InitialCoreState["navbarButtons"];
}

const NavbarButtonGroup = connector(({ buttons }: NavbarButtonGroupProps) => {
  return (
    <div
      id="navbar-btn-container"
      className={
        "w-full h-full flex flex-row justify-end items-center gap-4 flex-grow pr-8"
      }
    >
      {buttons.map((a, i) => {
        return (
          <Link
            className={"text-muted-foreground hover:text-foreground/90 transition-colors"}
            href={a.href}
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            /* whileHover={{ */
            /*   backgroundColor: "hsl(var(--muted)/0.2)", */
            /* }} */
            transition={{
              delay: buttons.length - i - 1 * 0.15,
            }}
          >
            {a.label}
          </Link>
        );
      })}
    </div>
  );
});

NavbarButtonGroup.displayName = "NavbarButtonGroup";

export default NavbarButtonGroup;
