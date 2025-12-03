import React from "react";
import { formatCurrency } from "../utils/formatters";

const CalculationSummary = ({ discountResult }) => {
  if (!discountResult) return null;

  return (
    <div>
      <h2>Calculation Summary:</h2>
      
      <div>
        Coupon "{discountResult.couponName}" applied! You saved{" "}
        {formatCurrency(discountResult.discount)}.
      </div>

      <div>
        <div>Original Bill Amount: {formatCurrency(discountResult.originalAmount)}</div>
        <div>Total Discount Applied: -{formatCurrency(discountResult.discount)}</div>
        <div>
          Final Payable Amount: {formatCurrency(discountResult.finalAmount)}
        </div>
      </div>
    </div>
  );
};

export default CalculationSummary;
