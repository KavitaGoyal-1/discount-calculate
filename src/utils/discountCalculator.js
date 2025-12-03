export const calculateDiscount = (billAmount, couponConfig) => {
  if (!couponConfig || billAmount <= 0) {
    return { discount: 0, isValid: false };
  }

  if (billAmount < couponConfig.minOrder) {
    return { discount: 0, isValid: false };
  }

  let discount = 0;

  if (couponConfig.type === "flat") {
    discount = couponConfig.value;
  } else if (couponConfig.type === "percentage") {
    discount = (billAmount * couponConfig.value) / 100;

    if (
      couponConfig.maxDiscount !== null &&
      discount > couponConfig.maxDiscount
    ) {
      discount = couponConfig.maxDiscount;
    }
  }

  discount = Math.min(discount, billAmount);

  return { discount, isValid: true };
};
