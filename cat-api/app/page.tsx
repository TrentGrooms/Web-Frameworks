import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-0">
      <NavBar />
      <h1 className="text-4xl font-bold mb-8 p-10">Welcome to the Cat API</h1>
      <p className="text-lg">Go to the cats page to get random cat breeds with images and descriptions.</p>
    </div>
  );
}
