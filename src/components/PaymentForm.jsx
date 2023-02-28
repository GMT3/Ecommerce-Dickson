import * as React from "react";
import PropTypes from "prop-types";

// import mock data
import { product } from '../_mock';

// PaymentForm
export default function PaymentForm(){

  const onSubmit = (event) => {
    event.preventDefault();
  };

    return(
      <div className="min-h-screen m-8">
        <div className="md:grid md:grid-cols-3 md:gap-6 w-full">

          {/* Shopping Basket */}
          <div className="mt-5 md:col-span-1 sm:col-span-3 md:mt-0">
            <ItemsList items={[1,2,3,4,5]} />
          </div>

          {/* Main payment form */}
          <div className="mt-5 md:col-span-2 sm:col-span-3 md:mt-0">
            <form noValidate onSubmit={onSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="jondoe@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="card-number"
                          id="card-number"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                        {"Expiration Data (MM/YY)"}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="expiry-date"
                          id="expiry-date"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
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
                    MWK200,000.00
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
                    <p className="text-sm uppercase font-medium text-gray-900 truncate">
                    Total: 
                    </p>
                    <div className="flex-grow" />
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    MWK236,400.00
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Process Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

// Shopping Basket - Items List
function ItemsList({items = []}){

  return(
    <React.Fragment>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-2 sm:px-6 sm:py-3">
          
          <ul className="overflow-auto w-full max-h-96 divide-y divide-gray-200 dark:divide-gray-300">
            {
              items.map(function(item){
                return(
                  <Item key={item} />
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
            MWK200,000.00
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
function Item({item}){
  const [quantity, setQuantity] = React.useState(1);

  // function for changing quantity value
  const changeQuantity = (quantityOffset) => {
    let _quantity = quantityOffset;
    setQuantity(_quantity <= 1 ? 1 : _quantity);
  }

  return(
    <li className="py-3 sm:pb-4 even:bg-gray-50">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
            <img className="w-24 h-24 rounded" src={product.img} alt={"Nike Shoe"} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center min-w-0 mb-2">
            <p className="text-sm font-medium text-gray-900 truncate">
            {"Nike Air"}
            </p>
            <div className="flex-grow" />
            <p className="text-md text-gray-700 truncate dark:text-gray-400 mr-2">
            {"MWK90,000.00"} 
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
                  <svg className="h-5 w-5" viewBox="-0.5 1.5 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
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
                  <svg className="h-5 w-5" viewBox="-0.5 1.5 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
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