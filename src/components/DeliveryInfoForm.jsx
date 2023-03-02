import * as React from "react";

export default function DeliveryInfoForm(){

    const onSubmit = (event) => {
      event.preventDefault();
    };

    return(
        <div className="flex w-full content-center">
            <div className="md:w-1/2 sm:w-full w-full mx-auto">
                <form noValidate onSubmit={onSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="bg-gray-50 format-headings format-h2:strong px-4 py-3 sm:px-6">
                            <h2 className=" text-lg font-bold">Delivery Details</h2>
                        </div>

                        <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                        Firstname
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                        Lastname
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="col-span-3 sm:col-span-1">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                        State
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                        Postal code
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="postcode"
                                            id="postcode"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="Country"
                                            id="Country"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}