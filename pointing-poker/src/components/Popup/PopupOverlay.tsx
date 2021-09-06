import React, { PropsWithChildren, ReactElement } from "react";
import classes from "./popupOverlay.module.scss";

const PopupOverlay = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => (
  <div className={classes.overlay}>{children}</div>
);

export default PopupOverlay;
