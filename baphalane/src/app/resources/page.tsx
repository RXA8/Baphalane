// app/resourcs/page.tsx
"use client";

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



export default function Resources() {

  return (
    <>
      <Head>
        <title>Resources | Baphalane</title>
        <meta
          name="description"
          content="Explore documents relevant to the Baphalane Community."
        />
      </Head>

      <Navbar />

      <Footer />
    </>
  );
}
