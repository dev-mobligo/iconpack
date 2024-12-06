import React from 'react';

const SVG_Star_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.292 3.30809C10.8982 3.82224 10.4538 4.61551 9.80827 5.77355L9.48057 6.36141C9.46082 6.39684 9.44132 6.43194 9.42201 6.4667C9.12127 7.0079 8.86745 7.46469 8.45844 7.77518C8.04503 8.08901 7.54106 8.20227 6.95535 8.3339C6.91771 8.34235 6.87973 8.35089 6.84141 8.35956L6.20506 8.50354C4.94974 8.78757 4.09575 8.98299 3.51082 9.21351C2.94002 9.43845 2.81953 9.62275 2.77361 9.77044C2.72514 9.9263 2.7237 10.1647 3.06494 10.7068C3.41129 11.257 3.99558 11.9432 4.85011 12.9425L5.28393 13.4498C5.30915 13.4793 5.33413 13.5084 5.35886 13.5373C5.76187 14.0074 6.09791 14.3993 6.25205 14.895C6.40526 15.3877 6.35448 15.9054 6.29291 16.5331C6.28913 16.5716 6.28532 16.6105 6.2815 16.6499L6.21591 17.3267C6.08682 18.6589 5.99978 19.5762 6.02922 20.2369C6.05859 20.8965 6.1979 21.0788 6.30865 21.1628C6.40716 21.2376 6.58925 21.3204 7.18248 21.1504C7.78535 20.9777 8.58659 20.6111 9.76202 20.0699L10.3578 19.7956C10.3945 19.7787 10.4309 19.7619 10.4669 19.7452C11.0117 19.4934 11.4843 19.2748 12 19.2748C12.5157 19.2748 12.9883 19.4934 13.5331 19.7452C13.5692 19.7619 13.6055 19.7787 13.6422 19.7956L14.238 20.0699C15.4134 20.6111 16.2147 20.9777 16.8176 21.1504C17.4108 21.3204 17.5929 21.2376 17.6914 21.1628C17.8021 21.0788 17.9414 20.8965 17.9708 20.2369C18.0002 19.5762 17.9132 18.6589 17.7841 17.3267L17.7185 16.6499C17.7147 16.6105 17.7109 16.5716 17.7071 16.5331C17.6456 15.9054 17.5948 15.3877 17.748 14.895C17.9021 14.3993 18.2382 14.0074 18.6412 13.5372C18.6659 13.5084 18.6909 13.4793 18.7161 13.4498L19.1499 12.9425C20.0044 11.9432 20.5887 11.257 20.9351 10.7068C21.2763 10.1647 21.2749 9.9263 21.2264 9.77044C21.1805 9.62275 21.06 9.43845 20.4892 9.21351C19.9043 8.98299 19.0503 8.78757 17.795 8.50354L17.1586 8.35956C17.1203 8.35089 17.0823 8.34235 17.0447 8.33389C16.459 8.20227 15.955 8.08901 15.5416 7.77518C15.1326 7.46469 14.8788 7.0079 14.578 6.4667C14.5587 6.43194 14.5392 6.39684 14.5195 6.36141L14.1918 5.77355C13.5462 4.61551 13.1018 3.82224 12.7081 3.30809C12.3147 2.79443 12.1138 2.75 12 2.75C11.8863 2.75 11.6853 2.79443 11.292 3.30809ZM10.1011 2.3961C10.5777 1.77363 11.1669 1.25 12 1.25C12.8331 1.25 13.4223 1.77363 13.899 2.3961C14.3674 3.00773 14.864 3.89876 15.471 4.98776L15.8296 5.63106C16.2222 6.33523 16.3226 6.48482 16.4486 6.58044C16.5698 6.67247 16.7262 6.7238 17.4896 6.89654L18.1897 7.05492C19.3653 7.32088 20.3338 7.53999 21.0392 7.81796C21.7714 8.10651 22.4121 8.5318 22.6588 9.32502C22.9029 10.1101 22.6285 10.8323 22.2045 11.5059C21.7925 12.1604 21.1344 12.9298 20.3306 13.8698L19.8561 14.4247C19.3391 15.0292 19.2311 15.1772 19.1803 15.3404C19.1286 15.5069 19.1334 15.6992 19.2115 16.5052L19.2831 17.2433C19.4048 18.4994 19.5041 19.5236 19.4693 20.3037C19.434 21.0977 19.2536 21.8601 18.5984 22.3576C17.9308 22.8643 17.1542 22.8072 16.4044 22.5924C15.6774 22.3841 14.7711 21.9667 13.6705 21.46L13.0149 21.1581C12.2975 20.8278 12.1439 20.7748 12 20.7748C11.8561 20.7748 11.7025 20.8278 10.9852 21.1581L10.3295 21.46C9.22898 21.9667 8.32265 22.3841 7.59565 22.5924C6.84587 22.8072 6.0692 22.8643 5.40168 22.3576C4.7464 21.8601 4.56607 21.0977 4.5307 20.3037C4.49595 19.5236 4.59523 18.4993 4.71697 17.2433L4.7885 16.5052C4.8666 15.6992 4.87147 15.5069 4.81971 15.3404C4.76894 15.1772 4.66094 15.0292 4.14393 14.4247L3.66945 13.8698C2.8656 12.9299 2.20753 12.1604 1.79553 11.5059C1.37149 10.8323 1.09714 10.1101 1.34127 9.32502C1.58794 8.5318 2.22867 8.10651 2.96086 7.81796C3.66622 7.53999 4.63474 7.32088 5.81038 7.05492L5.87404 7.04052L6.51039 6.89654C7.27382 6.72381 7.43023 6.67247 7.55148 6.58044C7.67743 6.48482 7.77785 6.33523 8.17039 5.63106L8.52899 4.98775C9.13601 3.89876 9.63268 3.00773 10.1011 2.3961Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Star_Outline;