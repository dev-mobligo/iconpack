import React from 'react';

const SVG_Round_Double_Alt_Arrow_Right_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M8.5 9L11.5 12L8.5 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12.5 9L15.5 12L12.5 15" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Round_Double_Alt_Arrow_Right_Linear;
