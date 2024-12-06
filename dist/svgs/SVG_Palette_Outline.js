import React from 'react';
const SVG_Palette_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M5.96858 1.25H6.03142C6.7048 1.24999 7.25551 1.24998 7.70307 1.28655C8.16633 1.3244 8.58473 1.40514 8.97547 1.60423C9.587 1.91582 10.0842 2.413 10.3958 3.02453C10.5949 3.41527 10.6756 3.83367 10.7134 4.29693C10.75 4.74449 10.75 5.29519 10.75 5.96856V6.43202L12.8055 4.37648C13.2817 3.90032 13.6711 3.5109 14.0134 3.22028C14.3678 2.91947 14.7207 2.6807 15.1378 2.54519C15.7905 2.3331 16.4937 2.3331 17.1464 2.54519C17.5635 2.6807 17.9164 2.91947 18.2708 3.22028C18.6131 3.51089 19.0025 3.9003 19.4786 4.37644L19.5231 4.42095C19.9992 4.89707 20.3886 5.28646 20.6793 5.62878C20.9801 5.98312 21.2188 6.33606 21.3543 6.75314C21.5664 7.40588 21.5664 8.109 21.3543 8.76175C21.2188 9.17882 20.9801 9.53176 20.6793 9.8861C20.3886 10.2284 19.9992 10.6178 19.5231 11.0939L17.367 13.25H18.0314C18.7048 13.25 19.2555 13.25 19.7031 13.2866C20.1663 13.3244 20.5847 13.4051 20.9755 13.6042C21.587 13.9158 22.0842 14.413 22.3958 15.0245C22.5949 15.4153 22.6756 15.8337 22.7134 16.2969C22.75 16.7445 22.75 17.2952 22.75 17.9686V18.0314C22.75 18.7048 22.75 19.2555 22.7134 19.7031C22.6756 20.1663 22.5949 20.5847 22.3958 20.9755C22.0842 21.587 21.587 22.0842 20.9755 22.3958C20.5847 22.5949 20.1663 22.6756 19.7031 22.7134C19.2555 22.75 18.7048 22.75 18.0314 22.75H6.08734C6.0688 22.75 6.05017 22.75 6.03144 22.75H5.96856C5.29519 22.75 4.74449 22.75 4.29693 22.7134C3.83367 22.6756 3.41527 22.5949 3.02453 22.3958C2.413 22.0842 1.91582 21.587 1.60423 20.9755C1.40514 20.5847 1.3244 20.1663 1.28655 19.7031C1.24998 19.2555 1.24999 18.7048 1.25 18.0314V5.96858C1.24999 5.2952 1.24998 4.7445 1.28655 4.29693C1.3244 3.83367 1.40514 3.41527 1.60423 3.02453C1.91582 2.413 2.413 1.91582 3.02453 1.60423C3.41527 1.40514 3.83367 1.3244 4.29693 1.28655C4.7445 1.24998 5.2952 1.24999 5.96858 1.25ZM10.2386 21.25H18C18.7124 21.25 19.2017 21.2494 19.5809 21.2184C19.9514 21.1882 20.1504 21.1327 20.2945 21.0593C20.6238 20.8915 20.8915 20.6238 21.0593 20.2945C21.1327 20.1504 21.1882 19.9514 21.2184 19.5809C21.2494 19.2017 21.25 18.7124 21.25 18C21.25 17.2876 21.2494 16.7983 21.2184 16.4191C21.1882 16.0486 21.1327 15.8496 21.0593 15.7055C20.8915 15.3762 20.6238 15.1085 20.2945 14.9407C20.1504 14.8673 19.9514 14.8118 19.5809 14.7816C19.2017 14.7506 18.7124 14.75 18 14.75H15.867L10.6912 19.9258C10.6462 20.3018 10.5625 20.6483 10.3958 20.9755C10.3477 21.0698 10.2952 21.1614 10.2386 21.25ZM10.75 17.7457L18.4402 10.0555C18.944 9.55177 19.2895 9.20542 19.5357 8.91533C19.7763 8.63195 19.8778 8.45197 19.9278 8.29822C20.042 7.94674 20.042 7.56814 19.9278 7.21666C19.8778 7.06291 19.7763 6.88294 19.5357 6.59955C19.2895 6.30946 18.944 5.96312 18.4402 5.45934C17.9364 4.95557 17.5901 4.61005 17.3 4.36379C17.0166 4.12321 16.8366 4.02173 16.6829 3.97177C16.3314 3.85757 15.9528 3.85757 15.6013 3.97177C15.4476 4.02173 15.2676 4.12321 14.9842 4.36379C14.6941 4.61005 14.3478 4.95557 13.844 5.45934L11.7019 7.60143C11.0806 8.22277 10.927 8.39509 10.8452 8.59275C10.7637 8.78946 10.7501 9.0186 10.75 9.88681C10.75 9.89104 10.75 9.89528 10.75 9.89953L10.75 17.7457ZM9.25 18.0413C9.24997 18.7314 9.24882 19.209 9.21843 19.5809C9.18816 19.9514 9.13265 20.1504 9.05926 20.2945C8.89148 20.6238 8.62377 20.8915 8.29448 21.0593C8.15044 21.1327 7.95142 21.1882 7.58092 21.2184C7.20167 21.2494 6.71244 21.25 6 21.25C5.28756 21.25 4.79833 21.2494 4.41908 21.2184C4.04858 21.1882 3.84956 21.1327 3.70552 21.0593C3.37623 20.8915 3.10852 20.6238 2.94074 20.2945C2.86735 20.1504 2.81184 19.9514 2.78157 19.5809C2.75058 19.2017 2.75 18.7124 2.75 18V6C2.75 5.28756 2.75058 4.79833 2.78157 4.41908C2.81184 4.04858 2.86735 3.84956 2.94074 3.70552C3.10852 3.37623 3.37623 3.10852 3.70552 2.94074C3.84956 2.86735 4.04858 2.81184 4.41908 2.78157C4.79833 2.75058 5.28756 2.75 6 2.75C6.71244 2.75 7.20167 2.75058 7.58092 2.78157C7.95142 2.81184 8.15045 2.86735 8.29448 2.94074C8.62377 3.10852 8.89148 3.37623 9.05926 3.70552C9.13265 3.84956 9.18816 4.04858 9.21843 4.41908C9.24942 4.79833 9.25 5.28756 9.25 6V9.54918C9.24978 9.62395 9.24985 9.7004 9.24992 9.77869C9.24996 9.81849 9.25 9.85876 9.25 9.89953L9.25 18C9.25 18.0138 9.25 18.0276 9.25 18.0413ZM4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H7C7.41421 18.25 7.75 18.5858 7.75 19C7.75 19.4142 7.41421 19.75 7 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z", "fill-rule": "evenodd" })));
};
export default SVG_Palette_Outline;
