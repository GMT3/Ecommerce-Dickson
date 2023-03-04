import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './formModels';
const {
  formField: {
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    postcode,
    country,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

// Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards
const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

const formValidation = [
    Yup.object().shape({
      [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
      [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
      [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
      [city.name]: Yup.string()
        .nullable()
        .required(`${city.requiredErrorMsg}`),
      [state.name]: Yup.string()
        .nullable()
        .required(`${state.requiredErrorMsg}`),
      [postcode.name]: Yup.string()
        .required(`${postcode.requiredErrorMsg}`)
        .test(
          'len',
          `${postcode.invalidErrorMsg}`,
          val => val && val.length === 5
        ),
      [country.name]: Yup.string()
        .nullable()
        .required(`${country.requiredErrorMsg}`)
    }),
    Yup.object().shape({
      [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
      [cardNumber.name]: Yup.string()
        .required(`${cardNumber.requiredErrorMsg}`)
        .matches(visaRegEx, cardNumber.invalidErrorMsg),
      [expiryDate.name]: Yup.string()
        .nullable()
        .required(`${expiryDate.requiredErrorMsg}`)
        .test('expDate', expiryDate.invalidErrorMsg, val => {
          if (val) {
            const startDate = new Date();
            const endDate = new Date(2050, 12, 31);
            if (moment(val, moment.ISO_8601).isValid()) {
              return moment(val).isBetween(startDate, endDate);
            }
            return false;
          }
          return false;
        }),
      [cvv.name]: Yup.string()
        .required(`${cvv.requiredErrorMsg}`)
        .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
    })
  ];

  export default formValidation;