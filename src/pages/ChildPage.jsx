import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ChildPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleBack}> Back</button>
    </div>
  );
};

export default ChildPage;
