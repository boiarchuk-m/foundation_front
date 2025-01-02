import { useState, useEffect } from "react";
import api from "../api";
import Request from "../components/Request"
import "../styles/Home.css"
import { useNavigate } from 'react-router-dom';

function CreateRequest() {
    const [requests, setRequests] = useState([]);
    const [full_name, setFullname] =useState(""); 
    const [military_unit_number, setMilitaryunit] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [request_text, setRequesttext] = useState("");
    const navigate = useNavigate();

    const createReqest = (e) => {
        e.preventDefault();
        api
            .post("/app/requests/", { full_name, military_unit_number, phone_number, request_text })
            .then((res) => {
                if (res.status === 201) alert("Запит створено!");
                else alert("Збій у створенні запиту.");
                
            })
            .catch((err) => alert(err));
         navigate("/home");
    };

    return (
        <div>
            <h2>Створення запиту</h2>
            <form onSubmit={createReqest}>
                <label htmlFor="full_name">ПІБ:</label>
                <br />
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
                    onChange={(e) => setFullname(e.target.value)}
                    value={full_name}
                />
                 <label htmlFor="military_unit_number">Номер військової частини:</label>
                <br />
                <input
                    type="text"
                    id="military_unit_number"
                    name="military_unit_number"
                    required
                    onChange={(e) => setMilitaryunit(e.target.value)}
                    value={military_unit_number}
                />
                 <label htmlFor="phone_number">Номер телефону:</label>
                <br />
                <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phone_number}
                />


                <label htmlFor="request_text">Запит:</label>
                <br />
                <textarea
                    id="request_text"
                    name="request_text"
                    required
                    value={request_text}
                    onChange={(e) => setRequesttext(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>

            </form>
        </div>
    );
}

export default CreateRequest;