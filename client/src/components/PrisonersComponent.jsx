import "./PrisonersComponent.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import done from "../assets/done.png"
import cancel from "../assets/cancel.png"

function PrisonersComponent(props) {
  const [isRead, setRead] = useState(true);
  const [isUpdate, setUpdate] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [chosenID, setChosenID] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pesel, setPesel] = useState("");
  const [reason, setReason] = useState("");
  const [explanation, setExplanation] = useState("");

  const navigate = useNavigate();
  
  function returnList(prisoner, prisonerID) {
    if (prisonerID === chosenID) return (<tr key={prisoner._id}>
      <td>
        <input className={""} onChange={e => setName(e.target.value)} placeholder="imię"/>
      </td>
      <td>
        <input className={""} onChange={e => setSurname(e.target.value)} placeholder="nazwisko"/>
      </td>
      <td>
        <input className={""} onChange={e => setPesel(e.target.value)} placeholder="pesel"/>
      </td>
      <td>
        <input className={""} onChange={e => setReason(e.target.value)} placeholder="przyczyna"/><br/>
        <textarea className={""} onChange={e => setExplanation(e.target.value)} placeholder="wyjaśnienie"/>
      </td>
      <td className={""}>
        <img onClick={() => updatePrisoner(prisoner._id)} src={done} className="update-img"/><br />
        <img onClick={() => setChosenID("")} src={cancel} className="update-img"/>
      </td>
    </tr>)
    else return (
      <tr onClick={() => catchCRUD(prisoner._id)} className="prisonerdata" key={prisoner._id}>
      <td>
        {prisoner.firstName}
      </td>
      <td>
        {prisoner.lastName}
      </td>
      <td>
        {prisoner.pesel}
      </td>
      <td>
        {prisoner.reason}
      </td>
    </tr>
    )
  }

  function useFunction(func) {
    if (func === "update") {
      setUpdate(true);
      setDelete(false);
      setRead(false);
      setChosenID("");
      props.fetcher();
    } else if (func === "delete") {
      setUpdate(false);
      setDelete(true);
      setRead(false);
      setChosenID("");
      props.fetcher();
    } else {
      setUpdate(false);
      setDelete(false);
      setRead(true);
      setChosenID("");
      props.fetcher();
    }
  }

  function catchCRUD(prisonerID) {
    if (isUpdate) setChosenID(prisonerID);
    else if (isDelete) deletePrisoner(prisonerID);
    else readPrisonerData(prisonerID);
  }

  async function readPrisonerData(prisonerID) {
    try {
      await axios.patch(`/api/prisoners/${prisonerID}`, {
        is_chosen: true
      });
      props.fetcher();
      navigate(`/prisoners/prisoner-${prisonerID}`);
    } catch (error) {
      console.error('Failed to update prisoner:', error);
    }
  }

  async function deletePrisoner(prisonerID) {
    try {
      await axios.delete(`/api/prisoners/${prisonerID}`);
      props.fetcher();
    } catch (error) {
      console.log(`There was a problem with deleting the user: ${error.message}`)
    }
  }

  async function updatePrisoner(prisonerID) {
    try {
      await axios.put(`/api/prisoners/${prisonerID}`, {
        firstName: name,
        lastName: surname,
        pesel: pesel,
        reason: reason,
        explanation: explanation
      });
      
      setChosenID("");
      props.fetcher();
    } catch (error) {
      console.log(`There was a problem with updateing the user: ${error.message}`);
    }
  }

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      try {
        user = JSON.parse(user);
        if (user.isAuth) return;
        else navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <div className="prisoners-container">
      <div className="container-header">
        <h2>Lista więźniów</h2>
        <div>
          <button onClick={() => useFunction("update")}>AKTUALIZUJ</button>
          <button onClick={() => useFunction("read")}>CZYTAJ</button>
          <button onClick={() => useFunction("delete")}>USUŃ</button>
        </div>
      </div>
      <table className="prisoners-table">
        <thead>
          <tr>
            <th>IMIĘ</th>
            <th>NAZWISKO</th>
            <th>PESEL</th>
            <th>PRZYCZYNA</th>
          </tr>
        </thead>
        <tbody>
          {props.prisoners.map(prisoner => (
            returnList(prisoner, prisoner._id)
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrisonersComponent;

/*
[
{
  "firstName": "John",
  "lastName": "Johnish",
  "pesel": "12345678910",
  "reason": "laying"
},

{
  "firstName": "Martin",
  "lastName": "Martinish",
  "pesel": "10987654321",
  "reason": "killing"
},

{
  "firstName": "George",
  "lastName": "Georgeish",
  "pesel": "10293847560",
  "reason": "theft"
}
]
*/