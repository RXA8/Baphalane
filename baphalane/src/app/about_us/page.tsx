'use client';
import Header from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Background section */}
      <div
        className="relative bg-[url('https://tqnkaadrdfkhxxbaympr.supabase.co/storage/v1/object/public/background-images/pexels-sanat-anghan-25736600-6757973.jpg')]
                   bg-cover bg-center bg-fixed md:bg-scroll py-10 md:py-16 px-4 sm:px-8 md:px-20 overflow-hidden"
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Content */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-8 md:mb-10">
            About Us
          </h1>

          <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
            Bakwena-ba-Phalane (Baphalane) are a Bakwena tribe of some 120,000 people spread across eight villages, under the leadership of Kgosi JJEM Ramokoka. The Baphalane great place, or capital village, is Ramokokastad. Baphalane are an offshoot of the Bakwena of Sechele in Molepolole, Botswana, and share origins with the Bakwena-ba-Mogopa based in Bethanie.
            Baphalane are the original inhabitants of areas such as Mogalakwena, Schilpadnest, Kroondal, and the Madikwe Game Reserve. They are also the current owners of the land where Anglo American Platinum’s Tumela operations are located.
          </p>

          <section className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
            {/* Unemployment & Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">
                Unemployment and Skills Development
              </h2>
              <p>
                Youth unemployment is one of the biggest concerns in Baphalane, threatening the stability and economic growth of villages. Many young people have been misled and manipulated to serve political agendas, rather than being equipped with skills and opportunities for self-sufficiency. There are multiple youth groups claiming to represent job-seeking individuals, but their fragmentation weakens their effectiveness. Unity is necessary for greater influence, especially in engaging industries such as mining for economic opportunities.
              </p><br />
              <p>
                The Royal Bafokeng Nation has demonstrated how diverse communities can work together for success, employing people from different backgrounds, including White, Jewish, English, and Zulu professionals. This diversity has driven economic progress, an approach Baphalane must adopt. Instead of focusing on identity politics, the community should judge individuals by their skills and contributions. As Nelson Mandela famously said, “A man must be judged by the content of his character, not the color of his skin or nationality.”
              </p><br />
              <p>
                There is an urgent need for skills development and professional recruitment. The local education system is failing, with many teaching vacancies unfilled due to a lack of qualified professionals. Encouraging young people to pursue careers in critical fields such as civil engineering, science, and agriculture is essential for sustainable development. Without embracing expertise, whether local or external, Baphalane will remain stagnant for generations.
              </p>
            </motion.div>

            {/* Land & Economic Growth */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">
                Land, Economic Growth, and Agro-Business
              </h2>
              <p>
                Baphalane consists of eight villages, divided into two groups: outpost villages (Mantserre, Tweelagte, Witrantjie, Rankelenyane) and Greater Phalane (Ramokokastad, Mmorogong, Phadi, Bojating). Outposts have better access to services, while Greater Phalane remains underdeveloped, making life difficult for its residents. Recognizing the leadership of headmen in certain villages is urgent to restore order and governance.
              </p><br />
              <p>
                Illegal land allocations have further destabilized Baphalane. During a period of unrest, self-imposed local leaders (dikgosana tsa Phalane) took control without the legitimacy of clan approval. These groups have unlawfully distributed land, including areas meant for education, such as Rakoto Middle School. The community must act to reclaim its land and remove unqualified individuals from positions of power. Schools should be prioritized for education rather than commercial land deals.
              </p><br />
              <p>
                Agriculture is a potential solution to Baphalane’s economic struggles. The community possesses vast tracts of fertile land, particularly in Kuduskop, Assen, and Beestekraal. By investing in crop farming—sunflowers, citrus (oranges and lemons), and mangoes—the community can become self-sustaining and economically independent. Khayakhulu has demonstrated success in agricultural business, and with proper planning, Baphalane can develop a strong agro-business model that will create jobs and drive local economic growth.
              </p>
            </motion.div>

            {/* The Way Forward */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-center mt-10 mb-4 text-gray-800">
                The Way Forward: Unity, Development, and Accountability
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Leadership and Governance Reform',
                    text: 'Traditional leadership must be strengthened, and unqualified individuals in positions of power should be removed. Administrative appointments must be transparent and accountable.',
                  },
                  {
                    title: 'Economic and Skills Development',
                    text: 'Young people should be encouraged to pursue skills in engineering, education, and agriculture. Professional expertise should be welcomed rather than rejected.',
                  },
                  {
                    title: 'Land and Resource Management',
                    text: 'Illegal land allocation must stop. Schools and essential services must be protected from corruption and misuse.',
                  },
                  {
                    title: 'Agricultural Growth and Self-Sufficiency',
                    text: 'Investing in agro-business will enable economic stability and self-reliance, reducing dependence on external support.',
                  },
                  {
                    title: 'Community Unity and Vision',
                    text: 'The culture of division, internal conflicts, and short-term thinking must end. Baphalane must unite towards long-term prosperity.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-gray-800">
                The critical question remains: If we reject outside expertise, what skills do we, as a community, bring to the table? The future of Baphalane lies in its ability to embrace knowledge, economic independence, and strong leadership.{' '}
                <strong>Motho ke Motho ka Batho.</strong> (A person is a person through others.)
              </p>
            </motion.div>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
