import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Request"
import "../styles/Home.css"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Home() {
    const [requests, setRequests] = useState([]);
    const [full_name, setFullname] =useState(""); 
    const [military_unit_number, setMilitaryunit] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [request_text, setRequesttext] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getRequests();
    }, []);

    const getRequests = () => {
        api
            .get("/app/requests/")
            .then((res) => res.data)
            .then((data) => {
                setRequests(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteRequest = (id) => {
        api
            .delete(`/app/requests/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getRequests();
            })
            .catch((error) => alert(error));
    };




    return (
        <div>
            <nav>
                <Link to="/login">Увійти</Link> |{" "}
                <Link to="/note">Створити запит</Link> |{" "}
                <Link to="/">Головна сторінка</Link> |{" "}
            </nav>
          <h1>Запити</h1>
          <ul>
            {requests.map((request) => (
              <li key={request.id}>
                <h3>{request.request_text}</h3>
                <p class='status'>{request.status}</p>
                <button onClick={() => deleteRequest(request.id)}>Delete</button>
                <Link className='update' to={`/update/${request.id}`}>Update</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };



export default Home;