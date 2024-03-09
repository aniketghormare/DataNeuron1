import React from "react";
import "./App.css";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";

export default function App() {
  return (
    <Resize>
      <ResizeHorizon></ResizeHorizon>

      <ResizeHorizon minWidth="5px">
        <Resize>
          <ResizeVertical height="80%">
            <Resize handleWidth="3px">
              <ResizeHorizon width="400px" minWidth="10px">
              CompOne
              </ResizeHorizon>

              <ResizeHorizon minWidth="5px">CompTwo</ResizeHorizon>
            </Resize>
          </ResizeVertical>

          <ResizeVertical minHeight="5px">CompThree</ResizeVertical>
        </Resize>
      </ResizeHorizon>
    </Resize>
  );
}
