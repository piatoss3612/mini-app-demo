"use client";

import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/index"), { ssr: false });

export default function Home() {
  return <Main />;
}
