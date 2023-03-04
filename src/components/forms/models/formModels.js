const formFields = {
    formField: {
      firstName: {
        name: 'firstName',
        label: 'First name*',
        requiredErrorMsg: 'First name is required'
      },
      lastName: {
        name: 'lastName',
        label: 'Last name*',
        requiredErrorMsg: 'Last name is required'
      },
      email: {
        name: 'email',
        label: 'Email*',
        requiredErrorMsg: 'Email is required'
      },
      address: {
        name: 'address',
        label: 'Address*',
        requiredErrorMsg: 'Address is required'
      },
      city: {
        name: 'city',
        label: 'City*',
        requiredErrorMsg: 'City is required'
      },
      state: {
        name: 'state',
        label: 'State',
        requiredErrorMsg: 'State is required'
      },
      postcode: {
        name: 'postcode',
        label: 'Postcode*',
        requiredErrorMsg: 'Postcode is required',
        invalidErrorMsg: 'Postcode is not valid (e.g. 70000)'
      },
      country: {
        name: 'country',
        label: 'Country*',
        requiredErrorMsg: 'Country is required'
      },
      useAddressForPaymentDetails: {
        name: 'useAddressForPaymentDetails',
        label: 'Use this address for payment details'
      },
      nameOnCard: {
        name: 'nameOnCard',
        label: 'Name on card*',
        requiredErrorMsg: 'Name on card is required'
      },
      cardNumber: {
        name: 'cardNumber',
        label: 'Card number*',
        requiredErrorMsg: 'Card number is required',
        invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiration date*',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      cvv: {
        name: 'cvv',
        label: 'CVV*',
        requiredErrorMsg: 'CVV is required',
        invalidErrorMsg: 'CVV is invalid (e.g. 357)'
      }
    }
  };

  export default formFields;