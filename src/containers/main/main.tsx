import React, { useContext, useState } from "react";
import useStyles from "./mainStyles";

import { ThemeContext } from "../../store/themeContext/themeContext";

export interface Props {
  data: any;
  setData: any;
}

export default function Main(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  return (
    <div className={classes.Main}>
    </div>
  );
}
