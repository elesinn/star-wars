import { StepperContext } from '../stepperContext';
import { useContext } from 'react';
import { Container, TextField, Typography } from '@material-ui/core';

export const ResultStep = () => {
  const stepper = useContext(StepperContext);
  return (
    <Container>
      <Typography gutterBottom variant="h5" component="h2">
        Your review for "{stepper.selectedEpisode?.title}" episode:
      </Typography>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Username"
        type="text"
        value={stepper.result?.username}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={stepper.result?.email}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="review"
        name="review"
        style={{ width: '100%', marginTop: '10px' }}
        value={stepper.result?.review}
        InputProps={{
          readOnly: true,
        }}
      />
    </Container>
  );
};
