"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "section1", title: "1. District" },
  { id: "section2", title: "2. Tribe" },
  { id: "section3", title: "3. Chief" },
  { id: "section4", title: "4. Language" },
  { id: "section5", title: "5. Land & Population" },
  { id: "section6", title: "6. History and genealogies of chiefs"},
  { id: "section7", title: "7. Regiments (Mephato)"},
  { id: "section8", title: "8. Political Organization"},
  { id: "section9", title: "9. Social Organization"},
  { id: "section10", title: "10. Beliefs and Sacred Practices"},
  { id: "section11", title: "11. Churches and Schools"},
  { id: "section12", title: "12. Mode of Settlement"},
  { id: "section13", title: "13. Material Culture"},
  { id: "section14", title: "14. Tribal Marks and Dress"},
  { id: "section15", title: "15. Cattle and Pastoralism"},
  { id: "section16", title: "16. Agriculture"},
  { id: "section17", title: "17. Economics"},
  { id: "section18", title: "18. Health"},
  { id: "section19", title: "19. Comunity protests and Legal History"},
]

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HistoryPage() {
    const [active, setActive] = useState("section1")
  const [collapsed, setCollapsed] = useState(true) // starts collapsed

  const [progress, setProgress] = useState(0)

  // Scroll spy with Intersection Observer
    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActive(entry.target.id); // highlight active section
            }
        });
        },
        { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    }, []);


  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (window.scrollY / totalHeight) * 100
      setProgress(scrollProgress)

      if (window.scrollY > 120) setCollapsed(true)
      else setCollapsed(true)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images/history%20background.jpg')" }}>

        <Navbar />

        {/* Progress bar - fixed on top of page */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
            <div
                className="h-1 bg-yellow-500 transition-all duration-150 ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>

        {/* Overlay */}
        <div className="bg-black/60 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">

        {/* MOBILE TOC SIDE BUTTON */}
        <div className="md:hidden">
        {/* Floating button (toggles TOC open/close) */}
        <button
            onClick={() => setCollapsed(!collapsed)} // toggle
            className="fixed top-24 right-4 z-[999] bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300"
            aria-label="Toggle Table of Contents"
        >
            ☰
        </button>

        {/* Sliding panel */}
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur z-[998] shadow-lg transform transition-transform duration-300 ${
            collapsed ? "translate-x-full" : "translate-x-0"
            }`}
        >
            {/* Close button + Heading */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Contents</h2>
            <button
                onClick={() => setCollapsed(true)}
                className="text-gray-700 font-bold text-lg"
                aria-label="Close Table of Contents"
            >
                ✕
            </button>
            </div>

            {/* TOC content (scrollable) */}
            <div className="overflow-y-auto h-[calc(100%-64px)] px-4 py-6">
            <ul className="space-y-3 text-sm">
                {sections.map((s) => (
                <li key={s.id}>
                    <a
                    href={`#${s.id}`}
                    className={`block px-2 py-2 rounded transition ${
                        active === s.id
                        ? "bg-yellow-100 text-yellow-700 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setCollapsed(true)} // close after selecting
                    >
                    {s.title}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>

          {/* Page Title */}
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our History
            </h1>
            <p className="text-lg text-gray-200">
              Explore the historical background and origins of the Baphalane people.
            </p>
          </div>

          {/* Layout with TOC + Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {/* TABLE OF CONTENTS */}
            <aside className="md:col-span-1 md:sticky md:top-4 h-fit">
            <div className="hidden md:block bg-white/90 backdrop-blur border rounded-xl shadow-sm z-[998]">
                <h3 className="font-semibold mb-4 text-gray-800 px-5 pt-5">Contents</h3>

                {/* Scrollable TOC */}
                <div className="overflow-y-auto max-h-[calc(100vh-6rem)] px-5 pb-5">
                <ul className="space-y-2 text-sm">
                    {sections.map((s) => (
                    <li key={s.id}>
                        <a
                        href={`#${s.id}`}
                        className={`block px-3 py-2 rounded transition ${
                            active === s.id
                            ? "bg-yellow-100 text-yellow-700 font-semibold border-l-4 border-yellow-500"
                            : "hover:bg-gray-100"
                        }`}
                        >
                        {s.title}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="md:col-span-3 space-y-12">

                {/* Section 1 */}
                <section
                    id="section1"
                    className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                >
                    <h2 className="text-2xl font-bold text-yellow-700 mb-4">
                    1. District
                    </h2>

                    <div className="border-l-4 border-yellow-600 pl-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Pilanesberg, Transvaal.
                    </p>
                    </div>
                </section>

                {/* Section 2 */}
                <section
                    id="section2"
                    className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                >
                    <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    2. Name of Tribe
                    </h2>

                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                        <span className="font-semibold">Tribe:</span> baKwena baPhalane
                    </p>

                    <p>
                        <span className="font-semibold">Totem:</span> kwena (crocodile)
                    </p>

                    <p>
                        <span className="font-semibold">Other tribes:</span> Nine other tribes,
                        for example those living in Bechuanaland Protectorate, call them
                        baTlase.
                    </p>

                    <p>
                        <span className="font-semibold">Classification:</span> This tribe is
                        listed as No. 33–24 in &ldquo;A preliminary Survey of the Bantu tribes of S.A.&rdquo;
                    </p>
                    </div>
                </section>

                {/* Section 3 */}
                <section
                    id="section3"
                    className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                >
                    <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    3. First Chief  
                    </h2>

                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                        <span className="font-semibold">Name:</span> Pukwe
                    </p>

                    <p>
                        <span className="font-semibold">Reign began in:</span> Beginning of the 18th century
                    </p>
                    </div>
                </section>

                {/* Section 4 */}
                <section
                    id="section4"
                    className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                    >
                    <h2 className="text-2xl font-bold text-yellow-700 mb-4">
                        4. Language
                    </h2>

                    <div className="border-l-4 border-yellow-600 pl-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                        Eastern Tswana.
                        </p>
                    </div>
                </section>
  
                {/* Section 5 */}
                <section
                id="section5"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    5. Land and Strength of Population
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Ramakoka&apos;s Location is situated in the eastern half of the Pilanesberg
                    district, 38 miles north of Rustenburg.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Farms owned by the tribe
                </h3>

                {/* Farms owned by the tribe */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left text-gray-700">
                    <thead className="bg-yellow-50">
                        <tr>
                        <th className="border p-3">Farm</th>
                        <th className="border p-3">Morgen</th>
                        <th className="border p-3">Square yards</th>
                        <th className="border p-3">Portion</th>
                        <th className="border p-3">Tswana Name / Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border p-3">Elandsfontein</td>
                        <td className="border p-3">2,629</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3">Bojating</td>
                        </tr>

                        <tr>
                        <td className="border p-3">Geluk</td>
                        <td className="border p-3">2,123</td>
                        <td className="border p-3"></td>
                        <td className="border p-3">23 Morgen belong to the Hermannsburg Mission</td>
                        <td className="border p-3"></td>
                        </tr>

                        <tr>
                        <td className="border p-3">Gevonden</td>
                        <td className="border p-3">80</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        </tr>

                        <tr>
                        <td className="border p-3">Ramakokaskraal</td>
                        <td className="border p-3">2,945</td>
                        <td className="border p-3">479</td>
                        <td className="border p-3"></td>
                        <td className="border p-3">Phalane</td>
                        </tr>

                        <tr>
                        <td className="border p-3">Schilpadnest (Thabazimbi subdistrict) </td>
                        <td className="border p-3">2,200</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"> </td>
                        <td className="border p-3">Mmamodimokwana </td>
                        </tr>

                        <tr>
                        <td className="border p-3">Tweelaagte</td>
                        <td className="border p-3">630</td>
                        <td className="border p-3">549</td>
                        <td className="border p-3"></td>
                        <td className="border p-3">Ratumuga</td>
                        </tr>

                        <tr>
                        <td className="border p-3">Vogelstruisnek</td>
                        <td className="border p-3">230</td>
                        <td className="border p-3"></td>
                        <td className="border p-3">D1</td>
                        <td className="border p-3"> Module</td>
                        </tr>
 
                    </tbody>
                    </table>
                </div>

                {/*Native privately-owned land*/}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                    Privately-owned Native Land
                    </h3>

                    <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left text-gray-700">
                        <thead className="bg-yellow-50">
                        <tr>
                        <th className="border p-3">Farm</th>
                        <th className="border p-3">Morgen</th>
                        <th className="border p-3">Square yards</th>
                        <th className="border p-3">Portion</th>
                        <th className="border p-3">Tswana Name / Notes</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <td className="border p-3">Haakdoornbult  (Thabazimbi subdistrict)</td>
                            <td className="border p-3">742</td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                            <td className="border p-3">kwa Phadi</td>
                        </tr>

                        <tr>
                            <td className="border p-3">Rhenosterspruit (Native private owned )</td>
                            <td className="border p-3">531</td>
                            <td className="border p-3">199</td>
                            <td className="border p-3">Two portions</td>
                            <td className="border p-3">Makgopaneng</td>
                        </tr>

                        <tr>
                            <td className="border p-3">Ruighoek </td>
                            <td className="border p-3">421</td>
                            <td className="border p-3"></td>
                            <td className="border p-3">One portion</td>
                            <td className="border p-3">Tlhatlaganyane</td>
                        </tr>

                        <tr>
                            <td className="border p-3">Native private owned in Pilanesburg district </td>
                            <td className="border p-3">1362</td>
                            <td className="border p-3">199</td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                {/* Land owned in Rustenburg */}
                                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Land owned in Rustenburg
                </h3>

                <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-left text-gray-700">
                    <thead className="bg-yellow-50">
                    <tr>
                        <th className="border p-3">Farm</th>
                        <th className="border p-3">Morgen</th>
                        <th className="border p-3">Square yards</th>
                        <th className="border p-3">Portion</th>
                        <th className="border p-3">Tswana Name / Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border p-3">Boschpoort</td>
                        <td className="border p-3"></td>
                        <td className="border p-3"></td>
                        <td className="border p-3">Privately owned by 200 Natives, mainly baKwena baMogopa, also by baPhalane</td>
                        <td className="border p-3"></td>
                    </tr>

                    <tr>
                        <td className="border p-3">Nooitgedacht</td>
                        <td className="border p-3">1111</td>
                        <td className="border p-3">166</td>
                        <td className="border p-3">Portion B</td>
                        <td className="border p-3"> Rankelenyane</td>
                    </tr>

                    <tr>
                        <td className="border p-3">Roodekraalspruit</td>
                        <td className="border p-3">996</td>
                        <td className="border p-3"></td>
                        <td className="border p-3">Portion B</td>
                        <td className="border p-3">Maile wa Phalane </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                {/* Geography and Environmental Description */}
                <div className="mt-10 space-y-6">

                <h3 className="text-xl font-semibold text-gray-800">
                    Geography and Environment
                </h3>

                <p className="text-gray-700 leading-relaxed">
                    The northern part of Ramakoka&apos;s Location is hilly, and it is the valleys
                    of this part which are under cultivation, whilst the southern part of the
                    location consists of flat grazing land. The chief&apos;s place is called
                    Phalane.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    A dry stream, Zandsloot, a tributary of the,
                    passes through the location from west to east. To the north of the chief&apos;s
                    place is a mountain called Nawane. From there to the west extends a row of
                    hills called Marapalong (twin hills), Ramoloreng, Tshipi (closely adjoining
                    each other), a more distant hill whose name is unknown, Ntshusu (twin hills),
                    and Mogadibe.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                    <p className="text-gray-700">
                    <span className="font-semibold">Altitude:</span> The altitude of Ramakoka&apos;s
                    Location is approximately 3500 ft on Elandsfontein, with the central part
                    being somewhat lower.
                    </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                    The annual rainfall recorded for about ten years prior to 1935 on Vaalkop
                    (Station No. 1442), five miles east of Elandsfontein, was 18.81 inches on
                    39 days. Schilpadnest, located 25 miles NNW from Ramakoka&apos;s Location,
                    has an altitude of less than 3500 ft, and the nearest rain station,
                    Maroelasfontein, recorded (prior to 1935) an annual rainfall of 19.46 inches
                    on 53 days.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Nooitgedacht, 28 miles due south of Ramakoka&apos;s Location, has an altitude
                    of 3300 ft and the nearest rain station (No. 1421), Kafferskraal
                    recorded prior to 1935 an annual rainfall of 22.68 inches on 64 days.
                    On Nooitgedacht there is good black soil, and the farm is partly surrounded
                    by hills.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    As part of the tribe lives scattered on private farms where the people are
                    intermixed with members of other tribes, it is difficult to state what the
                    total strength of the tribe is. The census of 1946 gives the following
                    figures:
                </p>

                </div>

                <div id="section5-census" className="mt-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    Census Figures (1946–1950)
                </h4>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    As part of the tribe lives scattered on private farms where the people are
                    intermixed with members of other tribes, it is difficult to state what the
                    total strength of the tribe is. The census of 1946 gives the following
                    figures:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="border px-4 py-2 text-left">Location</th>
                        <th className="border px-4 py-2 text-left">Total</th>
                        <th className="border px-4 py-2 text-left">Males</th>
                        <th className="border px-4 py-2 text-left">Females</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border px-4 py-2">Ramakoka&apos;s Location</td><td className="border px-4 py-2">1072</td><td className="border px-4 py-2">474</td><td className="border px-4 py-2">598</td></tr>
                        <tr><td className="border px-4 py-2">Vogelstruisnek</td><td className="border px-4 py-2">200</td><td className="border px-4 py-2">80</td><td className="border px-4 py-2">120</td></tr>
                        <tr><td className="border px-4 py-2">Tweelaagte</td><td className="border px-4 py-2">200</td><td className="border px-4 py-2">80</td><td className="border px-4 py-2">120</td></tr>
                        <tr><td className="border px-4 py-2">Ruighoek</td><td className="border px-4 py-2">46</td><td className="border px-4 py-2">20</td><td className="border px-4 py-2">26</td></tr>
                        <tr><td className="border px-4 py-2">On Trust farms</td><td className="border px-4 py-2">88</td><td className="border px-4 py-2">47</td><td className="border px-4 py-2">41</td></tr>
                        <tr><td className="border px-4 py-2">Schilpadnest</td><td className="border px-4 py-2">233</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">—</td></tr>
                        <tr><td className="border px-4 py-2">(Thabazimbi subdistrict)</td><td className="border px-4 py-2">778</td><td className="border px-4 py-2">333</td><td className="border px-4 py-2">445</td></tr>
                        <tr><td className="border px-4 py-2">Haakdoornbult</td><td className="border px-4 py-2">145</td><td className="border px-4 py-2">75</td><td className="border px-4 py-2">70</td></tr>
                        <tr><td className="border px-4 py-2">On European farms</td><td className="border px-4 py-2">80</td><td className="border px-4 py-2">50</td><td className="border px-4 py-2">30</td></tr>

                        <tr className="bg-gray-50 font-semibold"><td className="border px-4 py-2">Total 1946</td><td className="border px-4 py-2">2609</td><td className="border px-4 py-2">1159</td><td className="border px-4 py-2">1450</td></tr>
                        <tr className="bg-gray-50 font-semibold"><td className="border px-4 py-2">Total 1950</td><td className="border px-4 py-2">3000</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">—</td></tr>
                    </tbody>
                    </table>
                </div>

                <h5 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                    Rustenburg N.A. District
                </h5>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="border px-4 py-2 text-left">Location</th>
                        <th className="border px-4 py-2 text-left">Total</th>
                        <th className="border px-4 py-2 text-left">Males</th>
                        <th className="border px-4 py-2 text-left">Females</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border px-4 py-2">Nooitgedacht</td><td className="border px-4 py-2">155</td><td className="border px-4 py-2">79</td><td className="border px-4 py-2">76</td></tr>
                        <tr><td className="border px-4 py-2">Roodekraalspruit</td><td className="border px-4 py-2">230</td><td className="border px-4 py-2">100</td><td className="border px-4 py-2">130</td></tr>
                        <tr><td className="border px-4 py-2">On Trust farms</td><td className="border px-4 py-2">194</td><td className="border px-4 py-2">96</td><td className="border px-4 py-2">98</td></tr>
                        <tr><td className="border px-4 py-2">On European farms</td><td className="border px-4 py-2">987</td><td className="border px-4 py-2">540</td><td className="border px-4 py-2">447</td></tr>

                        <tr className="bg-gray-50 font-semibold"><td className="border px-4 py-2">Total 1946</td><td className="border px-4 py-2">1566</td><td className="border px-4 py-2">815</td><td className="border px-4 py-2">751</td></tr>
                        <tr className="bg-gray-50 font-semibold"><td className="border px-4 py-2">Total 1950</td><td className="border px-4 py-2">2050</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">—</td></tr>
                    </tbody>
                    </table>
                </div>
                </div>

                <div id="section5-demography-history" className="mt-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    Population Estimates & Historical Settlement
                </h4>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    If the workers of the tribe who live outside the district, and those who
                    have not been counted, are added to the census results, the total population
                    of the tribe is estimated at between 4,000 and 4,400 persons in the
                    Pilansberg district, and approximately 1,800 persons in the Rustenburg N.A.
                    district.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    Approximately 3,000 persons on 12,201 morgen (40.4 square miles) of tribal land form a population density of about 74 persons per square mile. In
                    January 1950, 1,243 taxpayers were registered under Chief Ramokoka at the Pilansberg N.C. office.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    In the beginning of the 18th century, the tribe first sought refuge on the eastern banks of the Crocodile River (Odi) at Tlhapelabjale, at the confluence of the Odi and Thokwe (Sand River). They passed Potlhapatshwene (Makips Nek of the farm McKip Zylrand 954) and trekked to Krantzberg. Between circa 1790 and 1820 they lived at Mmapela in the Balaka country
                    (Ndebele).
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    Around 1820 they moved from Mmapela to Thokwe (Sand River) on the western bank of the Odi (Crocodile River), where Thokwe joins the Odi (probably on
                    Buffelshoek or Haakdoorndrift). Between circa 1830 and 1840 the
                    baPhalane sought refuge at a hill called Modise wa Mogopa, to the northwest of the present location. Around 1870 they lived at Phalane in the present location, where the tribe was largely mixed with the baBididi.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    The baPhalane who live in Rustenburg and Pilansberg districts all belong to
                    one tribe, except for an offshoot called baPhalane ba Sesobe, who formerly
                    were at Vleeschfontein, Marico district, and in 1951 settled on Ongegund in Pilansberg district.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    The headquarters of the baPhalane are in Ramakoka&apos;s Location, and smaller
                    sections of the tribe live at the following places under the following
                    heads:
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>On Schilpadnest under Ramokoka</li>
                    <li>On Tweelaagte under Rcmadibedi Letlhape</li>
                    <li>On Vogelstruisnek under Phudihudu Mpodi</li>
                    <li>On Haakdoornbult under Phadi</li>
                    <li>
                    On Ruighoek and on Rhenosterspruit live small groups on Native
                    privately owned land who have no head of administrative importance
                    </li>
                </ul>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    The baPhalane of Rustenburg district live on Nooitgedacht  under Wilhelm
                    Letlapeng, who became their head after Nataniel Letlapeng&apos;s death in 1948,
                    and on Roodekraalspruit where they are mixed with baFokeng on Native privately owned land under Piet Mosito.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Isolated families live scattered on European farms in the Hamanskraal
                    district.
                </p>
                </div>



                </section>

                {/* Section 6 */}
                <section
                id="section6"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    6. History and genealogies of chiefs
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">

                    <p>
                    The baPhalane broke off from the baKwena living in Bechuanaland Protectorate
                    after Chief Malope’s reign. They are of the same stock as the baKwena ba Mogopa
                    and the baKwena ba Modimosana. The first chief remembered by them is Pukwe,
                    who probably lived during the first half of the 18th century. He had two sons,
                    Motshodi and Letlape.
                    </p>

                    <p>
                    After Pukwe’s death a serious conflict arose between these two brothers,
                    leading to the schism through which the present tribe came into being.
                    The dispute arose over a beast which had only one horn whilst on the other
                    side of its head there grew a horn-shaped tuft of hair. The beast belonged
                    to Letlape’s son Mokoke, but the chief and his followers coveted it.
                    A war broke out and the chief’s younger brother Letlape fled with his
                    followers and crossed the Odi (Crocodile River). Pursuing them, the Kwena
                    chief found the river in flood and was unable to cross it.
                    </p>

                    <p>
                    Steven attended the Catholic Mission Church and married Anna Pilaeng
                    according to Christian rites. She was a daughter of the Phalane royal family
                    and was recognised as great wife by the tribe. They had several children,
                    including Senkgobeng, Magarethe Mokolwane, Sarafina Makgosi, Gregore Pitso,
                    Denies Ntsesa, and others, some of whom died in youth. The exact date of
                    Steven’s death is not known.
                    </p>

                    <p>
                    Steven was succeeded by his younger brother VIII Michael Moatshe, who was
                    born around 1852–54 and whose regiment was Makoba. Informants state that he
                    was a chief and not acting for his brother’s son Gregore Pitso, who was still
                    alive. The reason given was that chiefs were nominated by the Catholic Mission.
                    </p>

                    <p>
                    Michael married Dorothea by Native custom. She was a member of the tribe and
                    had children including Benjamin Tsebe Moatshe, Birijida Ramakoe, Tekla Poo,
                    Remi Molefe, Leopold Pule, Angelina Matlodi, Josephine Segawele, Athanasius
                    Rramante, and Michael Mfulapi Moatshe. Michael Moatshe died on 2 June 1945.
                    His eldest son Benjamin died in 1931.
                    </p>

                    <p>
                    As Mokoke’s son Mafodi, born towards the end of the 18th century, was not yet
                    of age when his father died, his uncle Molobi assumed the regency. Mafodi was
                    taken to the baMokopane. The commander of the army, Kobete, supported Molobi
                    against the heir. Mafodi grew up among the baMokopane while game was still
                    abundant. The baPhalane collected and prepared hoofs and bones of game,
                    especially giraffe, and traded with the baPedi.
                    </p>

                    <p>
                    Malekutu, a son of the Pedi chief Thulare, invited other tribes to attack
                    Molobi and installed Mafodi as chief of the baPhalane. Kobete fled to
                    Minaleoko. Mafodi was still a young man when he became chief and moved from
                    Mmapela to the Thokwe (Sand River), where he stayed until his death. The Thokwe being an eastern tributary of the Odi (Crocodile River), this would mean that the baPhalane lived on the eastern banks of the Odi but they claim to have lived on the western banks of the Odi on Buffelshoek or Haakdoorndrift.  
                    </p>

                    <p>
                    Mafodi was in his thirties when Mzilikazi established his camp at Mosega.
                    The Matebele killed a few baPhalane but made no lasting impression.
                    Between about 1830 and 1840 there was war with the baMmapela (Ndebele), and many people were killed. Soon afterwards when the first Boers had already settled in that part of the country there followed another war with the baKgatla ba ga Kgafela. A man by the name of Ralekgalabole, a moPedi raided Kgatla cattle and on his way home passed the Phalane countryo The baKgatla thought he was at Phalane and attacked the tribe. In these fights the Phalane regiments Mangana, Magasa Mantsho took part. The remainder of the tribe fled to a hill called Modise wa Mogopa which lies north-north-west of the present Ramakoka Location. 
                    </p>

                </div>

                {/* Continuation — Succession after Mafodi */}

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg mt-10">

                <h3 className="text-xl font-semibold text-yellow-700">
                    V. Moatshe Ramokoka (d. 1897)
                </h3>

                <p>
                    Mafodi was succeeded by his son <strong>V Moatshe Ramokoka</strong>, who was
                    already married at the time of his succession. Moatshe moved to Phalane,
                    the present land of the tribe. The regiments Matladi and Maditshe took part
                    in the Sekukuni War in 1879. Moatshe was an old man when he died in 1897.
                </p>

                <h4 className="font-semibold mt-4">Wives and Issue</h4>

                <ul className="space-y-4">

                    <li>
                    <strong>1. Mmakgase</strong> (Molwana clan)
                    <ul className="list-disc ml-6">
                        <li>Rammopo (m)</li>
                        <li>Nakedi (f)</li>
                        <li>Mpediane (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>2. Mmamatlhodi</strong> (Kgatla ba Mmakau)
                    <ul className="list-disc ml-6">
                        <li>Mmankgathi (f)</li>
                        <li>Halefyane (f)</li>
                        <li>Subjane (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>3. Mmamokoke</strong> (Great Wife; chief’s family)
                    <ul className="list-disc ml-6">
                        <li>Mokoke (m)</li>
                        <li>Maiphepi (f)</li>
                        <li>Mpeo (f)</li>
                        <li>Nkgoni (f)</li>
                        <li>Mafodi (m), headman at Schilpadnest</li>
                    </ul>
                    </li>

                    <li>
                    <strong>4. Mmamolobi</strong> (Kobuvula clan)
                    <ul className="list-disc ml-6">
                        <li>Mmantwa (f)</li>
                        <li>Dikeledi (f)</li>
                        <li>Tulmotse (m)</li>
                        <li>Rrantsho (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>5. Mmaradifele</strong> (Masisi clan)
                    <ul className="list-disc ml-6">
                        <li>Motato (f)</li>
                        <li>Letlape (m)</li>
                        <li>Ntshiwang (f)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>6. Mmamokalake</strong> (younger sister of Mmamolobi)
                    <ul className="list-disc ml-6">
                        <li>Ketlhoilwe (f)</li>
                        <li>Sekedi (f)</li>
                        <li>Hokalake (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>7. Mmasebeso</strong> (Holotsana clan; tribe unknown)
                    <ul className="list-disc ml-6">
                        <li>Mokae (f)</li>
                        <li>Maopngrafara (m)</li>
                        <li>Kau (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>8. Thabalaka</strong> (Letlape clan)
                    <ul className="list-disc ml-6">
                        <li>Mma bo go si</li>
                        <li>Kobete (m)</li>
                        <li>Scbegi (m)</li>
                        <li>Segeti (f)</li>
                        <li>Molebatsi (f)</li>
                        <li>Mabedika (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>9. Mapilane</strong> (daughter of a Kgatla chief)
                    <ul className="list-disc ml-6">
                        <li>Pilane (m)</li>
                        <li>Molobane (f)</li>
                        <li>Ramagatisa (m)</li>
                        <li>Mmantshotsotso (f)</li>
                        <li>Mosidi (f)</li>
                        <li>Matlakala (f)</li>
                    </ul>
                    </li>

                </ul>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                    VI. Mokoke (c. 1835–1891)
                </h3>

                <p>
                    VI Mokoke, probably born between 1835 and 1840, became a headman under his
                    father and in tribal tradition ranks as a chief. He left with part of the
                    tribe for Kroonendal, settling north of the present European village.
                    Later he became ill and returned to Phalane, where he died between 1889 and
                    1891, some years before his father.
                </p>

                <p>
                    Around 1870–75 many baPhalane left their chief due to ill treatment.
                    Some (baPhalane ba Sesobe) settled at Vleeschfontein in the Marico
                    district. Around 1900 their headman was Stephen Moatshe.
                </p>

                <h4 className="font-semibold mt-4">Wives and Issue</h4>

                <ul className="space-y-4">

                    <li>
                    <strong>1. Mma-Johannes</strong> (Great Wife; Moatshe clan)
                    <ul className="list-disc ml-6">
                        <li>Johannes (m)</li>
                        <li>Maria (f)</li>
                        <li>Podile (m)</li>
                        <li>Nthopeng (f)</li>
                        <li>Sebolao (m)</li>
                        <li>Sara (f)</li>
                        <li>Moepeng (f)</li>
                        <li>Dorothea (f)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>2. Seeletso</strong> (baFokeng royal family)
                    <ul className="list-disc ml-6">
                        <li>Ricoto Bethuel (m)</li>
                        <li>Mokgatle Salatiel (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>3. Bogadi</strong> (Logadiba tribe, Mathibestad)
                    <ul className="list-disc ml-6">
                        <li>Mokae (f)</li>
                        <li>Ramokoka Egmont (m)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>4. Mmamoatshe</strong> (Modisane clan)
                    <ul className="list-disc ml-6">
                        <li>Modilati (f)</li>
                        <li>Mmantsho (f)</li>
                        <li>Mmamonyaka (f)</li>
                        <li>Mabifi (f)</li>
                    </ul>
                    </li>

                    <li>
                    <strong>5. Dorothea</strong> (Mothokwa clan)
                    <ul className="list-disc ml-6">
                        <li>Karolina (f)</li>
                        <li>Unnamed child (m), died in youth</li>
                    </ul>
                    </li>

                </ul>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                    VII. Johannes Maponyane (b. c. 1860–1870)
                </h3>

                <p>
                    VII Johannes Maponyane, born between 1860 and 1870, succeeded his
                    grandfather Moatshe in 1897 but appears to have ruled only briefly.
                    He married Masekere of the Matsaba clan according to Christian rites.
                    He had no sons.
                </p>

                <h4 className="font-semibold mt-4">Issue</h4>
                <ul className="list-disc ml-6">
                <li>Moepeng (f)</li>
                <li>Ditlhwaneng (f)</li>
                <li>Mafiyapere (f)</li>
                </ul>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                VIII. Bethuel Rakoto (d. 1906)
                </h3>

                <p>
                VIII Bethuel Rakoto succeeded his brother Johannes. He was married
                according to Christian rites to Mmaponyane, a daughter of the royal
                family of the tribe.
                </p>

                <h4 className="font-semibold mt-4">Issue</h4>
                <ul className="list-disc ml-6">
                <li>Letlape (m)</li>
                <li>Unnamed son (died in youth)</li>
                <li>Bethuel Gaotingwe (m)</li>
                <li>Mmakrotho (f)</li>
                <li>Mafodi (m), still alive at time of record</li>
                </ul>

                <p className="mt-4">
                Bethuel died in 1906.
                </p>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                IX. Salatiel Mokgatle (1878–1922)
                </h3>

                <p>
                IX Salatiel Mokgatle succeeded as regent for the present chief.
                He was born in 1878.
                </p>

                <h4 className="font-semibold mt-4">Wives and Issue</h4>

                <ul className="space-y-4">

                <li>
                    <strong>1. Seganele</strong> (daughter of a baFokeng chief)
                    <ul className="list-disc ml-6">
                    <li>Mokoke (m)</li>
                    <li>Mafodi Rrammalana (m)</li>
                    <li>Dikeledi (m)</li>
                    </ul>
                </li>

                <li>
                    <strong>2. Mmakgapa</strong> (Legobje clan; married after death of first wife)
                    <ul className="list-disc ml-6">
                    <li>Mmapoo (f)</li>
                    <li>Mmamosudisi (f)</li>
                    </ul>
                </li>

                </ul>

                <p className="mt-4">
                Salatiel died in 1922.
                </p>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                X. Egmont Ramokoka (b. 1882 – d. 1946)
                </h3>

                <p>
                X Egmont Ramokoka, younger brother of Johannes, Bethuel, and Salatiel,
                was born in 1882. He became acting chief from 1922 to 1927.
                </p>

                <p>
                He married Damaria Makaau, a member of the Moatshe clan of the tribe.
                </p>

                <h4 className="font-semibold mt-4">Issue</h4>
                <ul className="list-disc ml-6">
                <li>Mmasogo (f)</li>
                <li>Mmadikomang (f)</li>
                <li>Ramphelane (m)</li>
                </ul>

                <p className="mt-4">
                He died in 1946.
                </p>

                <h3 className="text-xl font-semibold text-yellow-700 mt-10">
                XI. Bethuel Gaotingwe (assumed chieftainship 1927)
                </h3>

                <p>
                XI Bethuel Gaotingwe became chief in 1927 upon reaching majority.
                He was not yet married at the time of this record.
                </p>

                <p>
                In 1934 he encountered difficulties, and during his absence
                Hoffen Ramalane Ramokoka acted on his behalf.
                </p>

                </div>

                </section>

                {/* Section 7 */}
                <section
                id="section7"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    7. Regiments (Mephato)
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    The baPhalane, like other Tswana-speaking communities, organised their
                    society into age regiments (mephato). These were not standing armies in
                    the European sense, but generational groups formed through initiation
                    (bogwera). Each regiment was given a name and placed under a leader.
                    Regiments functioned as units of mobilisation for defence, hunting,
                    labour projects, and ceremonial duties.
                    </p>

                    <p>
                    Over time, especially under the influence of Christianity and mission
                    activity, traditional initiation lodges declined. Later regiments became
                    largely symbolic and were sometimes organised around Church confirmation
                    rather than traditional initiation. The lists below reflect both the
                    earlier traditional regiments and the later confirmation regiments.
                    </p>

                    {/* Early Traditional Regiments */}
                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Early Traditional Regiments
                    </h3>

                    <ul className="list-disc ml-6 space-y-2">
                    <li>Mathamaga I — initiated at Mathebeleng during the reign of Mokoke</li>
                    <li>Moreleba I — initiated at Mathebeleng under Chief Mokoke</li>
                    <li>Madingwana I — initiated at Mathebeleng under Chief Mokoke</li>
                    <li>Matlhwana I — initiated at Mathebeleng</li>
                    <li>Tfangana — initiated at Mathebeleng c. 1828</li>
                    <li>Magasa I — associated with Mokoke II</li>
                    <li>Mantsho I — associated with Letlape</li>
                    <li>Matladi I — formed during the reign of Mafodi</li>
                    <li>Maditshe — formed at Phalane</li>
                    <li>Mangana — formed at Phalane</li>
                    <li>Matlakana — women’s regiment</li>
                    </ul>

                    <p>
                    Some of these regiments are recorded as having taken part in regional
                    conflicts, including campaigns in the late 19th century such as the
                    Sekukuni War (1879–80). Their organisation reflects the political and
                    military structures of the tribe during the pre-colonial and early
                    colonial periods.
                    </p>

                    {/* Later Confirmation Regiments */}
                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Later “Confirmation Regiments”
                    </h3>

                    <p>
                    It is said that under the influence of Christianity, the holding of
                    traditional initiation lodges fell into disuse at an early date. The
                    following regiments are described as Church “confirmation regiments,”
                    whose leaders were sometimes appointed later. These retained the naming
                    structure of the traditional mephato but no longer functioned as military
                    age-sets.
                    </p>

                    <ul className="list-disc ml-6 space-y-2">
                    <li>Marutla</li>
                    <li>Mabusa</li>
                    <li>Mathamaga II</li>
                    <li>Mareleba II</li>
                    <li>Madingwana II</li>
                    <li>Matlhwana II</li>
                    <li>Mangana II</li>
                    <li>Magasa II</li>
                    <li>Mantsho II</li>
                    <li>Matladi II</li>
                    <li>Mapetlwane</li>
                    <li>Matshela</li>
                    <li>Magama</li>
                    <li>Mantwa</li>
                    </ul>

                    <p>
                    Named leaders associated with these later regiments include Egmont
                    Ramokoka, Facius Tshubisi (before 1898), Mpaku, Rabotilo, Selle,
                    Gaotingwe Bethuel, Ramakhutle, Mafodi, Letlapa, Ramponyeng, and others.
                    </p>

                    <p>
                    The shift from traditional initiation regiments to church-based
                    confirmation cohorts illustrates a significant transformation in
                    baPhalane social organisation. While the generational naming system
                    endured, its ritual and military functions gradually gave way to
                    Christian institutional structures.
                    </p>

                </div>
                </section>

                {/* Section 8 */}
                <section
                id="section8"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    8. Political Organization
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    The political organisation of the baPhalane reflects a hereditary
                    chieftainship supported by ranked clans (dikgoro), advisory councils,
                    and customary assemblies. Authority is structured through lineage,
                    clan hierarchy, and consultation.
                    </p>

                    {/* Clan Structure */}
                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Clan Structure (Dikgoro)
                    </h3>

                    <p>
                    The tribe is composed of the following clans, listed in order of rank:
                    </p>

                    <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-left text-base">
                        <thead className="bg-yellow-50">
                        <tr>
                            <th className="px-4 py-2 border">Rank</th>
                            <th className="px-4 py-2 border">Clan (Kgoro)</th>
                            <th className="px-4 py-2 border">Head of Clan (Kgosana in 1953)</th>
                            <th className="px-4 py-2 border">Totem</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        <tr>
                            <td className="px-4 py-2 border">1</td>
                            <td className="px-4 py-2 border">Wa Moshate (royal house)</td>
                            <td className="px-4 py-2 border">Chief</td>
                            <td className="px-4 py-2 border">Kwena (crocodile)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">Mokoka</td>
                            <td className="px-4 py-2 border">Raditladi</td>
                            <td className="px-4 py-2 border">Kwena</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">3</td>
                            <td className="px-4 py-2 border">Botsi</td>
                            <td className="px-4 py-2 border">Sesenye Paul</td>
                            <td className="px-4 py-2 border">Kwena</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">Moatshe</td>
                            <td className="px-4 py-2 border">Mmamothobi Petrus</td>
                            <td className="px-4 py-2 border">Kwena</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Masisi</td>
                            <td className="px-4 py-2 border">Rabutana Michael</td>
                            <td className="px-4 py-2 border">—</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">6</td>
                            <td className="px-4 py-2 border">Mfulwane</td>
                            <td className="px-4 py-2 border">Mpheretlhane Lazarus</td>
                            <td className="px-4 py-2 border">Phiri (hyena)</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">7</td>
                            <td className="px-4 py-2 border">Mpodi</td>
                            <td className="px-4 py-2 border">Ramotsho Nason</td>
                            <td className="px-4 py-2 border">Tlou (elephant)</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <p>
                    Some members of the Mokoka clan are recorded as residing at Tweelaagte
                    and Schilpadnest.
                    </p>

                    {/* Chieftainship */}
                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Chieftainship and Council
                    </h3>

                    <p>
                    The chieftainship is hereditary. The deputy of the chief and next in rank
                    was Nketsing Sadrak Ramokoka.
                    </p>

                    <p>
                    The custom of holding a private or secret chief’s council
                    (<em>khuduthamaga</em>) was still observed. This council consists of the
                    chief’s close relatives together with selected headmen (dikgosana).
                    It appoints a personal servant (<em>ntona</em>) for the chief. In former
                    times this man was expected to belong to the same regiment as the chief
                    and, if possible, to be the son of the previous ntona.
                    </p>

                    <p>
                    The broader council administering law and public affairs was composed of
                    the headmen (dikgosana). After matters have been discussed by this
                    council, the tribe may be summoned to a general assembly
                    (<em>pitso</em>) in which all tribesmen may express their views.
                    There was no tribal secretary.
                    </p>

                    {/* Tribute and Land */}
                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Tribute and Land Administration
                    </h3>

                    <p>
                    No tribute is received from the branch of the tribe formerly residing
                    in the Marico district. Tribute was, however, received from sections of
                    the tribe living in the Pilanesberg and Rustenburg districts.
                    </p>

                    <p>
                    It was customary for workers returning from prolonged employment in town
                    to “greet” the chief with a monetary gift (traditionally 10 shillings).
                    </p>

                    <p>
                    Fields are allocated by a land committee composed of three men.
                    </p>

                </div>
                </section>

                {/* Section 9 */}
                <section
                id="section9"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    9. Social Organization
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    Marriage among the baPhalane was regulated through
                    customary law, with bridewealth (bogadi) remaining a central
                    institution among both Christians and non-Christians.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Bridewealth (Bogadi)
                    </h3>

                    <p>
                    Bogadi is still given in the form of cattle. As a rule, the
                    full amount must be transferred before the marriage is finalised.
                    The average amount was four to five head of cattle.
                    </p>

                    <p>
                    The bridegroom’s father offers a number of cattle, and his
                    mother’s brother (<em>malome</em>) may contribute one animal.
                    Correspondingly, the bride’s mother’s brother receives one animal
                    from the bogadi.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Marriage Patterns
                    </h3>

                    <p>
                    Cross-cousin marriage remains preferential.
                    If a marriage remains without issue, this no longer entitled
                    the husband to claim a substitute wife (<em>seantlo</em>),
                    indicating a shift from earlier custom.
                    </p>

                    <p>
                    It was, however, customary for a man to support his brother’s
                    widow (<em>motlholagadi</em>) and her children.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Social Concerns and Regulation
                    </h3>

                    <p>
                    A general complaint was recorded regarding the increase
                    in illegitimate births. If the father of such a child was a
                    member of the tribe, he is fined one cow by the chief.
                    </p>

                    <p>
                    Polygamy was reported to no longer occur.
                    </p>

                </div>
                </section>

                {/* Section 10 */}
                <section
                id="section10"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    10. Beliefs and Sacred Practices
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    The grave of the old chief Moatshe is located near or on the
                    mountain Ramoloreng. Because of this association, the mountain
                    is regarded as a sacred place.
                    </p>

                    <p>
                    Prayers for rain are conducted there, indicating the continued
                    importance of ancestral authority and sacred geography in the
                    spiritual life of the tribe.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Sacred Sites
                    </h3>

                    <p>
                    While the mountain Ramoloreng is considered sacred, sacred trees
                    are apparently not recognised in the same way within this
                    community.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Witchcraft and Divination
                    </h3>

                    <p>
                    There remains a widespread fear of witchcraft. Many people
                    consult diviners when misfortune, illness, or unexplained events
                    occur.
                    </p>

                    <p>
                    Some of these diviners appeared to travel widely throughout the
                    Tswana areas and into the towns.
                    </p>

                    <p>
                    Although complaints are made that many of them possess little
                    genuine knowledge, belief in the efficacy of certain traditional
                    medicines was strong.
                    </p>

                </div>
                </section>

                {/* Section 11 */}
                <section
                id="section11"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    11. Churches and Schools
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <h3 className="text-xl font-semibold text-yellow-700">
                    Churches
                    </h3>

                    <p>
                    The large majority of the tribe, estimated at approximately
                    ninety percent, were said to have been Christians.
                    Most were members of the Hermannsburg Lutheran Mission.
                    </p>

                    <p>
                    The Mission maintained a church building and a resident
                    African minister at Phalane.
                    The African Methodist Episcopal Church and the Pentecostal
                    Holiness Church each had a small number of members and
                    a Native minister.
                    </p>

                    <p>
                    Phalane also functioned as an outstation of the
                    Methodist Church of South Africa.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Schools
                    </h3>

                    <p>
                    There was one government-aided school offering classes up to
                    Standard VI, with a staff of five teachers serving approximately
                    370 children. An additional sixth teacher was paid by the tribe.
                    </p>

                    <p>
                    Other schools operated at Tweelaagte, where three teachers
                    instructed approximately 170 children, and at Nooitgedacht,
                    where five teachers offered classes up to Standard VI.
                    </p>

                    <p>
                    It was estimated that about three quarters of the children
                    of school-going age actually attended school.
                    No youth organisation was reported at the time.
                    </p>

                </div>
                </section>
                
                {/* Section 12 */}
                <section
                id="section12"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    12. Mode of Settlement
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    At the time of recording, the tribe was distributed across
                    several settlements:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                    <li>Phalane on Ramakokaskraal</li>
                    <li>Bojating on Elandsfontein</li>
                    <li>Mmamodimokwana on Schilpadnest</li>
                    <li>Module on Vogelstruisnek</li>
                    <li>Ratumuga on Tweelaagte</li>
                    <li>Tlhatlaganyane on Ruighoek</li>
                    <li>Kwa Padi on Haakdoornbult</li>
                    <li>Makgopaneng on Rhenosterspruit</li>
                    <li>Rankelenyane on Nooitgedacht</li>
                    </ul>

                    <p>
                    Maile wa Phalane was the Phalane settlement located on
                    Roodekraalspruit.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Village Layout and Architecture
                    </h3>

                    <p>
                    The individual homesteads lay fairly close together,
                    forming compact village groupings.
                    </p>

                    <p>
                    Rectangular huts predominated. As a rule, roofs were thatched,
                    although corrugated iron roofing was occasionally observed.
                    </p>

                    <p>
                    Cattle kraals were usually situated on the outskirts
                    of the village.
                    </p>

                </div>
                </section>

                {/* Section 13 */}
                <section
                id="section13"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    13. Material Culture
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    Besides everyday European household utensils and simple furniture, locally made Tswana utensils were still found in most homesteads.
                    </p>

                    <p>
                    These included:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                    <li>Pots, some of which were bought from other tribes</li>
                    <li>Numerous mortars (<em>kika</em>) and pestles</li>
                    <li>Sitting, sleeping, and eating mats (<em>legogo</em>, <em>moseme</em>)</li>
                    <li>Beer-strainers</li>
                    <li>Baskets (<em>tlatlana</em>) and winnowing baskets (<em>leselo</em>)</li>
                    <li>Wooden spoons (<em>mafyana</em>)</li>
                    </ul>

                    <p>
                    Wooden dishes (<em>mogopo</em>) were no longer in use, and grass granaries (<em>sesigo</em>) had also fallen out of practice.
                    </p>

                </div>
                </section>

                {/* Section 14 */}
                <section
                id="section14"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    14. Tribal Marks and Dress
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    Tribal marks were no longer visible among the people. Almost all members of the tribe wore European clothes, shoes, hats, and caps.
                    </p>

                    <p>
                    The only items of traditional attire that remained were:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                    <li>Sandals, worn by elderly men</li>
                    <li>Baby slings (<em>thari</em>) made from goat-skin</li>
                    <li>A few small karosses and fur caps</li>
                    </ul>

                </div>
                </section>

                {/* Section 15 */}
                <section
                id="section15"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    15. Cattle and Pastoralism
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    The baPhalane kept cattle that were a cross between Afrikaner and Native types. Families who did not own cattle were occasionally lent a few animals, a practice known as <em>go fisa</em>.
                    </p>

                    <p>
                    According to the agricultural census of 1949, the number of cattle, sheep, and goats owned by the tribe was as follows:
                    </p>

                    {/* Responsive Table Wrapper */}
                    <div className="w-full overflow-x-auto my-4">
                    <table className="min-w-[600px] w-full border border-gray-200 text-left text-sm">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-3 py-2 whitespace-nowrap">Farm</th>
                            <th className="border px-3 py-2 whitespace-nowrap">Cattle</th>
                            <th className="border px-3 py-2 whitespace-nowrap">Sheep</th>
                            <th className="border px-3 py-2 whitespace-nowrap">Goats</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Ramakokaskraal</td>
                            <td className="border px-3 py-2">800</td>
                            <td className="border px-3 py-2">—</td>
                            <td className="border px-3 py-2">150</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Geluk</td>
                            <td className="border px-3 py-2">500</td>
                            <td className="border px-3 py-2">—</td>
                            <td className="border px-3 py-2">70</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Elandsfontein</td>
                            <td className="border px-3 py-2">200</td>
                            <td className="border px-3 py-2">40</td>
                            <td className="border px-3 py-2">75</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Schilpadnest</td>
                            <td className="border px-3 py-2">400</td>
                            <td className="border px-3 py-2">—</td>
                            <td className="border px-3 py-2">600</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Haakdoornbult (Private)</td>
                            <td className="border px-3 py-2">300</td>
                            <td className="border px-3 py-2">75</td>
                            <td className="border px-3 py-2">96</td>
                        </tr>
                        <tr>
                            <td className="border px-3 py-2 whitespace-nowrap">Rhenosterspruit</td>
                            <td className="border px-3 py-2">170</td>
                            <td className="border px-3 py-2">30</td>
                            <td className="border px-3 py-2">35</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <p>
                    In the 1950 agricultural census, additional livestock items were enumerated, but only totals were shown for the above-mentioned farms. These included cows, calves, bulls, oxen, total cattle, mules, horses, donkeys, sheep, goats, pigs, and poultry. On the tribal land, there were 84 cattle units (C.U.) per square mile, which exceeded the recommended density of 8 morgen per cattle unit.
                    </p>

                    {/* Livestock Table */}
                    <div className="overflow-x-auto my-4">
                    <table className="w-full table-auto border border-gray-200 text-left">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-3 py-2">Livestock Type</th>
                            <th className="border px-3 py-2">1949</th>
                            <th className="border px-3 py-2">1950</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td className="border px-3 py-2">Cows (over one year old)</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">1,352</td></tr>
                        <tr><td className="border px-3 py-2">Calves (under one year)</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">488</td></tr>
                        <tr><td className="border px-3 py-2">Bulls (over one year)</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">28</td></tr>
                        <tr><td className="border px-3 py-2">Oxen</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">1,090</td></tr>
                        <tr><td className="border px-3 py-2">Total cattle</td><td className="border px-3 py-2">2,370</td><td className="border px-3 py-2">2,958</td></tr>
                        <tr><td className="border px-3 py-2">Mules</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">7</td></tr>
                        <tr><td className="border px-3 py-2">Horses</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">6</td></tr>
                        <tr><td className="border px-3 py-2">Donkeys</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">436</td></tr>
                        <tr><td className="border px-3 py-2">Sheep and lambs</td><td className="border px-3 py-2">145</td><td className="border px-3 py-2">292</td></tr>
                        <tr><td className="border px-3 py-2">Goats and kids</td><td className="border px-3 py-2">1,026</td><td className="border px-3 py-2">1,957</td></tr>
                        <tr className="">
                            <td className="border px-3 py-2">C.U. (cattle units, total)</td><td className="border px-3 py-2">2,604</td><td className="border px-3 py-2">3,369</td>
                        </tr>

                        <tr className="">
                            <td className="border px-3 py-2">Pigs</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">669</td>
                        </tr>

                        <tr className="">
                            <td className="border px-3 py-2">Poultry</td><td className="border px-3 py-2">—</td><td className="border px-3 py-2">2,386</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <p>
                    It was difficult to calculate cattle units per 100 population because livestock from different tribes were not separated on Trust farms. On the tribal land itself, the tribe had 84 C.U. per 100 persons.
                    </p>

                    <p>
                    The major cattle diseases recorded were black quarter, anthrax (rare), a liver disease affecting calves called <em>sebete</em>, and <em>bile</em> (<em>sabotlokwe</em>). A disease called <em>tlhakwana</em>, affecting goats, could not be identified, while another internal disease called <em>ntsotwane</em> occurred only occasionally.
                    </p>

                </div>
                </section>

                {/* Section 16 */}
                <section
                id="section16"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    16. Agriculture
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <h3 className="text-xl font-semibold text-yellow-700">
                    Land Tenure and Fields
                    </h3>

                    <p>
                    The lands were clearly demarcated. A young man received his first field from his father and was allocated additional land upon marriage. Many men cultivated two or three fields situated in different parts of the tribal area.
                    </p>

                    <p>
                    The soil appeared fertile, and nearly all valleys within the tribal territory were ploughed.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Main Crops
                    </h3>

                    <p>
                    The principal crops cultivated were maize (<em>mmopo</em>), sorghum or kaffircorn (<em>mabele</em>), and beans (<em>dinawa</em>).
                    </p>

                    <h4 className="font-semibold mt-4">Maize Varieties</h4>
                    <ul className="list-disc pl-6 space-y-1">
                    <li>Hickory King (white maize)</li>
                    <li>Red-ootlali maize with white seeds</li>
                    <li>Botman (widely grown)</li>
                    <li>Small quantities of yellow maize</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Sorghum Varieties</h4>
                    <ul className="list-disc pl-6 space-y-1">
                    <li>Mokgatla wa kubu</li>
                    <li>Mantsakane (preferred when rains came late)</li>
                    <li>Segaolane</li>
                    <li>Sekamfokane (rarely grown)</li>
                    <li>Mabele a masweu (favoured variety)</li>
                    <li>Mohibitswane</li>
                    <li>Mapepe</li>
                    <li>Mosetlha (a favourite, related to mantsakane)</li>
                    <li>Mamafosa</li>
                    <li>Nilane (grown less frequently)</li>
                    </ul>

                    <p>
                    The varieties lethejane and lebelebele (kokolwane) were not grown.
                    </p>

                    <h4 className="font-semibold mt-4">Sweet Cane (Ntswe)</h4>
                    <ul className="list-disc pl-6 space-y-1">
                    <li>Mongatane (matured in three months)</li>
                    <li>Nketsane (bent ears, matured in 2–3 months)</li>
                    <li>A slow-growing unnamed variety</li>
                    </ul>

                    <p>
                    The frost- and drought-resistant Klipkuil strains and Rondekop varieties were disliked.
                    </p>

                    <h4 className="font-semibold mt-4">Beans and Other Crops</h4>
                    <ul className="list-disc pl-6 space-y-1">
                    <li>Moraratshane (identical with nyola)</li>
                    <li>Mokgalo</li>
                    <li>Groundnuts</li>
                    <li>Mung beans (<em>ditlhodi</em>)</li>
                    <li>Jugo beans (<em>ditloo</em>)</li>
                    </ul>

                    <p>
                    Some families produced five to six bags of mung beans per year and four to five bags of jugo beans. Various pumpkins and melons were interplanted with maize.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Agricultural Production (Census Data)
                    </h3>

                    <p>
                    According to the agricultural census of 1949, total production amounted to:
                    </p>

                    <ul className="list-disc pl-6 space-y-1">
                    <li>Maize: 208 bags</li>
                    <li>Sorghum: 439 bags</li>
                    </ul>

                    <p>
                    The total production recorded in the 1949 and 1950 agricultural censuses showed fluctuations in maize and sorghum yields, as well as beans and cultivated acreage. Citrus trees were also recorded in limited numbers.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Agricultural Implements (1950 Census)
                    </h3>

                    <ul className="list-disc pl-6 space-y-1">
                    <li>Single-furrow ploughs: 223</li>
                    <li>Double-furrow ploughs: 124</li>
                    <li>Harrows: 75</li>
                    <li>Cultivators: 1</li>
                    <li>Planters: 2</li>
                    <li>Wagons: 83</li>
                    <li>Carts: 67</li>
                    <li>Sledges: 128</li>
                    </ul>

                </div>
                </section>

                {/* Section 17 */}
                <section
                id="section17"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    17. Economics
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    Compared with other tribes of this area and the neighbouring district,
                    the tribe did not appear to be badly off. The Phalane sections in the
                    Rustenburg district could even be described as relatively prosperous.
                    </p>

                    <p>
                    Some members of the community worked on European-owned farms,
                    particularly women during the weeding and reaping seasons.
                    Labour migration occurred on approximately the same scale as among
                    neighbouring tribes.
                    </p>

                    <p>
                    Only a small number of families were in a position to sell a surplus
                    of sorghum. Most agricultural production was intended for household
                    consumption rather than for commercial exchange.
                    </p>

                    <p>
                    There was one shop within the tribal area, operated by a Native trader,
                    which served the local population.
                    </p>

                </div>
                </section>

                {/* Section 18 */}
                <section
                id="section18"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    18. Health
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    Although there was a clinic within the location, no nurse was stationed there.
                    The nearest hospital was situated at Saulspoort.
                    </p>

                    <p>
                    Drinking water was drawn primarily from a borehole, while a second borehole
                    was under construction at the time. In addition, water was obtained from wells.
                    </p>

                    <p>
                    General health conditions are described in paragraphs 110–114 of the original report.
                    </p>

                </div>
                </section>

                {/* Section 19 */}
                <section
                id="section19"
                className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 scroll-mt-24 mt-12"
                >
                <h2 className="text-2xl font-bold text-yellow-700 mb-6">
                    19. Community protests and Legal History
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

                    <p>
                    In the late twentieth and early twenty-first centuries, the traditional governance of the
                    baPhalane experienced significant internal disputes and legal challenges regarding
                    chieftainship, leadership recognition, and customary authority.
                    </p>

                    <p>
                    A notable matter concerned the dispute over the rightful chieftaincy. In the case:  
                    <a
                        href="https://www.saflii.org/za/cases/ZANWHC/2013/38.html"
                        className="text-yellow-700 underline"
                        target="_blank"
                    >
                        Ramokoka and Another v Ramokoka and Others (2013)
                    </a>, Kgosi J. J. E. M. Ramokoka and the Baphalane Traditional Council sought an interdict
                    to stop the Commission on Traditional Leadership Disputes and Claims from investigating
                    a called dispute over leadership succession. The High Court dismissed the application,
                    leaving the statutory commission free to continue its inquiry into a claim originally
                    lodged in 2008 by a former chief.
                    </p>

                    <p>
                    Another major legal matter was: 
                    <a
                        href="https://www.saflii.org/za/cases/ZACC/2011/15.html"
                        className="text-yellow-700 underline"
                        target="_blank"
                    >
                        Baphalane ba Ramokoka Community v Mphela Family and Others (2011)
                    </a>, which reached the Constitutional Court. The community sought rescission of an earlier
                    land rights judgment in which the Mphela family’s claim was upheld. The Constitutional Court
                    refused to rescind or expunge the earlier order and refused relief, affirming that access
                    to courts must be respected even in complex restitution disputes.
                    </p>

                    <p>
                    These disputes illustrate how historical leadership structures intersected with South Africa’s
                    constitutional and statutory framework after 1994, leading to complex legal processes
                    involving customary law, governance structures, and property rights.
                    </p>

                    <h3 className="text-xl font-semibold text-yellow-700 mt-8">
                    Documentary Sources
                    </h3>

                    <p>
                    The following videos provide recent documentary material reflecting community responses,
                    protests, and local engagement with political and traditional authority issues.
                    </p>

                    {/* Embedded YouTube videos with summaries */}
                    <div className="space-y-8 mt-6">

                    {/* Video 1 */}
                    <div>
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/lEWDgC9laYU"
                            title="Video – Traditional Council Office Fire"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        </div>
                        <p className="mt-2 text-gray-600">
                        <strong>Video 1:</strong> Disputes over mining royalties.
                        </p>
                    </div>

                    {/* Video 2 */}
                    <div>
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/fTSGbeppCfg"
                            title="Video – Community Protest Footage"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        </div>
                        <p className="mt-2 text-gray-600">
                        <strong>Video 2:</strong> Schools failing to open because of protests that lead to the burning of Baphalane Primary, as well as other buildings.
                        </p>
                    </div>

                    {/* Video 3 */}
                    <div>
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/JON0TOhdWCc"
                            title="Video – Public Discussion with Traditional Leaders"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        </div>
                        <p className="mt-2 text-gray-600">
                        <strong>Video 3: </strong>Disputes over chieftaincy.
                        </p>
                    </div>

                    {/* Video 4 */}
                    <div>
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/kW5FJ9fjGwQ"
                            title="Video – Community Engagement on Tribal Governance"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        </div>
                        <p className="mt-2 text-gray-600">
                        <strong>Video 4: </strong> Pupils not being able to write exams due to protests.
                        </p>
                    </div>

                    </div>

                    <p>
                    Together, the legal disputes and recorded community responses illustrate recent historical
                    tensions within the tribe regarding leadership succession, legitimacy, and the interface
                    between customary authority and formal constitutional legal processes.
                    </p>

                </div>
                </section>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
