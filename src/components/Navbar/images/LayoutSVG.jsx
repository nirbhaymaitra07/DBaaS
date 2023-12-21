import React from "react";

const Layout = ({ fillColor }) => {
  return (
    <>
      {fillColor?<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M15 2V14C15 14.5523 14.5523 15 14 15H2C1.44771 15 1 14.5523 1 14V2C1 1.44771 1.44771 1 2 1H14C14.5523 1 15 1.44771 15 2Z"
          fill="white"
        />
        <path
          d="M7.99744 15V1"
          stroke="#13027C"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 10.3334H7.99744"
          stroke="#13027C"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 5.66663H7.99744"
          stroke="#13027C"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>:
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_584_1329)">
        <path d="M15 2V14C15 14.5523 14.5523 15 14 15H2C1.44771 15 1 14.5523 1 14V2C1 1.44771 1.44771 1 2 1H14C14.5523 1 15 1.44771 15 2Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.99731 15V1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.9999 10.3334H7.99731" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.9999 5.66663H7.99731" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_584_1329">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
      }
    </>
  );
};

export default Layout;
