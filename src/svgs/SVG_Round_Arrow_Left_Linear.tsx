import React from 'react';

const SVG_Round_Arrow_Left_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M16 12H8M8 12L11 9M8 12L11 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Round_Arrow_Left_Linear;
