import React from 'react';

const SVG_Skateboard_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H17.8593C19.1967 10 20.4456 9.33159 21.1875 8.2188L22 7" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="7" cy="15" r="2" stroke-width="1.5" />
            <circle cx="17" cy="15" r="2" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Skateboard_Linear;
