import * as React from 'react';
import { DeliveryInfoForm, PaymentForm } from './forms';
import Stepper from './Stepper';
import Step from './Step';

const steps = ["Delivery Address", "Payment Details"];

function getStepContent(step, handleBack, handleNext) {
  switch (step) {
    case 0:
      return <DeliveryInfoForm handleBack={handleBack} handleNext={handleNext} />;
    case 1:
      return <PaymentForm handleBack={handleBack} handleNext={handleNext} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    const step = activeStep <= 0 ? activeStep : 1;
    setActiveStep((prevActiveStep) => prevActiveStep - step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="min-h-screen m-8">

      {/* Stepper Component */}
      <Stepper>
        {
          steps.map((step, index) => (
            <Step key={index} active={activeStep === index && true}>
                {step}
            </Step>
          ))
        }
      </Stepper>

      {activeStep === steps.length ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Thank you for your order!
          </h1>
          <p className="mb-4 text-sm text-gray-500">
            Your order has been received and will be delivered shortly.
          </p>
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">

          {/* Switch function displays the active step */}
          {getStepContent(activeStep, handleBack, handleNext)}

          {/* Next back buttons to control the stepper */}
          {/* <div className="flex justify-between items-center mt-4 w-full p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <button
              disabled={activeStep <= 0 ? true : false}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleNext}
            >
              Next
            </button>
          </div> */}
        </div>
      )}

    </div>
  );
}