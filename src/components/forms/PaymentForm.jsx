import * as React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

import ErrorLabel from "./ErrorLabel";
import validationSchema from './models/validationSchema';
import checkoutFormModel from './models/formModels';

// import mock data
import { cart } from '../../_mock';

const  { formField } = checkoutFormModel;

export default function PaymentForm({handleNext, handleBack}){
    const { email, cardNumber, expiryDate, cvv } = formField;
    const paymentValidationSchema = validationSchema[1];
    const [cartItems, setCartItems] = React.useState(() => cart.map(item => { 
      return { ...item, quantity: 1, total: item.price } 
    }));
  
    const total = React.useMemo(() => cartItems.reduce((_total, cartitem) => _total + cartitem.total, 0),[cartItems])

    return(
        <div className="md:grid md:grid-cols-3 md:gap-6 w-full">

            {/* Shopping Basket */}
            <div className="mt-5 md:col-span-1 sm:col-span-3 md:mt-0">
                <ItemsList items={cartItems} setCartItems={setCartItems} total={total} />
            </div>

            {/* Main payment form */}
            <div className="mt-5 md:col-span-2 sm:col-span-3 md:mt-0">
                <Formik
                    initialValues={{ 
                        email: "",
                        cardNumber: "",
                        expiryDate: "",
                        cvv: ""
                    }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        console.log({values});
                        handleNext();
                    }}
                    validationSchema={paymentValidationSchema}
                >
                    {props => {
                        const {
                            values,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        } = props;

                        return(
                            <form id="checkoutForm" aria-label="payment-form" onSubmit={handleSubmit}>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">

                                    <div className="bg-gray-50 format-headings format-h2:strong px-4 py-3 sm:px-6">
                                        <h2 className=" text-lg font-bold">You're almost there. Make the payment</h2>
                                    </div>

                                    <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email Address
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    id="email-address"
                                                    type="email"
                                                    role="textbox"
                                                    name={email.name}
                                                    placeholder={email.label}
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`block w-full flex-1 rounded-md border-gray-300 ${errors.email ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                />
                                            </div>
                                            {errors.email && <ErrorLabel label={errors.email}/>}
                                        </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                            Card Number
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    id="card-number"
                                                    type="text"
                                                    role="textbox"
                                                    name={cardNumber.name}
                                                    value={values.cardNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`block w-full flex-1 rounded-md border-gray-300 ${errors.cardNumber ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    placeholder={cardNumber.label}
                                                />
                                            </div>
                                            {errors.cardNumber && <ErrorLabel label={errors.cardNumber}/>}
                                        </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                                {"Expiration Date (MM/YY)"}
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        id="expiry-date"
                                                        type="month"
                                                        role="textbox"
                                                        min={new Date()}
                                                        max={new Date("2025/12/31")}
                                                        name={expiryDate.name}
                                                        placeholder={expiryDate.label}
                                                        value={values.expiryDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.expiryDate ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.expiryDate && <ErrorLabel label={errors.expiryDate}/>}
                                        </div>
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                            CVV
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    id="cvv"
                                                    type="text"
                                                    role="textbox"
                                                    name={cvv.name}
                                                    placeholder={cvv.label}
                                                    value={values.cvv}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`block w-full flex-1 rounded-md border-gray-300 ${errors.cvv ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                />
                                            </div>
                                            {errors.cvv && <ErrorLabel label={errors.cvv}/>}
                                        </div>
                                        </div>
                                    </div>

                                    <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="flex min-w-0 mt-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                            Subtotal: 
                                            </p>
                                            <div className="flex-grow" />
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {Number(total).toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                            })}
                                            </p>
                                        </div>
                                        <div className="flex min-w-0 mt-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                            Tax: 
                                            </p>
                                            <div className="flex-grow" />
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            MWK36,400.00
                                            </p>
                                        </div>
                                        <div className="flex min-w-0 mt-4">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                            Total: 
                                            </p>
                                            <div className="flex-grow" />
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            MWK236,400.00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 text-right sm:px-6">
                                      <button
                                        role="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={handleBack}
                                      >
                                        Back
                                      </button>
                                      <button
                                        type="submit"
                                        role="button"
                                        disabled={isSubmitting}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                      >
                                        Place Order
                                      </button>
                                    </div>

                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </div>
            
        </div>
    );
}

// Shopping Basket - Items List
function ItemsList({items = [], setCartItems, total}){

  return(
    <React.Fragment>
      <div aria-label="cart-menu" className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="bg-gray-50 format-headings format-h2:strong px-4 py-3 sm:px-6">
            <h2 className=" text-lg font-bold">Order Summery</h2>
        </div>

        <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

        <div className="space-y-6 bg-white px-4 py-2 sm:px-6 sm:py-3">
          
          <ul className="overflow-auto w-full max-h-96 divide-y divide-gray-200 dark:divide-gray-300">
            {
              items.map(function(item, index){
                return(
                  <Item key={index} item={item} setCartItems={setCartItems} />
                )
              })
            }
          </ul>

        </div>

        <div className="space-y-3 bg-white px-4 py-2 sm:px-6 sm:py-3">
          <div className="flex min-w-0">
            <p className="text-sm uppercase font-medium text-gray-900 truncate">
            Total: 
            </p>
            <div className="flex-grow" />
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {Number(total).toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Clear Basket
          </button>
        </div>

      </div>
    </React.Fragment>
  );
}

ItemsList.prototype = {
  items: PropTypes.array.isRequired
}

// Item
function Item({item, setCartItems}){
  const [quantity, setQuantity] = React.useState(item.quantity);

  // function for changing quantity value
  const changeQuantity = (quantityOffset) => {
    const _quantity = quantityOffset;
    const finalQuantity = _quantity <= 1 ? 1 : _quantity
    setQuantity(finalQuantity);
    setCartItems((items) => {
      return items.map((_item) => {
        if(_item.id === item.id){
          _item = { ..._item, quantity: finalQuantity, total: _item.price * finalQuantity };
        }
        return _item;
      })
    });
  }

  return(
    <li aria-label="cart-item" className="py-3 sm:pb-4 even:bg-gray-50">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
            <img className="w-24 h-24 rounded" src={item.image_url} alt={item.name} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center min-w-0 mb-2">
            <p className="text-sm font-medium text-gray-900 truncate">
            {item.name}
            </p>
            <div className="flex-grow" />
            <p className="text-md text-gray-700 truncate dark:text-gray-400 mr-2">
            {Number(item.total).toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })} 
            </p>
          </div>
          <div className="flex items-center min-w-0 mr-2">
            <p className="text-md text-gray-700 truncate dark:text-gray-400 mr-2">
              Quantity: 
            </p>
            <div className="flex-grow" />
            <div className="flex items-center min-w-0">
              <button 
                className="h-6 w-6 rounded-md bg-gray-300 hover:bg-gray-500 text-white"
                onClick={(e) => changeQuantity(quantity - 1)}
              >
                  <svg className="h-5 w-5" viewBox="-0.5 1.5 20 20" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
              </button>
              <div className="mx-2">
                <span className="">{quantity}</span>
              </div>
              <button 
                className="h-6 w-6 rounded-md bg-gray-300 hover:bg-gray-500 text-white"
                onClick={(e) => changeQuantity(quantity + 1)}
              >
                  <svg className="h-5 w-5" viewBox="-0.5 1.5 20 20" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
              </button>
            </div>
          </div>
          <div className="flex min-w-0 divide-x-2 mt-2">
            <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600">
              Edit
            </button>
            <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}