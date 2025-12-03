import { useState, useEffect } from "react";
import { parseCouponCode } from "../utils/couponParser";
import { calculateDiscount } from "../utils/discountCalculator";

export const useDiscountCalculator = (billAmount, couponCode) => {
  const [discountResult, setDiscountResult] = useState(null);

  useEffect(() => {
    const amount = parseFloat(billAmount) || 0;
    const couponConfig = parseCouponCode(couponCode);
    const result = calculateDiscount(amount, couponConfig);

    if (result.isValid && couponConfig) {
      setDiscountResult({
        couponName: couponConfig.displayName || couponCode,
        originalAmount: amount,
        discount: result.discount,
        finalAmount: amount - result.discount,
        description: couponConfig.description,
      });
    } else {
      setDiscountResult(null);
    }
  }, [billAmount, couponCode]);

  return discountResult;
};
