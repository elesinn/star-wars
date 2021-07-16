import { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize, Typography } from '@material-ui/core';
import { ReviewFormData } from '../../types/FormData';
import { StepperContext } from '../stepperContext';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup.string().required('Username is required'),
  review: yup.string().required('Review is required'),
});

const ReviewFormStep = () => {
  const stepper = useContext(StepperContext);
  const initialValue: ReviewFormData = { email: '', username: '', review: '' };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={async (value, action) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        stepper.setResult(value);
        stepper.nextStep();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Typography gutterBottom variant="h5" component="h2">
            Write review for "{stepper.selectedEpisode?.title}" episode
          </Typography>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Field
            as={TextareaAutosize}
            rowsMin={10}
            id="review"
            label="Review"
            name="review"
            type="text"
            placeholder="Write review here"
            style={{ width: '100%', marginTop: '10px' }}
            value={formik.values.review}
            onChange={formik.handleChange}
            required
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit Review
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewFormStep;
