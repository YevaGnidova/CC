import "./PrisonersComponent.css";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PrisonersComponent(props) {
  const navigate = useNavigate();

  async function jumpPrisonerPage(prisonerID) {
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
      <h2>Lista więźniów</h2>
      <table className="prisoners-table">
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>PESEL</th>
            <th>Причина</th>
          </tr>
        </thead>
        <tbody>
          {props.prisoners.map(prisoner => (
            <tr onClick={() => jumpPrisonerPage(prisoner._id)} className="prisonerdata" key={prisoner._id}>
              <td>{prisoner.firstName}</td>
              <td>{prisoner.lastName}</td>
              <td>{prisoner.pesel}</td>
              <td>{prisoner.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrisonersComponent;

/*
import "./PrisonersComponent.css"
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PrisonersComponent(props) {
    const navigate = useNavigate();

    async function jumpPrisonerPage(prisonerID) {
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
        <>
        <div className="prisoners-container">
            <h2>Lista więźniów</h2>
            <table className="prisoners-table">
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>PESEL</th>
                        <th>Przyczyna</th>
                    </tr>
                </thead>
                <tbody>
                    {props.prisoners.map(prisoner => (
                        <tr onClick={() => jumpPrisonerPage(prisoner._id)} className="prisonerdata" key={prisoner._id}>
                            <td>{prisoner.firstName}</td>
                            <td>{prisoner.lastName}</td>
                            <td>{prisoner.pesel}</td>
                            <td>{prisoner.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </>
    );
}

export default PrisonersComponent;
*/