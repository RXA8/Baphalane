// Create a coming soon page for the website media
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';   

export default function Media() {
    return (
        <>
            <Head>
                <title>Media | Coming Soon</title>
                <meta
                    name="description"
                    content="The Media page is coming soon. Stay tuned for updates from the Baphalane Community."
                />
            </Head>
            <Navbar />
            <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Media</h1>
                    <p className="text-lg">Coming Soon</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
