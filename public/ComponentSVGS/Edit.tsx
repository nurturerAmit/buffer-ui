import * as React from "react";

const EditLogo = (props) => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.18555"
      y="2.99341"
      width="18.512"
      height="17.7716"
      rx="8.88578"
      fill={!props.active ? "#C2C1D3" : "#303044"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.56385 0.829418C8.0101 1.12273 6.25734 1.91225 5.04262 2.86585C4.19602 3.53042 2.98934 4.86037 2.41703 5.75937C0.637264 8.55548 0.189546 12.4194 1.27901 15.5804C2.60454 19.4263 5.80474 22.2427 9.64257 22.941C10.5652 23.1089 12.3615 23.1087 13.2818 22.9404C17.1224 22.2385 20.41 19.2785 21.6522 15.4041C23.1055 10.8717 21.5515 5.71176 17.8787 2.87483C16.5444 1.84419 14.6104 1.00577 13.0594 0.785406C12.0674 0.644487 10.4343 0.665046 9.56385 0.829418ZM15.1975 7.57534C16.1327 8.46157 16.3513 8.7969 16.1874 9.09381C16.0608 9.32305 15.2966 10.1607 15.2191 10.1551C15.1807 10.1523 14.6106 9.61267 13.9522 8.95588L12.755 7.76167L13.2973 7.21436C13.602 6.90678 13.927 6.66706 14.0393 6.66706C14.1568 6.66706 14.6331 7.04051 15.1975 7.57534ZM13.2801 9.86137L14.4754 11.0497L13.5177 12.0769C12.9909 12.6419 11.9519 13.7635 11.2089 14.5692L9.85767 16.0341L8.33236 16.5402C7.49352 16.8186 6.77708 17.0463 6.7404 17.0463C6.60594 17.0463 6.6838 16.5642 7.05242 15.1141C7.25975 14.2983 7.50722 13.5355 7.60232 13.4191C7.9989 12.9328 11.9759 8.66347 12.028 8.66806C12.0591 8.67085 12.6226 9.20778 13.2801 9.86137Z"
      fill={props.active ? "#C2C1D3" : "#303044"}
    />
  </svg>
);

export default EditLogo;
