import React, { useState } from "react";
import axios from "axios";

function CreateRequestPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:8000/api/help-requests/",
                { title, description },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            alert("Request submitted successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to submit request.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a Help Request</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateRequestPage;
