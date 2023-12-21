import React from "react";

const Home = ({ fillColor }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={fillColor?fillColor:"none"}
      >
        <g clip-path="url(#clip0_584_1587)">
          <path
            d="M15.2454 5.96471L8.00004 0.498047L0.748037 5.96471C0.598116 6.10306 0.507967 6.29436 0.496704 6.49805V14.846C0.497232 15.0188 0.566094 15.1843 0.688253 15.3065C0.810413 15.4287 0.975945 15.4975 1.1487 15.498H5.4967V12C5.4967 11.337 5.7601 10.7011 6.22894 10.2323C6.69778 9.76344 7.33366 9.50005 7.9967 9.50005C8.65975 9.50005 9.29563 9.76344 9.76447 10.2323C10.2333 10.7011 10.4967 11.337 10.4967 12V15.5H14.844C15.0169 15.4995 15.1825 15.4307 15.3047 15.3085C15.427 15.1864 15.496 15.0209 15.4967 14.848V6.49805C15.4852 6.29443 15.3951 6.10323 15.2454 5.96471Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_584_1587">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Home;
