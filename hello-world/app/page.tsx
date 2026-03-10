import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-wrap justify-center gap-4 p-8">
        <Card image="/cat.jpg" title="Cat" description="cat riding a skateboard" />
        <Card image="/kitten.jpg" title="Kitten" description="kitten playing with a ball" />
      </main>
      <Footer />
    </div>
  );
}
