import React from 'react';

const SVG_User_Circle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="9" r="3" stroke-width="1.5" />
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M17.9692 20C17.8101 17.1085 16.9248 15 12 15C7.07527 15 6.18997 17.1085 6.03082 20" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_User_Circle_Linear;