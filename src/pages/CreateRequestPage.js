import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const RequestForm = ({ isEdit = false }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        military_unit_number: '',
        phone_number: '',
        commander_name: '',
        query: '',
        comment: ''
    });
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (isEdit && id) {
            axios.get(`/app/requests/${id}/`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => console.error(error));
        }
    }, [isEdit, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`/app/requests/${id}/`, formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            } else {
                await axios.post('/app/requests/', formData, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
            }
            history.push('/requests');
        } catch (error) {
            console.error(error);
            alert('Error');
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/app/requests/${id}/`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            history.push('/requests');
        } catch (error) {
            console.error(error);
            alert('Error deleting request');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required />
            <input type="text" name="military_unit_number" value={formData.military_unit_number} onChange={handleChange} placeholder="Military Unit Number" required />
            <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="commander_name" value={formData.commander_name} onChange={handleChange} placeholder="Commander Name" required />
            <textarea name="query" value={formData.query} onChange={handleChange} placeholder="Query" required />
            <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Comment" />
            <button type="submit">{isEdit ? 'Update Request' : 'Submit Request'}</button>
            {isEdit && <button type="button" onClick={handleDelete}>Delete Request</button>}
        </form>
    );
};

export default RequestForm;