import Link from "next/link";

export default function NavBar() {
    return (
    <nav className="bg-black text-white p-4 flex gap-6 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
    </nav>
    );
}