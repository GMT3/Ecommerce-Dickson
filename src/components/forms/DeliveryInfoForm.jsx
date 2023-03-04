import * as React from "react";
import { Formik } from "formik";

import ErrorLabel from "./ErrorLabel";
import validationSchema from './models/validationSchema';
import checkoutFormModel from './models/formModels';

const  { formField } = checkoutFormModel;

export default function DeliveryInfoForm({handleNext}){
    const { firstName, lastName, address, city, state, postcode, country } = formField;
    const addressValidationSchema = validationSchema[0];

    return(
        <div className="flex w-full content-center">
            <div className="md:w-1/2 sm:w-full w-full mx-auto">
                <Formik
                    initialValues={{ 
                        firstName: "",
                        lastName: "",
                        address: "",
                        city: "",
                        state: "",
                        postcode: "",
                        country: ""
                    }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        console.log({values});
                        handleNext();
                    }}
                    validationSchema={addressValidationSchema}
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

                        return (
                            <form aria-label="delivery-details-form" noValidate onSubmit={handleSubmit}>
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
                                                        id="firstname"
                                                        name={firstName.name}
                                                        placeholder={firstName.label}
                                                        value={values.firstName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.firstName ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.firstName && <ErrorLabel label={errors.firstName}/>}
                                            </div>
                                            <div className="col-span-4 sm:col-span-2">
                                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                                    Lastname
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        name={lastName.name}
                                                        placeholder={lastName.label}
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.lastName ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.lastName && <ErrorLabel label={errors.lastName}/>}
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
                                                        id="address"
                                                        name={address.name}
                                                        placeholder={address.label}
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.address ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.address && <ErrorLabel label={errors.address}/>}
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
                                                        id="city"
                                                        name={city.name}
                                                        placeholder={city.label}
                                                        value={values.city}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.city ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.city && <ErrorLabel label={errors.city}/>}
                                            </div>
                                            <div className="col-span-4 sm:col-span-2">
                                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                                    State
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="state"
                                                        name={state.name}
                                                        placeholder={state.label}
                                                        value={values.state}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.state ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.state && <ErrorLabel label={errors.state}/>}
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
                                                        id="postcode"
                                                        name={postcode.name}
                                                        placeholder={postcode.label}
                                                        value={values.postcode}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.postcode ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.postcode && <ErrorLabel label={errors.postcode}/>}
                                            </div>
                                            <div className="col-span-4 sm:col-span-2">
                                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        id="Country"
                                                        name={country.name}
                                                        placeholder={country.label}
                                                        value={values.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`block w-full flex-1 rounded-md border-gray-300 ${errors.country ? "border-red-500" : "focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
                                                    />
                                                </div>
                                                {errors.country && <ErrorLabel label={errors.country}/>}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <hr className="h-px bg-transparent border-0 dark:bg-gray-300" />

                                    <div className="flex w-full justify-end bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="inline-flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Next
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