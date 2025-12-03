import React from "react";

const DiscountRuleDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div>
      <div>{description}</div>
    </div>
  );
};

export default DiscountRuleDescription;
