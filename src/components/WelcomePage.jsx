import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div>
            <h1>Välkommen till hunddagiset</h1>
            <nav>
                <ul>
                    <li><Link to="/katalog">Katalog</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default WelcomePage;
