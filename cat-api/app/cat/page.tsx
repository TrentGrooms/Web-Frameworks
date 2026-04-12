"use client";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

interface Cat {
  url: string;
  breeds: {
    name: string;
    description: string;
  }[];
}

export default function CatPage() {
  const [cat, setCat] = useState<Cat | null>(null);
  const fetchData = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?has_breeds=1",
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
        },
      },
    );
    const data = await res.json();
    setCat(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <NavBar />
      {cat?.breeds && cat.breeds.length > 0 && (
        <>
          <img src={cat.url} alt="Cat" className="rounded-lg shadow-lg" width={400} height={400} />
          <div className="mt-4">
            <h2 className="text-xl font-bold">{cat.breeds[0].name}</h2>
            <p>{cat.breeds[0].description}</p>
          </div>
          <button onClick={fetchData} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Load New Cat</button>
          
        </>
      )}
    </div>
  );
}
