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

/*
import axios from 'axios';
import "./PrisonerComponent.css"

function PrisonerComponent(props) {
    async function restorePrisoners() {
        try {
            const response = await axios.get("/api/prisoners");
            const chosen_prisoner = response.data.find(prisoner => prisoner.is_chosen);
            delete chosen_prisoner.is_cohsen
            await axios.put(`/prisoners/prisoner-${props.chosen_prisoner._id}`, {
                chosen_prisoner
            })
        } catch (error) {
            console.error('Failed to update prisoner:', error);
        }
    }
    restorePrisoners();
    
    return (
        <>
            <h1>{props.chosen_prisoner.firstName}</h1>
        </>
    );
}

export default PrisonerComponent;
*/