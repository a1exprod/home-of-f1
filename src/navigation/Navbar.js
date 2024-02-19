import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="mainNav">
                <Link to="/home-of-f1"><img class="nav-logo" src="./mediacontent/logos/F1-white.svg"/></Link>
                <ul>

                    <li>
                        <Link to="/home-of-f1" className="nav">Home</Link>
                        <Link to="/home-of-f1/pages/schedule" className="nav">Schedule</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}