import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Phadi() {
  return (
    <>
      <Head>
        <title>Phadi | Coming Soon</title>
        <meta
          name="description"
          content="The Phadi page is coming soon. Stay tuned for updates from the Baphalane Community."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-green-900">Phadi</h1>
          <p className="text-lg mb-6">
            This page is under construction and will be available soon.
          </p>
          <p className="text-sm text-gray-600">
            Please check back later for updates about the Phadi sub-village in Ramokokastad.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
