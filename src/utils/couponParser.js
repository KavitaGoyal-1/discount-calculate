export const parseCouponCode = (code) => {
  if (!code) return null;

  const upperCode = code.toUpperCase();

  if (upperCode === "100FF1000" || upperCode === "10OFF1000") {
    return {
      type: "percentage",
      value: 10,
      minOrder: 1000,
      maxDiscount: null,
      description:
        "% 10% OFF Flat 10% off on orders above $1000 (Min Order: $1000.00)",
      displayName: "10OFF1000",
    };
  }

  if (upperCode === "FLAT25USD") {
    return {
      type: "flat",
      value: 25,
      minOrder: 0,
      maxDiscount: null,
      description: "$ Flat $25 discount on any order",
    };
  }

  if (upperCode === "20MAX200") {
    return {
      type: "percentage",
      value: 20,
      minOrder: 0,
      maxDiscount: 200,
      description: "% 20% OFF Maximum discount of $200.00",
    };
  }

  if (upperCode === "40MAX200") {
    return {
      type: "percentage",
      value: 40,
      minOrder: 0,
      maxDiscount: 200,
      description: "% 40% OFF Maximum discount of $200.00",
    };
  }

  if (upperCode === "13MAX2000") {
    return {
      type: "percentage",
      value: 13,
      minOrder: 0,
      maxDiscount: 2000,
      description: "% 13% OFF Maximum discount of $2000.00",
    };
  }

  return null;
};
