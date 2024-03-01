"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className="w-full h-16 mx-96 flex justify-center items-center bg-white border border-black rounded-lg" onClick={() => router.push("/login")}>
        Login
      </button>
    </div>
  );
}
