import React from "react";

const InputFields = ({ 
  billAmount, 
  onBillAmountChange, 
  couponCode, 
  onCouponCodeChange 
}) => {
  return (
    <div>
      <div>
        <label>
          Enter Total Bill Amount (USD):
          <input
            type="number"
            value={billAmount}
            onChange={(e) => onBillAmountChange(e.target.value)}
            placeholder="0"
          />
        </label>
      </div>

      <div>
        <label>
          Enter Coupon Code:
          <input
            type="text"
            value={couponCode}
            onChange={(e) => onCouponCodeChange(e.target.value)}
            placeholder="Enter coupon code"
          />
        </label>
      </div>
    </div>
  );
};

export default InputFields;
