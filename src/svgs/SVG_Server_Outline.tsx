import React from 'react';

const SVG_Server_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.948 1.5H18.052C18.9505 1.49997 19.6997 1.49995 20.2945 1.57991C20.9223 1.66432 21.4891 1.84999 21.9445 2.30546C22.4 2.76093 22.5857 3.32773 22.6701 3.95552C22.7501 4.5503 22.75 5.29953 22.75 6.19801V6.302C22.75 7.20048 22.7501 7.9497 22.6701 8.54448C22.5857 9.17228 22.4 9.73907 21.9445 10.1945C21.4891 10.65 20.9223 10.8357 20.2945 10.9201C19.6997 11.0001 18.9505 11 18.052 11H5.94801C5.04953 11 4.3003 11.0001 3.70552 10.9201C3.07773 10.8357 2.51093 10.65 2.05546 10.1945C1.59999 9.73907 1.41432 9.17228 1.32991 8.54448C1.24995 7.9497 1.24997 7.20048 1.25 6.302V6.198C1.24997 5.29952 1.24995 4.5503 1.32991 3.95552C1.41432 3.32773 1.59999 2.76093 2.05546 2.30546C2.51093 1.84999 3.07773 1.66432 3.70552 1.57991C4.3003 1.49995 5.04952 1.49997 5.948 1.5ZM3.90539 3.06654C3.44393 3.12858 3.24644 3.2358 3.11612 3.36612C2.9858 3.49643 2.87858 3.69393 2.81654 4.15539C2.7516 4.63843 2.75 5.28599 2.75 6.25C2.75 7.21401 2.7516 7.86157 2.81654 8.34461C2.87858 8.80607 2.9858 9.00357 3.11612 9.13388C3.24644 9.2642 3.44393 9.37142 3.90539 9.43347C4.38843 9.49841 5.03599 9.5 6 9.5H18C18.964 9.5 19.6116 9.49841 20.0946 9.43347C20.5561 9.37142 20.7536 9.2642 20.8839 9.13388C21.0142 9.00357 21.1214 8.80607 21.1835 8.34461C21.2484 7.86157 21.25 7.21401 21.25 6.25C21.25 5.28599 21.2484 4.63843 21.1835 4.15539C21.1214 3.69393 21.0142 3.49643 20.8839 3.36612C20.7536 3.2358 20.5561 3.12858 20.0946 3.06654C19.6116 3.00159 18.964 3 18 3H6C5.03599 3 4.38843 3.00159 3.90539 3.06654ZM5.25 6.25C5.25 5.83579 5.58579 5.5 6 5.5H8C8.41422 5.5 8.75 5.83579 8.75 6.25C8.75 6.66422 8.41422 7 8 7H6C5.58579 7 5.25 6.66422 5.25 6.25ZM10.25 6.25C10.25 5.83579 10.5858 5.5 11 5.5H18C18.4142 5.5 18.75 5.83579 18.75 6.25C18.75 6.66422 18.4142 7 18 7H11C10.5858 7 10.25 6.66422 10.25 6.25ZM5.94801 12.5H18.052C18.9505 12.5 19.6997 12.4999 20.2945 12.5799C20.9223 12.6643 21.4891 12.85 21.9445 13.3055C22.4 13.7609 22.5857 14.3277 22.6701 14.9555C22.7501 15.5503 22.75 16.2995 22.75 17.198V17.302C22.75 18.2005 22.7501 18.9497 22.6701 19.5445C22.5857 20.1723 22.4 20.7391 21.9445 21.1945C21.4891 21.65 20.9223 21.8357 20.2945 21.9201C19.6997 22.0001 18.9505 22 18.052 22H5.94801C5.04953 22 4.30031 22.0001 3.70552 21.9201C3.07773 21.8357 2.51093 21.65 2.05546 21.1945C1.59999 20.7391 1.41432 20.1723 1.32991 19.5445C1.24995 18.9497 1.24997 18.2005 1.25 17.302V17.198C1.24997 16.2995 1.24995 15.5503 1.32991 14.9555C1.41432 14.3277 1.59999 13.7609 2.05546 13.3055C2.51093 12.85 3.07773 12.6643 3.70552 12.5799C4.30031 12.4999 5.04953 12.5 5.94801 12.5ZM3.90539 14.0665C3.44393 14.1286 3.24644 14.2358 3.11612 14.3661C2.9858 14.4964 2.87858 14.6939 2.81654 15.1554C2.7516 15.6384 2.75 16.286 2.75 17.25C2.75 18.214 2.7516 18.8616 2.81654 19.3446C2.87858 19.8061 2.9858 20.0036 3.11612 20.1339C3.24644 20.2642 3.44393 20.3714 3.90539 20.4335C4.38843 20.4984 5.03599 20.5 6 20.5H18C18.964 20.5 19.6116 20.4984 20.0946 20.4335C20.5561 20.3714 20.7536 20.2642 20.8839 20.1339C21.0142 20.0036 21.1214 19.8061 21.1835 19.3446C21.2484 18.8616 21.25 18.214 21.25 17.25C21.25 16.286 21.2484 15.6384 21.1835 15.1554C21.1214 14.6939 21.0142 14.4964 20.8839 14.3661C20.7536 14.2358 20.5561 14.1286 20.0946 14.0665C19.6116 14.0016 18.964 14 18 14H6C5.03599 14 4.38843 14.0016 3.90539 14.0665ZM5.25 17.25C5.25 16.8358 5.58579 16.5 6 16.5H8C8.41422 16.5 8.75 16.8358 8.75 17.25C8.75 17.6642 8.41422 18 8 18H6C5.58579 18 5.25 17.6642 5.25 17.25ZM10.25 17.25C10.25 16.8358 10.5858 16.5 11 16.5H18C18.4142 16.5 18.75 16.8358 18.75 17.25C18.75 17.6642 18.4142 18 18 18H11C10.5858 18 10.25 17.6642 10.25 17.25Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Server_Outline;