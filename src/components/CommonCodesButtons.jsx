import React from "react";
import { COMMON_CODES } from "../constants/couponCodes";

const CommonCodesButtons = ({ selectedCode, onCodeClick }) => {
  return (
    <div>
      <div>Common Codes:</div>
      {COMMON_CODES.map((code) => (
        <button
          key={code}
          onClick={() => onCodeClick(code)}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default CommonCodesButtons;
