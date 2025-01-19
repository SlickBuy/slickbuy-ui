import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import Cart from './Cart';
import { useCallback, useState } from 'react';
import fetchService from '@/api/fetch-service';

const steps = ['Количка', 'Адрес', 'Преглед'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const handleChange = useCallback(
    (event: any) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );
  const handleSubmit = useCallback(
    async () => {
      try {
        await fetchService.post('/order/create', values);
      } catch (error) {
        console.error('POST Error:', error);
      }
    },
    [values]
  );

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Cart />;
      case 1:
        return <AddressForm handleChange={handleChange}/>;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep === steps.length - 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Поръчка
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Благодарим ви за поръчката.
              </Typography>
              <Typography variant="subtitle1">
                Вашият номер на поръчка е #2001539.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Поръчай' : 'Напред'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
