import React from 'react';

const SVG_Sad_Circle_Broken = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke-linecap="round" stroke-width="1.5" />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" />
            <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke-linecap="round" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Sad_Circle_Broken;
