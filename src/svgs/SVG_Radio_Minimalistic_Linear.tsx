import React from 'react';

const SVG_Radio_Minimalistic_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke-width="1.5" />
            <circle cx="8" cy="14" r="3" stroke-width="1.5" />
            <path d="M13.5 11H19" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13.5 14H19" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13.5 17H19" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.5 6L15 2" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Radio_Minimalistic_Linear;
