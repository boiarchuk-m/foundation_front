import React from "react";
import "../styles/Home.css"

function Request({ request, onDelete }) {
    const formattedDate = new Date(request.created_at).toLocaleDateString("en-US")

    return (
        <div className="request-container">
            <p className="request-date">{formattedDate}</p>
            <p full_name="request-fullname">{request.full_name}</p>
            <p military_unit_number="request-militaryunit">{request.military_unit_number}</p>
            <p phone_number="request-phonenumber">{request.phone_number}</p> 
            <p request_text="request-text">{request.request_text}</p>


            <button className="delete-button" onClick={() => onDelete(request.id)}>
                Delete
            </button>
        </div>
    );
}

export default Request;