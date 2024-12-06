import React from 'react';

const SVG_Watch_Square_Outline = (props: { className: any }) => {
    const { className } = props;

    return (
        
<svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.1637 1.25H12.8363C13.5671 1.24998 14.1822 1.24995 14.6808 1.31045C15.2098 1.37466 15.6926 1.51494 16.1164 1.85489C16.5402 2.19484 16.7819 2.63575 16.9593 3.13824C17.1255 3.60893 17.2583 4.2051 17.4156 4.91285C17.4913 4.95576 17.5657 5.00158 17.639 5.05052C18.1576 5.39707 18.6029 5.84239 18.9495 6.36104C19.3826 7.00926 19.5716 7.7503 19.6619 8.63795C19.75 9.5043 19.75 10.5892 19.75 11.9584V12.0416C19.75 13.4108 19.75 14.4957 19.6619 15.3621C19.5716 16.2497 19.3826 16.9907 18.9495 17.639C18.6029 18.1576 18.1576 18.6029 17.639 18.9495C17.5657 18.9984 17.4913 19.0442 17.4157 19.0871C17.2584 19.7949 17.1256 20.3911 16.9594 20.8618C16.7819 21.3643 16.5402 21.8052 16.1165 22.1451C15.6927 22.4851 15.2098 22.6253 14.6808 22.6896C14.1823 22.75 13.5671 22.75 12.8364 22.75H11.1637C10.433 22.75 9.81781 22.75 9.31929 22.6896C8.79027 22.6253 8.30743 22.4851 7.88365 22.1451C7.45986 21.8052 7.21818 21.3643 7.04074 20.8618C6.87455 20.3911 6.74172 19.7949 6.58447 19.0872C6.50875 19.0443 6.43431 18.9984 6.36104 18.9495C5.84239 18.6029 5.39707 18.1576 5.05052 17.639C4.61739 16.9907 4.42841 16.2497 4.33812 15.3621C4.24998 14.4957 4.24999 13.4108 4.25 12.0416V11.9584C4.24999 10.5892 4.24998 9.5043 4.33812 8.63795C4.42841 7.7503 4.61739 7.00926 5.05052 6.36104C5.39707 5.84239 5.84239 5.39707 6.36104 5.05052C6.43429 5.00158 6.50871 4.95576 6.58441 4.91284C6.74166 4.2051 6.87449 3.60893 7.04069 3.13824C7.21812 2.63575 7.45981 2.19484 7.88359 1.85489C8.30738 1.51494 8.79022 1.37466 9.31924 1.31045C9.81776 1.24995 10.4329 1.24998 11.1637 1.25ZM8.2433 4.38662C8.37159 4.36784 8.50308 4.35184 8.63794 4.33812C9.5043 4.24999 10.5892 4.24999 11.9584 4.25H12.0416C13.4108 4.24999 14.4957 4.24999 15.3621 4.33812C15.4969 4.35184 15.6284 4.36784 15.7567 4.38662C15.6837 4.08488 15.617 3.84181 15.5449 3.63768C15.4184 3.27937 15.3024 3.12492 15.1778 3.02495C15.0532 2.92498 14.8773 2.84531 14.5001 2.79953C14.1025 2.75129 13.579 2.75 12.7913 2.75H11.2087C10.421 2.75 9.89746 2.75129 9.49995 2.79953C9.12274 2.84531 8.94681 2.92498 8.82218 3.02495C8.69756 3.12492 8.58162 3.27937 8.4551 3.63767C8.38302 3.84181 8.31635 4.08487 8.2433 4.38662ZM8.24336 19.6134C8.31641 19.9151 8.38308 20.1582 8.45516 20.3623C8.58168 20.7206 8.69762 20.8751 8.82224 20.9751C8.94686 21.075 9.12279 21.1547 9.5 21.2005C9.89751 21.2487 10.421 21.25 11.2087 21.25H12.7914C13.5791 21.25 14.1026 21.2487 14.5001 21.2005C14.8773 21.1547 15.0533 21.075 15.1779 20.9751C15.3025 20.8751 15.4184 20.7206 15.545 20.3623C15.617 20.1582 15.6837 19.9151 15.7568 19.6134C15.6284 19.6322 15.4969 19.6482 15.3621 19.6619C14.4957 19.75 13.4108 19.75 12.0416 19.75H11.9584C10.5892 19.75 9.50431 19.75 8.63794 19.6619C8.5031 19.6482 8.37163 19.6322 8.24336 19.6134ZM8.78975 5.83042C8.02071 5.90865 7.55507 6.05673 7.1944 6.29773C6.83953 6.53484 6.53484 6.83953 6.29772 7.1944C6.05673 7.55507 5.90865 8.02071 5.83041 8.78975C5.75091 9.57133 5.75 10.5799 5.75 12C5.75 13.4201 5.75091 14.4287 5.83041 15.2102C5.90865 15.9793 6.05673 16.4449 6.29772 16.8056C6.53484 17.1605 6.83953 17.4652 7.1944 17.7023C7.55507 17.9433 8.02071 18.0914 8.78975 18.1696C9.57133 18.2491 10.5799 18.25 12 18.25C13.4201 18.25 14.4287 18.2491 15.2102 18.1696C15.9793 18.0914 16.4449 17.9433 16.8056 17.7023C17.1605 17.4652 17.4652 17.1605 17.7023 16.8056C17.9433 16.4449 18.0914 15.9793 18.1696 15.2102C18.2491 14.4287 18.25 13.4201 18.25 12C18.25 10.5799 18.2491 9.57133 18.1696 8.78975C18.0914 8.02071 17.9433 7.55507 17.7023 7.1944C17.4652 6.83953 17.1605 6.53484 16.8056 6.29773C16.4449 6.05673 15.9793 5.90865 15.2102 5.83042C14.4287 5.75091 13.4201 5.75 12 5.75C10.5799 5.75 9.57133 5.75091 8.78975 5.83042ZM12 8.24998C12.4142 8.24998 12.75 8.58577 12.75 8.99998V11.7576L14.5198 13.4594C14.8184 13.7465 14.8277 14.2212 14.5406 14.5198C14.2535 14.8184 13.7787 14.8277 13.4802 14.5406L11.8638 12.9864C11.5611 12.6954 11.4098 12.5499 11.3299 12.3622C11.25 12.1745 11.25 11.9646 11.25 11.5447V8.99998C11.25 8.58577 11.5858 8.24998 12 8.24998Z" fill-rule="evenodd"/>
</svg>
    );
};

export default SVG_Watch_Square_Outline;
