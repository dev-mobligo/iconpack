import React from 'react';

const SVG_Turntable_Music_Note_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.7764 4.70529 21.9658 6.58687 21.9948 10" stroke-linecap="round" stroke-width="1.5" />
            <path d="M19 20V16V12" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="17" cy="20" r="2" stroke-width="1.5" />
            <path d="M22 15C20.3431 15 19 13.6569 19 12" stroke-linecap="round" stroke-width="1.5" />
            <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke-width="1.5" />
        </svg>
    );
};

export default SVG_Turntable_Music_Note_Linear;
