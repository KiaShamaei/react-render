import React from "react";

import '../App.css';
import {BounceLoader , BarLoader , BeatLoader } from "react-spinners"
import { css } from '@emotion/react';
const ReactSpinners = () => {
	const loaderCss = css`margin-top : 25px ; margin-bottom:25px;`
  return (
    <div className="App">
      <BarLoader loading css={loaderCss} color="crimson" />
      <BounceLoader loading />
      <BeatLoader loading />
    </div>
  );
};

export default ReactSpinners;
