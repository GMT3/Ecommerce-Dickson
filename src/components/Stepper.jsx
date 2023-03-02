import * as React from "react";

export default function Stepper(props){

    return(
        <ol className="flex items-center w-full p-3 space-x-2 mb-4 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4">
            {props.children}
        </ol>
    );
}