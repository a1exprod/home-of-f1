
export default function Navbar() {
    return (
        <>
            <nav className="mainNav">
                <a href="/"><img class="nav-logo" src="./mediacontent/logos/F1-white.svg"/></a>
                <ul>

                    <li>
                    <a className="nav" href="/">Home</a>
<a className="nav" href="/schedule">Schedule</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}