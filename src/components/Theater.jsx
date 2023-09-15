import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Theater = () => {
  const navigate = useNavigate();

  const handelerChicketCounter = () => {
    navigate("/thicket-counter");
  };

  return (
    <div>
      <h1>Go to thicket counter</h1>

      <button onClick={handelerChicketCounter}>Thicket Counter</button>
    </div>
  );
};

export default Theater;
