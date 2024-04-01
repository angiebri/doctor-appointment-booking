import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySeach from "./_components/CategorySeach";

export default function Home() {
  return (
    <div>
      <Hero />

      <CategorySeach />
    </div>
  );
}
