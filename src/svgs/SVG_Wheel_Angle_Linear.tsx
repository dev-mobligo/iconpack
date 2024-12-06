import React from 'react';

const SVG_Wheel_Angle_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 22C18.9853 22 21 17.5228 21 12C21 6.47715 18.9853 2 16.5 2" stroke-width="1.5"/>
<path d="M12 12C12 17.5228 9.98528 22 7.5 22C5.01472 22 3 17.5228 3 12C3 6.47715 5.01472 2 7.5 2C9.98528 2 12 6.47715 12 12Z" stroke-width="1.5"/>
<path d="M7.5 22C9.98528 22 12 17.5228 12 12C12 6.47715 9.98528 2 7.5 2" stroke-width="1.5"/>
<path d="M9 12C9 15.3137 8.32843 18 7.5 18C6.67157 18 6 15.3137 6 12C6 8.68629 6.67157 6 7.5 6C8.32843 6 9 8.68629 9 12Z" stroke-width="1.5"/>
<path d="M7.5 2L16.5 2" stroke-width="1.5"/>
<path d="M7.5 22L16.5 22" stroke-width="1.5"/>
<path d="M9 12H8" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Wheel_Angle_Linear;
