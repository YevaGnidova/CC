import "./PrisonersComponent.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PrisonersComponent() {
    const [prisoners, setPrisoners] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem("user");
        if (user) {
            try {
                user = JSON.parse(user);
                if (user.isAuth) {
                    return;
                }
            } catch (err) {
                console.log(err);
            }
        }
        navigate("/")
    }, [])

    useEffect(() => {
        const fetchPrisoners = async () => {
            try {
                const response = await axios.get('/api/prisoners', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                });
                setPrisoners(response.data);
            } catch (error) {
                console.error('Failed to fetch prisoners:', error);
            }
        };

        fetchPrisoners();
    }, []);

    return (
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
                    {prisoners.map(prisoner => (
                        <tr key={prisoner._id}>
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