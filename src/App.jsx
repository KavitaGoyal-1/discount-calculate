import React, { useState } from "react";
import { useDiscountCalculator } from "./hooks/useDiscountCalculator";
import InputFields from "./components/InputFields";
import CommonCodesButtons from "./components/CommonCodesButtons";
import DiscountRuleDescription from "./components/DiscountRuleDescription";
import CalculationSummary from "./components/CalculationSummary";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [billAmount, setBillAmount] = useState("3456");
  const [couponCode, setCouponCode] = useState("100FF1000");
  const discountResult = useDiscountCalculator(billAmount, couponCode);

  const handleCouponClick = (code) => {
    setCouponCode(code);
  };

  const shouldShowError = !discountResult && billAmount && couponCode;

  return (
    <div>
      <h1>Simulate real-world discount logic for various coupon types using text codes.</h1>

      <InputFields
        billAmount={billAmount}
        onBillAmountChange={setBillAmount}
        couponCode={couponCode}
        onCouponCodeChange={setCouponCode}
      />

      <CommonCodesButtons 
        selectedCode={couponCode} 
        onCodeClick={handleCouponClick} 
      />

      {discountResult && (
        <>
          <DiscountRuleDescription description={discountResult.description} />
          <CalculationSummary discountResult={discountResult} />
        </>
      )}

      <ErrorMessage
        show={shouldShowError}
        message="Invalid coupon code or bill amount does not meet minimum order requirement."
      />
    </div>
  );
}

export default App;
