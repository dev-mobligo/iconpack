import React from 'react';

const SVG_Tag_Price_Linear = (props: { className: any }) => {
    const { className } = props;

    return (

        <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.72855 16.1369C3.18301 14.5914 2.41024 13.8186 2.1227 12.816C1.83516 11.8134 2.08089 10.7485 2.57237 8.61875L2.8558 7.39057C3.26928 5.59881 3.47603 4.70292 4.08951 4.08944C4.70298 3.47597 5.59887 3.26922 7.39063 2.85574L8.61881 2.57231C10.7486 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9666 6.55812C20.6556 9.24711 22.0001 10.5916 22.0001 12.2623C22.0001 13.933 20.6556 15.2775 17.9666 17.9665C15.2776 20.6555 13.9331 22 12.2624 22C10.5917 22 9.24717 20.6555 6.55818 17.9665L4.72855 16.1369Z" stroke-width="1.5" />
            <path d="M15.3893 15.3891C15.9751 14.8033 16.0542 13.9327 15.5661 13.4445C15.0779 12.9564 14.2073 13.0355 13.6215 13.6213C13.0358 14.2071 12.1652 14.2863 11.677 13.7981C11.1888 13.3099 11.268 12.4393 11.8538 11.8536M15.3893 15.3891L15.7429 15.7426M15.3893 15.3891C14.9883 15.7901 14.4539 15.9537 14 15.8604M11.5002 11.5L11.8538 11.8536M11.8538 11.8536C12.185 11.5223 12.6073 11.3531 13 11.3568" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="8.60705" cy="8.87891" r="2" stroke-width="1.5" transform="rotate(-45 8.60705 8.87891)" />
        </svg>
    );
};

export default SVG_Tag_Price_Linear;
