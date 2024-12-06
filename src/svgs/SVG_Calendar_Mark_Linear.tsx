import React from 'react';

const SVG_Calendar_Mark_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke-width="1.5" />
            <path d="M7 4V2.5" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 4V2.5" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="16.5" cy="16.5" r="1.5" stroke-width="1.5" />
            <path d="M2.5 9H21.5" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Calendar_Mark_Linear;
