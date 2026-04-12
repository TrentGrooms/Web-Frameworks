import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4">
      <div className="flex items-center gap-8">
        <h1 className="navbar-title text-xl font-bold">Cat API</h1>

        <div className="flex gap-6">
          <Link href="/" className="navbar-link hover:text-gray-300">
            Home
          </Link>

          <Link href="/cat" className="navbar-link hover:text-gray-300">
            Cats
          </Link>
        </div>
      </div>
    </nav>
  );
}
