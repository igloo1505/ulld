import Link, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";
import { createPortal } from "react-dom";

interface NavbarButtonPortalPropsA extends HTMLProps<HTMLAnchorElement> {
  children: string;
  type: "a";
}

interface NavbarButtonPortalPropsL extends LinkProps {
  children: string;
  type: "link";
}

const classes = "text-foreground hover:bg-muted/20 transition-colors duration-300 rounded";

const Comp = ({
  type,
  children,
  ...props
}: NavbarButtonPortalPropsA | NavbarButtonPortalPropsL) => {
  return type === "a" ? (
    <a {...(props as HTMLProps<HTMLAnchorElement>)} className={classes}>
      {children}
    </a>
  ) : (
    <Link {...(props as LinkProps)} className={classes}>
      {children}
    </Link>
  );
};

const NavbarButtonPortal = (
  props: NavbarButtonPortalPropsA | NavbarButtonPortalPropsL,
) => {
  let em = document.getElementById("navbar-btn-container");
  if (!em) return null;
  return createPortal(<Comp {...props} />, em);
};

NavbarButtonPortal.displayName = "NavbarButtonPortal";

export default NavbarButtonPortal;
