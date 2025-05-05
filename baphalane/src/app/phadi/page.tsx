import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Phadi() {
  return (
    <>
      <Head>
        <title>Phadi | Baphalane Community</title>
        <meta name="description" content="Information about the Phadi sub-village in Ramokokastad." />
      </Head>

      <Navbar />

      <main className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-green-900">Welcome to Phadi</h1>
          <p className="mb-6 text-lg">
            Phadi is a sub-village deeply rooted in nature and community spirit. Surrounded by scenic beauty, it&aposs home
            to many local artisans and a growing movement toward cultural tourism.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Community Highlights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nature-based community projects</li>
              <li>Artisan craft markets</li>
              <li>Eco-tourism opportunities and trails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
              Want to support Phadi’s growth? Head to the{' '}
              <Link href="/#contact" className="text-green-700 underline hover:text-green-900">contact section</Link> and reach out.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
