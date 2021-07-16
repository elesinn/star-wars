import { createContext, useState } from 'react';
import { Film } from '../types/Films';
import { ReviewFormData } from '../types/FormData';

interface StepperController {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  selectedEpisode?: Film;
  setSelectedEpisode: (episdoe: Film | undefined) => void;
  result?: ReviewFormData;
  setResult: (result: ReviewFormData) => void;
}

export const StepperContext = createContext<StepperController>(
  {} as StepperController,
);

export const StepperProvider: React.FunctionComponent = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState<Film>();
  const [result, setResult] = useState<ReviewFormData>();

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        nextStep,
        prevStep,
        selectedEpisode,
        setSelectedEpisode,
        result,
        setResult,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
