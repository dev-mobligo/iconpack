import React from 'react';

const SVG_Bowling_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <circle cx="12" cy="7" r="1.5" stroke-width="1.5" transform="rotate(-90 12 7)" />
            <circle cx="12" cy="12" r="1.5" stroke-width="1.5" transform="rotate(-90 12 12)" />
            <path d="M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Bowling_Linear;
