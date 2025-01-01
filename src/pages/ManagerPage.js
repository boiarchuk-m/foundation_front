import React, { useEffect, useState } from "react";
import axios from "axios";

function ManagerPage() {
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

    const updateStatus = async (id, status) => {
        try {
            await axios.patch(
                `http://localhost:8000/api/help-requests/${id}/`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setRequests((prevRequests) =>
                prevRequests.map((req) =>
                    req.id === id ? { ...req, status } : req
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Manager Dashboard</h1>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>
                        <h3>{request.title}</h3>
                        <p>{request.description}</p>
                        <p>Status: {request.status}</p>
                        <button onClick={() => updateStatus(request.id, "approved")}>Approve</button>
                        <button onClick={() => updateStatus(request.id, "clarification")}>
                            Need Clarification
                        </button>
                        <button onClick={() => updateStatus(request.id, "denied")}>Deny</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManagerPage;
