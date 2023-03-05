import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { DeliveryInfoForm, PaymentForm } from './components/forms';
import App from './App';
import { act } from 'react-dom/test-utils';

// testing if components render in the document

// delivery details form
test('render delivery details form', () => {
  render(<DeliveryInfoForm />);
  const deliveryInfoForm = screen.getByLabelText(/delivery-details-form/i);
  expect(deliveryInfoForm).toBeInTheDocument();
});

// payment form
test('render payment form', () => {
  render(<PaymentForm />);
  const paymentForm = screen.getByLabelText(/payment-form/i);
  expect(paymentForm).toBeInTheDocument();
});

describe('Checkout', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    render(<DeliveryInfoForm onSubmit={handleSubmit} />);
  });

  it('should submit delivery info when form validation is successful', async() => {
    act(()=> {
      user.type(getFirstname(), 'John');
      user.type(getLastname(), 'Doe');
      user.type(getAddress(), '123 Main Street');
      user.type(getCity(), 'New York');
      user.type(getState(), 'NY');
      user.type(getPostcode(), '12345');
      user.type(getCountry(), 'USA');

      user.click(getButton());
    });

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main Street',
        city: 'New York',
        state: 'NY',
        postcode: '12345',
        country: 'USA'
      })
    )
  });
});

function getFirstname(){
  return screen.getByPlaceholderText(/first name[*]/i);
}

function getLastname(){
  return screen.getByPlaceholderText(/Last name[*]/i);
}

function getAddress(){
  return screen.getByPlaceholderText(/Address[*]/i);
}

function getCity(){
  return screen.getByPlaceholderText(/City[*]/i);
}

function getState(){
  return screen.getByPlaceholderText(/State/i);
}

function getPostcode(){
  return screen.getByPlaceholderText(/Postcode[*]/i);
}

function getCountry(){
  return screen.getByPlaceholderText(/Country[*]/i);
}

function getButton(){
  return screen.getByLabelText(/address-info-button/i);
}