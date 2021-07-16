import React, { Suspense, useContext } from 'react';
import { EpisodesStep } from './steps/episodesStep/episodesStep';
import { ResultStep } from './steps/resultStep';
import { StepperContext } from './stepperContext';
import { Skeleton } from '@material-ui/lab';
const ReviewFormStep = React.lazy(() => import('./steps/reviewFormStep'));

export const FilmStepper = () => {
  const stepper = useContext(StepperContext);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <EpisodesStep />;
      case 1:
        return (
          <Suspense fallback={<Skeleton height={400} />}>
            <ReviewFormStep />
          </Suspense>
        );
      case 2:
        return <ResultStep />;
      default:
        return 'Unknown step';
    }
  }

  return <div>{getStepContent(stepper.activeStep)}</div>;
};
