import React from 'react';

const SVG_User_Check_Rounded_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" stroke-width="1.5" />
            <circle cx="17" cy="18" r="4" stroke-width="1.5" />
            <path d="M15.6665 18.0002L16.5 19.0002L18.3332 17.1113" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_User_Check_Rounded_Linear;
