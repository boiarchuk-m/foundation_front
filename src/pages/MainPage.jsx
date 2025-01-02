import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainPage.css";

function MainPage() {
    return (
        <div>
            <header>

            <h1>Благодійний фонд</h1>
            </header>
            <nav>
                <Link to="/login">Увійти</Link> |{" "}
                <Link to="/note">Створити запит</Link> |{" "}
            </nav>
            <div className="main-content">
                <h1>Благодійний фонд "Український щит"</h1>
                <h2>Разом до перемоги!</h2>
                <p>Ми – одна велика родина. Підтримаймо один одного! 
                    Відкрий запит на допомогу, замов окопні свічки, стань волонтером 
                    або зроби донат. Кожна твоя дія наближає нашу перемогу.</p>
            </div>
        </div>
    );
}

export default MainPage;