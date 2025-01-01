import React, { useEffect, useState } from "react";
import axios from "axios";

function PersonalCabinetPage() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/help-requests/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setRequests(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div>
            <h1>My Requests</h1>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>
                        <h3>{request.title}</h3>
                        <p>{request.description}</p>
                        <p>Status: {request.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalCabinetPage;
