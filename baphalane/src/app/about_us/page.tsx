import Header from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Background section */}
      <div className="relative bg-[url('/images/heritage-bg.jpg')] bg-cover bg-center py-16 px-4 md:px-20">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-green-900 mb-10">About Us</h1>

            <p className="text-lg text-gray-800 mb-6">
                Bakwena-ba-Phalane (Baphalane) are a Bakwena tribe of some 120,000 people spread across eight villages, under the leadership of Kgosi JJEM Ramokoka. The Baphalane great place, or capital village, is Ramokokastad. Baphalane are an offshoot of the Bakwena of Sechele in Molepolole, Botswana, and share origins with the Bakwena-ba-Mogopa based in Bethanie.
                Baphalane are the original inhabitants of areas such as Mogalakwena, Schilpadnest, Kroondal, and the Madikwe Game Reserve. They are also the current owners of the land where Anglo American Platinum’s Tumela operations are located.
            </p>

            

          <section className="space-y-8 text-gray-800 text-lg">
            <div>
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Historical Challenges and Leadership Struggles</h2>
              <p>
                For over 40 years, the Baphalane community has faced stagnation and internal struggles, leading to their ridicule in political circles and traditional structures. A lack of visionary leadership has caused the community to lag in development. The ruling elite has repeatedly failed to bring positive change, leaving Baphalane in a state of disorganization and economic despair. There is a need for a shift in mindset among the people, encouraging unity and progressive thinking rather than division and destruction of local infrastructure. The community must respect itself to gain the respect of others.
              </p>
              <br />
              <p>
                The administration of Baphalane has been marred by corruption and mismanagement. In 2019, Advocate Rantsane was appointed by Prof. Mokgoro to oversee the administration, but he failed to present any reports on his progress before passing away. In 2020, Dr. Maako was allegedly appointed without formal documentation, and he too failed to account for his actions. Reports link him to the infamous “Paraffin Case,” where R5 million was embezzled from the Ventersdorp community. These administrators were meant to manage community affairs, but instead, they enabled the looting of public funds, particularly in villages with mining activities like Bapong, Bethanie, and Tlhatlaganyane. To date, North-West Province remains under administration, highlighting continued governance issues. The province has been accused of undermining traditional leadership (bogosi), as administrators have been imposed on revenue-generating villages while others remain untouched.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Unemployment and Skills Development</h2>
              <p>
                Youth unemployment is one of the biggest concerns in Baphalane, threatening the stability and economic growth of villages. Many young people have been misled and manipulated to serve political agendas, rather than being equipped with skills and opportunities for self-sufficiency. There are multiple youth groups claiming to represent job-seeking individuals, but their fragmentation weakens their effectiveness. Unity is necessary for greater influence, especially in engaging industries such as mining for economic opportunities.
              </p><br />
              <p>
                The Royal Bafokeng Nation has demonstrated how diverse communities can work together for success, employing people from different backgrounds, including White, Jewish, English, and Zulu professionals. This diversity has driven economic progress, an approach Baphalane must adopt. Instead of focusing on identity politics, the community should judge individuals by their skills and contributions. As Nelson Mandela famously said, “A man must be judged by the content of his character, not the color of his skin or nationality.”
              </p><br />
              <p>
                There is an urgent need for skills development and professional recruitment. The local education system is failing, with many teaching vacancies unfilled due to a lack of qualified professionals. Encouraging young people to pursue careers in critical fields such as civil engineering, science, and agriculture is essential for sustainable development. Without embracing expertise, whether local or external, Baphalane will remain stagnant for generations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Land, Economic Growth, and Agro-Business</h2>
              <p>
                Baphalane consists of eight villages, divided into two groups: outpost villages (Mantserre, Tweelagte, Witrantjie, Rankelenyane) and Greater Phalane (Ramokokastad, Mmorogong, Phadi, Bojating). Outposts have better access to services, while Greater Phalane remains underdeveloped, making life difficult for its residents. Recognizing the leadership of headmen in certain villages is urgent to restore order and governance.
              </p><br />
              <p>
                Illegal land allocations have further destabilized Baphalane. During a period of unrest, self-imposed local leaders (dikgosana tsa Phalane) took control without the legitimacy of clan approval. These groups have unlawfully distributed land, including areas meant for education, such as Rakoto Middle School. The community must act to reclaim its land and remove unqualified individuals from positions of power. Schools should be prioritized for education rather than commercial land deals.
              </p><br />
              <p>
                Agriculture is a potential solution to Baphalane’s economic struggles. The community possesses vast tracts of fertile land, particularly in Kuduskop, Assen, and Beestekraal. By investing in crop farming—sunflowers, citrus (oranges and lemons), and mangoes—the community can become self-sustaining and economically independent. Khayakhulu has demonstrated success in agricultural business, and with proper planning, Baphalane can develop a strong agro-business model that will create jobs and drive local economic growth.
              </p>
            </div>

            
            <h2 className="text-2xl font-bold text-center mt-10 mb-4 text-gray-800">The Way Forward: Unity, Development, and Accountability</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Leadership and Governance Reform</h3>
                <p>Traditional leadership must be strengthened, and unqualified individuals in positions of power should be removed. Administrative appointments must be transparent and accountable.</p>
              </div>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Economic and Skills Development</h3>
                <p>Young people should be encouraged to pursue skills in engineering, education, and agriculture. Professional expertise should be welcomed rather than rejected.</p>
              </div>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Land and Resource Management</h3>
                <p>Illegal land allocation must stop. Schools and essential services must be protected from corruption and misuse.</p>
              </div>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Agricultural Growth and Self-Sufficiency</h3>
                <p>Investing in agro-business will enable economic stability and self-reliance, reducing dependence on external support.</p>
              </div>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 lg:justify-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Community Unity and Vision</h3>
                <p>The culture of division, internal conflicts, and short-term thinking must end. Baphalane must unite towards long-term prosperity.</p>
              </div>
            </div>

            <p className="mt-6">
              The critical question remains: If we reject outside expertise, what skills do we, as a community, bring to the table? The future of Baphalane lies in its ability to embrace knowledge, economic independence, and strong leadership. <strong>Motho ke Motho ka Batho.</strong> (A person is a person through others.)
            </p>


          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
