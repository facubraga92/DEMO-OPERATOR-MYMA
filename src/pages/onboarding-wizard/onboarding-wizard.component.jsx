import { Grid } from "@mui/material";
import { useWizard, Wizard } from "react-use-wizard";
import { useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import ContainerRounded from "../../styled-components/container-rounded";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import { ReactComponent as CloseSquare } from "../../assets/images/close-square.svg";
import { ReactComponent as OnBoardingPageOne } from "../../assets/images/onboarding-10.svg";
import { ReactComponent as OnBoardingPageTwo } from "../../assets/images/onboarding-11.svg";
import { ReactComponent as OnBoardingPageThree } from "../../assets/images/onboarding-12.svg";
import { ReactComponent as OnBoardingPageFour } from "../../assets/images/onboarding-13.svg";
import { ReactComponent as OnBoardingPageFive } from "../../assets/images/onboarding-14.svg";
import { ReactComponent as BackIcon } from "../../assets/images/back-icon-orange.svg";
import { useHasBeen } from "../../hooks/useHasBeen";
import { gridFooterStyles } from "../welcome/welcome.component";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const steps = [
  { id: 0, image: <OnBoardingPageOne /> },
  { id: 1, image: <OnBoardingPageTwo /> },
  { id: 2, image: <OnBoardingPageThree /> },
  { id: 3, image: <OnBoardingPageFour /> },
  { id: 4, image: <OnBoardingPageFive /> },
];

const gridFlexBasicStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
};

const backIconStyles = {
  zIndex: 1,
  margin: "1rem",
  marginLeft: 0,
  left: "1rem",
  top: "1rem",
  position: "absolute",
};
const Footer = ({ steps }) => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Onboarding Wizard",
    });
  }, []);

  const { nextStep, previousStep, activeStep, isLastStep, isFirstStep } =
    useWizard();
  const [, setHasBeenState] = useHasBeen();

  const navigate = useNavigate();

  const closeWizard = () => {
    setHasBeenState("true");
    navigate("/home");
  };

  const handleClick = () => {
    if (isLastStep) return closeWizard();

    nextStep();
  };

  const handleBack = () => {
    if (isFirstStep) return navigate(-1);

    previousStep();
  };

  return (
    <>
      <BackIcon style={backIconStyles} onClick={handleBack} />
      <Grid item xs={12} sx={gridFlexBasicStyles}>
        {steps.map((_step, ix) => (
          <CircleIcon
            key={ix}
            sx={{
              fontSize: 10,
              margin: "5px",
              fill: ix === activeStep ? "black" : "grey",
            }}
          />
        ))}
      </Grid>
      <Grid item xs={12} sx={{ ...gridFooterStyles, marginBottom: "2.7rem" }}>
        <CustomizedButtons label={"Siguiente"} handleClick={handleClick}>
          <ArrowRight />
        </CustomizedButtons>
        <CustomizedButtons
          sx={{ fontWeight: 500 }}
          color="buttonGrey"
          label={"Omitir intro"}
          variant="outlined"
          handleClick={() => {
            navigate("/home");
          }}
        >
          <CloseSquare />
        </CustomizedButtons>
      </Grid>
    </>
  );
};

const OnboardingWizard = () => {
  return (
    <ContainerRounded bgColor="beige">
      <Grid container>
        <Wizard startIndex={0} footer={<Footer steps={steps} />}>
          {steps.map((step) => (
            <Grid
              key={step.id}
              item
              xs={12}
              sx={{
                ...gridFlexBasicStyles,
                alignItems: "center",
              }}
            >
              {step.image}
            </Grid>
          ))}
        </Wizard>
      </Grid>
    </ContainerRounded>
  );
};

export default OnboardingWizard;
