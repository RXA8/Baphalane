import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Phalane() {
  return (
    <>
      <Head>
        <title>Phalane | Baphalane Community</title>
        <meta name="description" content="Information about the Phalane sub-village in Ramokokastad." />
      </Head>

      <Navbar />

      <main className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-green-900">Welcome to Phalane</h1>
          <p className="mb-6 text-lg">
            Phalane is a peaceful and close-knit sub-village of the Baphalane Community, rich in heritage and unity. 
            Here you’ll find traditions preserved and community values upheld across generations.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Community Highlights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Traditional dance groups and music festivals</li>
              <li>Community farming and agriculture initiatives</li>
              <li>Elders-led storytelling circles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
              Looking to support local efforts? Reach out via our{' '}
              <Link href="/#contact" className="text-green-700 underline hover:text-green-900">contact section</Link>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
