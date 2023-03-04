import { render, screen } from '@testing-library/react';
import { DeliveryInfoForm, PaymentForm, Stepper, Step } from './components';
import App from './App';

// testing if components render in the document

// stepper
test('renders stepper container', () => {
  render(<App />);
  const stepperElement = screen.getByLabelText(/stepper-container/i);
  expect(stepperElement).toBeInTheDocument();
});

test('renders stepper item', () => {
  render(<App />);
  const stepperItemElement = screen.getAllByLabelText(/stepper-item/i);
  expect(stepperItemElement).toHaveLength(2);
});

// cart items
test('renders stepper cart-items', () => {
  render(<App />);
  const stepperItemElement = screen.getAllByLabelText(/stepper-item/i);
  expect(stepperItemElement).toHaveLength(2);
});

// delivery details form
test('render delivery details form', () => {
  render(<DeliveryInfoForm />);
  const deliveryInfoFormElement = screen.getByLabelText(/delivery-details-form/i);
  expect(deliveryInfoFormElement).toBeInTheDocument();
});

// payment form
test('render payment form', () => {
  render(<PaymentForm />);
  const paymentFormElement = screen.getByLabelText(/payment-form/i);
  expect(paymentFormElement).toBeInTheDocument();
});

describe('Checkout', () => {
  beforeEach(() => {
    render(<App />);
  });
});