import React from 'react';
const SVG_Documents_Outline = (props) => {
    const { className } = props;
    return (React.createElement("svg", { className: className, fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { "clip-rule": "evenodd", d: "M10.9451 1.25H13.0549C14.4225 1.24998 15.5248 1.24996 16.3918 1.36652C17.2919 1.48754 18.0497 1.74643 18.6517 2.34835C18.9501 2.64682 19.1642 2.98363 19.319 3.35712C20.2511 3.47388 21.0336 3.73034 21.6517 4.3484C22.2536 4.95032 22.5125 5.70819 22.6335 6.6083C22.75 7.47527 22.75 8.57759 22.75 9.94518V14.0549C22.75 15.4225 22.75 16.5248 22.6335 17.3918C22.5125 18.2919 22.2536 19.0498 21.6517 19.6517C21.0336 20.2698 20.2511 20.5262 19.319 20.643C19.1642 21.0164 18.9501 21.3532 18.6517 21.6517C18.0497 22.2536 17.2919 22.5125 16.3918 22.6335C15.5248 22.75 14.4225 22.75 13.0549 22.75H10.9451C9.57754 22.75 8.47522 22.75 7.60825 22.6335C6.70814 22.5125 5.95027 22.2536 5.34835 21.6517C5.04991 21.3532 4.8358 21.0164 4.68101 20.643C3.74894 20.5262 2.96643 20.2698 2.34835 19.6517C1.74643 19.0498 1.48754 18.2919 1.36652 17.3918C1.24996 16.5248 1.24998 15.4225 1.25 14.0549V9.94518C1.24998 8.57759 1.24996 7.47527 1.36652 6.6083C1.48754 5.70819 1.74643 4.95032 2.34835 4.3484C2.96642 3.73034 3.74892 3.47388 4.68096 3.35712C4.83576 2.98363 5.04988 2.64682 5.34835 2.34835C5.95027 1.74643 6.70814 1.48754 7.60825 1.36652C8.47522 1.24996 9.57754 1.24998 10.9451 1.25ZM4.32844 4.94047C3.89082 5.04593 3.618 5.20007 3.40901 5.40906C3.13225 5.68583 2.9518 6.0744 2.85315 6.80817C2.75159 7.56352 2.75 8.56464 2.75 10.0001V14.0001C2.75 15.4355 2.75159 16.4366 2.85315 17.1919C2.9518 17.9257 3.13225 18.3143 3.40901 18.591C3.61801 18.8 3.89083 18.9542 4.32845 19.0596C4.24997 18.2484 4.24998 17.2535 4.25 16.0549V7.94512C4.24998 6.74652 4.24997 5.75169 4.32844 4.94047ZM19.6716 19.0596C20.1092 18.9542 20.382 18.8 20.591 18.591C20.8678 18.3143 21.0482 17.9257 21.1469 17.1919C21.2484 16.4366 21.25 15.4355 21.25 14.0001V10.0001C21.25 8.56464 21.2484 7.56352 21.1469 6.80817C21.0482 6.0744 20.8678 5.68583 20.591 5.40906C20.382 5.20007 20.1092 5.04593 19.6716 4.94047C19.75 5.75169 19.75 6.74653 19.75 7.94513V16.0549C19.75 17.2535 19.75 18.2484 19.6716 19.0596ZM7.80812 2.85315C7.07435 2.9518 6.68577 3.13225 6.40901 3.40901C6.13225 3.68577 5.9518 4.07435 5.85315 4.80812C5.75159 5.56347 5.75 6.56458 5.75 8V16C5.75 17.4354 5.75159 18.4365 5.85315 19.1919C5.9518 19.9257 6.13225 20.3142 6.40901 20.591C6.68577 20.8678 7.07435 21.0482 7.80812 21.1469C8.56347 21.2484 9.56459 21.25 11 21.25H13C14.4354 21.25 15.4365 21.2484 16.1919 21.1469C16.9257 21.0482 17.3142 20.8678 17.591 20.591C17.8678 20.3142 18.0482 19.9257 18.1469 19.1919C18.2484 18.4365 18.25 17.4354 18.25 16V8C18.25 6.56459 18.2484 5.56347 18.1469 4.80812C18.0482 4.07435 17.8678 3.68577 17.591 3.40901C17.3142 3.13225 16.9257 2.9518 16.1919 2.85315C15.4365 2.75159 14.4354 2.75 13 2.75H11C9.56459 2.75 8.56347 2.75159 7.80812 2.85315ZM8.25 9C8.25 8.58579 8.58579 8.25 9 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H9C8.58579 9.75 8.25 9.41421 8.25 9ZM8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H15C15.4142 12.25 15.75 12.5858 15.75 13C15.75 13.4142 15.4142 13.75 15 13.75H9C8.58579 13.75 8.25 13.4142 8.25 13ZM8.25 17C8.25 16.5858 8.58579 16.25 9 16.25H12C12.4142 16.25 12.75 16.5858 12.75 17C12.75 17.4142 12.4142 17.75 12 17.75H9C8.58579 17.75 8.25 17.4142 8.25 17Z", "fill-rule": "evenodd" })));
};
export default SVG_Documents_Outline;
