import React from "react";

const Cast = ({fillColor}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={fillColor?fillColor:"none"}
      >
        <path
          d="M2.83333 14.3333C2.83333 13.7145 2.5875 13.121 2.14992 12.6834C1.71233 12.2458 1.11884 12 0.5 12V14.3333H2.83333Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3333 14.3333H14.1667C14.5203 14.3333 14.8594 14.1928 15.1095 13.9428C15.3595 13.6927 15.5 13.3536 15.5 13V2.99996C15.5 2.64634 15.3595 2.3072 15.1095 2.05715C14.8594 1.8071 14.5203 1.66663 14.1667 1.66663H1.83333C1.47971 1.66663 1.14057 1.8071 0.890524 2.05715C0.640476 2.3072 0.5 2.64634 0.5 2.99996V3.49996"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.44 14.3333C7.44 12.4927 6.70882 10.7275 5.40732 9.42599C4.10582 8.12449 2.3406 7.39331 0.5 7.39331"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.02667 14.3333C5.02667 13.7389 4.90958 13.1502 4.68209 12.601C4.45461 12.0518 4.12118 11.5528 3.70084 11.1325C3.2805 10.7121 2.78148 10.3787 2.23228 10.1512C1.68308 9.92373 1.09445 9.80664 0.5 9.80664"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Cast;
