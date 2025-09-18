import "./styles.css";
import React, { useState } from "react";
import { STEPS } from "./StepsConfig";

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [processDone, setProcessDone] = useState(false);
  const maxlength = STEPS.length;

  const onChangeStep = () => {
    if (activeStep > maxlength + 1) return;
    setActiveStep((prev) => {
      setProcessDone(true);
      return prev + 1;
    });
  };

  return (
    <div>
      <h1>Multi Stepper</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          textAlign: "center",
        }}
      >
        {STEPS.map((step, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: `${
                    activeStep > index + 1 ? "lightblue" : "pink"
                  }`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {index + 1}
              </div>
              <div>{step.name}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "40px", textAlign: "center", width: "50%" }}>
        <button onClick={onChangeStep} disabled={activeStep === maxlength + 1}>
          {activeStep === maxlength ? "Finish" : "Next"}
        </button>
      </div>
      <div
        style={{ marginTop: "40px", textAlign: "center", width: "50%" }}
        hidden={!processDone}
      >
        Yayyyyyy Process doneee!!!!!
      </div>
    </div>
  );
}
