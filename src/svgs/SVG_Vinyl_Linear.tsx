import React from 'react';

const SVG_Vinyl_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke-width="1.5" />
            <path d="M21.9506 13.0004C21.4489 18.0538 17.1853 22.0004 12 22.0004C6.47715 22.0004 2 17.5233 2 12.0004C2 6.81508 5.94668 2.55153 11 2.0498" stroke-linecap="round" stroke-width="1.5" />
            <path d="M15 11.9992V2.45703C18.1101 3.43385 20.5654 5.88916 21.5422 8.99923" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Vinyl_Linear;
