import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <h1>Welcome to the Foundation App</h1>
            <nav>
                <Link to="/register">Register/Login</Link> |{" "}
                <Link to="/create-request">Create Request</Link> |{" "}
                <Link to="/cabinet">Personal Cabinet</Link> |{" "}
                <Link to="/manager">Manager Dashboard</Link>
            </nav>
        </div>
    );
}

export default MainPage;