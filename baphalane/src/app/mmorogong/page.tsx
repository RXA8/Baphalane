import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Mmorogong() {
  return (
    <>
      <Head>
        <title>Mmorogong | Baphalane Community</title>
        <meta name="description" content="Information about the Mmorogong sub-village in Ramokokastad." />
      </Head>

      <Navbar />

      <main className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-green-900">Welcome to Mmorogong</h1>
          <p className="mb-6 text-lg">
            Mmorogong is a sub-village that thrives on innovation and resilience. From educational development to
            sustainable practices, Mmorogong is a symbol of progress within Baphalane.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Community Highlights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>After-school learning programs for youth</li>
              <li>Green energy and environmental awareness</li>
              <li>Craft and skill development workshops</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
              Join hands with us to support our goals. Visit the{' '}
              <Link href="/#contact" className="text-green-700 underline hover:text-green-900">contact page</Link> to connect.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
