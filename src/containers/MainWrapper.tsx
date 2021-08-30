import React, { useState, useEffect } from "react";

import Navbar from "./navbar/navbar";
export interface Props {}
export default function MainWrapper(props: Props) {
  
  return (
    <div className="Main">
      <Navbar></Navbar>
    </div>
  );
}
