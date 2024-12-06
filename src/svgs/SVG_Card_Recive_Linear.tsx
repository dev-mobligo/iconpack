import React from 'react';

const SVG_Card_Recive_Linear = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14V20M19 20L21 18M19 20L17 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14" stroke-linecap="round" stroke-width="1.5"/>
<path d="M10 16H6" stroke-linecap="round" stroke-width="1.5"/>
<path d="M13 16H12.5" stroke-linecap="round" stroke-width="1.5"/>
<path d="M2 10L22 10" stroke-linecap="round" stroke-width="1.5"/>
</svg>
    );
};

export default SVG_Card_Recive_Linear;
