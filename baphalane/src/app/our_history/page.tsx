import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HistoryPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images/history%20background.jpg')",
      }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="bg-black/60 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* TABLE OF CONTENTS */}
            <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-3">
                  Contents
                </h3>

                <nav className="flex flex-col space-y-3 text-gray-700">
                    <a href="#section1" className="hover:text-yellow-700 transition">
                        1. District
                    </a>
                    <a href="#section2" className="hover:text-yellow-700 transition">
                        2. Name of Tribe
                    </a>
                    <a href="#section3" className="hover:text-yellow-700 transition">
                        3. First Chief
                    </a>
                    <a href="#section4" className="hover:text-yellow-700 transition">
                        4. Language
                    </a>
                    <a href="#section5" className="hover:text-yellow-700 transition">
                        5. Land and Strength of Population
                    </a>
                </nav>
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
                        <span className="font-semibold">Name:</span> Gaotingwe Bethuel Ramokoka
                    </p>

                    <p>
                        <span className="font-semibold">Regiment:</span> Lentsho
                    </p>

                    <p>
                        <span className="font-semibold">Date of Birth:</span> 13th September 1907
                    </p>

                    <p>
                        <span className="font-semibold">Appointment:</span> Appointed chief on 25th
                        August 1927 with civil and criminal jurisdiction.
                    </p>

                    <p>
                        <span className="font-semibold">Residence:</span> Ramakoka&apos;s Location
                    </p>

                    <p>
                        <span className="font-semibold">Religious Affiliation:</span> Member of the Hermannsburg Lutheran Mission
                    </p>

                    <p>
                        <span className="font-semibold">Education:</span> Attended a local school
                        and understood Afrikaans and English.
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


            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
