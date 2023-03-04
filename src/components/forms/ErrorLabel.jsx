import * as React from 'react';

export default function ErrorLabel({label}){
    return(
        <div className="text-sm text-red-500">{label}</div>
    );
}