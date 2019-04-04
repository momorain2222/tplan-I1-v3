import React from "react";
import { Icon, Grid, Step } from "semantic-ui-react";

const Stepper = () => (
  <div className="ui three column grid">
    <div className="column">
      <div className="ui fluid vertical steps">
        <div className="active step">
          <i aria-hidden="true" className="truck icon" />
          <div className="content">
            <div className="title">Step 1 </div>
            <div className="description">Choose your shipping options</div>
          </div>
        </div>
        <div className="active step">
          <i aria-hidden="true" className="dollar icon" />
          <div className="content">
            <div className="title">Step 2 </div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stepper;
