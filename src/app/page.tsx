import { Header, HomeSearch } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <span className="flex flex-col items-center justify-center mt-24">
        <Image src="/google.svg" alt="google logo" width={300} height={100} />
        <HomeSearch />
      </span>
    </main>
  );
}
