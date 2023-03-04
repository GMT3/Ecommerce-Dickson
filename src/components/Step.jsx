import * as React from "react";
import PropType from "prop-types";

function Step(props){

    return(
        <li aria-label="stepper-item" className={`flex items-center step-item ${props.active && "text-blue-600 dark:text-blue-500"}`}>
            <span className="hidden sm:inline-flex sm:ml-2">{props.children}</span>
            <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </li>
    )
}

Step.prototype = {
    active: PropType.bool
}

export default Step;