import React, { useEffect } from 'react';
import "./PrisonerComponent.css";

function PrisonerComponent({ chosen_prisoner, onExit }) {
  useEffect(() => {
    return () => {
      onExit();
    };
  });

  return (
    <div className="divv">
      <h1>{chosen_prisoner.firstName}</h1>
      <h1>{chosen_prisoner.lastName}</h1>
      <h1>{chosen_prisoner.pesel}</h1>
      <h1>{chosen_prisoner.reason}</h1>
      <h1>{chosen_prisoner.explanation}</h1>
    </div>
  );
}

export default PrisonerComponent;