
export default function Navbar() {
    return (
        <>
            <nav className="mainNav">
                <a href="/"><img class="nav-logo" src="./mediacontent/logos/F1-white.svg"/></a>
                <ul>

                    <li>
                        <a class="nav" href="/news">News</a>
                        <a class="nav" href="/schedule">Schedule</a>
                        <a class="nav" href="/teamsDrivers">Teams & Drivers</a>
                        <a class="nav" href="/results">Results</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}