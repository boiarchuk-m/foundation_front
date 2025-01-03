import React, { useState, useEffect } from "react";
import axios from 'axios';
import api from "../api";
import { useNavigate, useParams } from 'react-router-dom';


const UpdateRequest = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        full_name: '',
        military_unit_number: '',
        phone_number: '',
        request_text: '',
        status: '',
        
      });
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            api.get(`/app/get/${id}/`)
            .then((res) => res.data)
            .then((data) => {
                setFormData(data);
                console.log(data);
                setLoading(false);
            })
            .catch((err) => alert(err));


        };
    
        fetchData();
      }, [id]);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =  api.put(`/app/requests/update/${id}/`, formData);
      console.log('Update Successful:', response.data);
      navigate('/home')
    } catch (error) {
      console.error('Error updating request:', error.response.data);
    }
  };

    return (
        <div>
        <h1>Виправлення запиту</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="full_name">ПІБ:</label>
            <br />
            <input
                type="text"
                id="full_name"
                name="full_name"
                required
                onChange={handleChange}
                value={formData.full_name || ''}
            />
             <label htmlFor="military_unit_number">Номер військової частини:</label>
            <br />
            <input
                type="text"
                id="military_unit_number"
                name="military_unit_number"
                required
                onChange={handleChange}
                value={formData.military_unit_number || ''}
            />
             <label htmlFor="phone_number">Номер телефону:</label>
            <br />
            <input
                type="text"
                id="phone_number"
                name="phone_number"
                required
                onChange={handleChange}
                value={formData.phone_number || ''}
            />


            <label htmlFor="request_text">Запит:</label>
            <br />
            <textarea
                id="request_text"
                name="request_text"
                required
                value={formData.request_text || ''}
                onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" value="Submit"></input>

        </form>
    </div>
    )
}

export default UpdateRequest;
