import React from 'react';

const SVG_Pulse_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0994 12.0935C14.9145 11.7916 14.7343 11.4972 14.558 11.2865C14.3708 11.0628 14.0427 10.7552 13.541 10.7753C13.0392 10.7954 12.7369 11.1284 12.5682 11.3663C12.4094 11.5905 12.2533 11.8984 12.0933 12.2141L10.1054 16.1339C10.0303 16.2819 9.96781 16.4051 9.91157 16.511C9.84318 16.4125 9.76649 16.2976 9.67443 16.1595L9.49755 15.8942C9.2942 15.5891 9.11407 15.3189 8.9414 15.1058C8.75414 14.8747 8.54321 14.6683 8.2589 14.5161C7.9746 14.364 7.6859 14.303 7.38972 14.2753C7.11663 14.2499 6.79189 14.2499 6.42526 14.2499L5 14.2499C4.58579 14.2499 4.25 14.5857 4.25 14.9999C4.25 15.4141 4.58579 15.7499 5 15.7499H6.39445C6.80113 15.7499 7.0553 15.7507 7.25047 15.7689C7.43017 15.7856 7.50379 15.8133 7.55112 15.8387C7.59845 15.864 7.66234 15.9099 7.77596 16.0501C7.89936 16.2024 8.04097 16.4135 8.26656 16.7518L8.4526 17.0309C8.64087 17.3135 8.8261 17.5915 9.00554 17.7898C9.19841 18.003 9.52819 18.2871 10.0153 18.2582C10.5025 18.2292 10.7963 17.9081 10.9626 17.6736C11.1173 17.4554 11.2683 17.1574 11.4218 16.8546L13.4092 12.9356C13.4876 12.7811 13.553 12.6522 13.6119 12.5414C13.6794 12.6472 13.7549 12.7704 13.8454 12.9181L14.4994 13.9859C14.6995 14.3127 14.8766 14.6018 15.0485 14.8299C15.2348 15.0772 15.4477 15.2988 15.7406 15.4629C16.0336 15.627 16.3337 15.6928 16.642 15.7225C16.9263 15.75 17.2653 15.7499 17.6485 15.7499L19 15.7499C19.4142 15.7499 19.75 15.4141 19.75 14.9999C19.75 14.5857 19.4142 14.2499 19 14.2499H17.6805C17.2557 14.2499 16.9897 14.2491 16.786 14.2295C16.5983 14.2114 16.5223 14.1815 16.4737 14.1542C16.4251 14.127 16.36 14.0779 16.2465 13.9272C16.1233 13.7638 15.9837 13.5374 15.7618 13.1751L15.0994 12.0935Z"/>
<path clip-rule="evenodd" d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.4137 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.4137 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Pulse_Outline;
