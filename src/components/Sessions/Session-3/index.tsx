import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Collapse } from "@mui/material";

import { ExpandMore } from "../../../utils/ExpandMore";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Session3() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className="w-full px-5">
      <div onClick={handleExpandClick} className="flex justify-center">
        <button className="bg-[#3736FC] font-Montserrat mb-4 text-md text-white px-4 py-3 border-b-4 border-red-500 font-bold uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-lg shadow-black/30">
          Conheça minha trajetória
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon sx={{ fontSize: 30, color: "#FFF" }} />
          </ExpandMore>
        </button>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Próximo</Typography>
                  ) : null
                }
              >
                <p className="text-left mt-2 font-bold text-2xl leading-tight text-[#2C2C2C]">
                  {step.label}
                </p>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div className="flex gap-3 mt-3">
                    <button
                      className="bg-[#3736FC] font-Montserrat text-xs text-white px-4 py-3 border-b-4 border-red-500 font-bold uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-lg shadow-black/30"
                      onClick={handleNext}
                    >
                      {index === steps.length - 1 ? "Terminou" : "Continuar"}
                    </button>
                    <button
                      className="bg-slate-400 font-Montserrat text-xs text-white px-4 py-3 border-b-4 border-slate-700 font-bold uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-lg shadow-black/30"
                      disabled={index === 0}
                      onClick={handleBack}
                    >
                      Voltar
                    </button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Collapse>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Você leu toda a minha trajetória!</Typography>
          <button
            className="bg-[#3736FC] font-Montserrat text-xs text-white px-4 py-3 border-b-4 border-red-500 font-bold uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-lg shadow-black/30"
            onClick={handleReset}
          >
            Ler novamente
          </button>
        </Paper>
      )}
    </Box>
  );
}
