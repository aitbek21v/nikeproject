import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Select campaign settings",
    description: `SAVE UP TO 40%	
    Shop All Our New Markdowns
    `,
  },
  {
    label: "Create an ad group",
    description: " GET YOUR GEAR FASTER	Look for Store Pickup at Checkout",
  },
  {
    label: "Create an ad",
    description: ` MEMBERS: FREE SHIPPING ON ORDERS $50+	
    Sign Up`,
  },
];

export default function NavbarCarusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          maxWidth: 800,
          flexGrow: 1,
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper> */}
        <Box
          sx={{
            maxWidth: 300,
            width: "100%",
            position: "absolute",
            textAlign: "center",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          {steps[activeStep].description}
        </Box>
        <MobileStepper
          variant="step"
          steps={maxSteps}
          position="relative"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
