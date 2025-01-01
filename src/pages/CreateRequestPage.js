import React, { useState } from "react";
import axios from 'axios';

const CreateRequest = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        military_unit_number: "",
        phone_number: "",
        commander_full_name: "",
        request_detail: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/requests/", formData);
            window.location = "/requests";
        } catch (error) {
            console.error("Failed to create request:", error);
        }
    };

    return (
        <div>
            <h1>Create Request</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input name="full_name" value={formData.full_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Military Unit Number</label>
                    <input name="military_unit_number" value={formData.military_unit_number} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div>
                    <label>Commander Full Name</label>
                    <input name="commander_full_name" value={formData.commander_full_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Request</label>
                    <textarea name="request_detail" value={formData.request_detail} onChange={handleChange} required />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea name="comment" value={formData.comment} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateRequest;