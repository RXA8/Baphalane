import Head from 'next/head';
import Link from 'next/link';

export default function Bojating() {
  return (
    <>
      <Head>
        <title>Bojating | Baphalane Community</title>
        <meta name="description" content="Information about the Bojating sub-village in Ramokokastad." />
      </Head>

      <main className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-green-900">Welcome to Bojating</h1>
          <p className="mb-6 text-lg">
            Bojating is one of the vibrant sub-villages within the Baphalane Community. This page provides key
            information about its culture, services, infrastructure, and initiatives that support its residents.
          </p>

          {/* Sample sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Community Highlights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Active youth programs</li>
              <li>Local health outreach</li>
              <li>Cultural celebrations and traditional practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
              Want to volunteer, donate, or participate in community events? Contact us through the{' '}
              <Link href="/#contact" className="text-green-700 underline hover:text-green-900">contact page</Link>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
