"use client";
import React, { HTMLProps } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface BackdropProps extends HTMLProps<HTMLDivElement> {
  open?: boolean;
  openEmId?: string;
}

type T = {
  setDataOpenId: string;
  dataProperty?: string;
  onClose?: never;
};

type J = {
  onClose: () => void;
  setDataOpenId?: never;
  dataProperty?: never;
};

const BackdropComp = ({
  open,
  onClose,
  setDataOpenId,
  dataProperty = "data-state",
  ...props
}: BackdropProps & (T | J)) => {
  const handleClick = () => {
    if (onClose) {
      return onClose();
    }
    document
      .getElementById(setDataOpenId)
      ?.setAttribute(dataProperty, "closed");
  };
  return (
    <div
      {...props}
      className={clsx(
        "origin-center w-screen h-screen fixed top-0 left-0 scale-0 opacity-0 bg-background/60 transition-opacity duration-300 data-[state=open]:scale-100 data-[state=open]:opacity-100 group-[.backdropOpen]/body:scale-100 group-[.backdropOpen]/body:opacity-100 z-40",
        open && "scale-100 opacity-100",
        props.className,
      )}
      onClick={handleClick}
    />
  );
};

const Backdrop = (props: BackdropProps & (T | J)) => {
  return createPortal(<BackdropComp {...props} />, document.body);
};

Backdrop.displayName = "Backdrop";

export default Backdrop;
