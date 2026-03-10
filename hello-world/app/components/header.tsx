export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
