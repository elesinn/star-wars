import { Container } from '@material-ui/core';
import { FilmStepper } from './components/filmStepper';
import { StepperProvider } from './components/stepperContext';

function App() {
  return (
    <Container maxWidth="md">
      <StepperProvider>
        <FilmStepper />
      </StepperProvider>
    </Container>
  );
}

export default App;
