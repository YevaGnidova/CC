import React, { useEffect } from 'react';
import "./PrisonerComponent.css";

function PrisonerComponent({ chosen_prisoner, onExit }) {
  useEffect(() => {
    return () => {
      onExit();
    };
  });

  return (
    <>
      <h1>{chosen_prisoner.firstName}</h1>
    </>
  );
}

export default PrisonerComponent;