import React from "react";

const ErrorMessage = ({ show, message }) => {
  if (!show) return null;

  return <div>{message}</div>;
};

export default ErrorMessage;
