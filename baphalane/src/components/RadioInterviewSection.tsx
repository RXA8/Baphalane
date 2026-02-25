"use client";

export default function RadioInterviewSection() {
  return (
    <section className="bg-gray-500 py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-6xl md:text-3xl font-semibold text-white">
            Radio Interview
          </h3>
          <p className="text-white mt-2 text-4xl">
            Kgosi JEM Ramokoka on Motsweding FM
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Embed */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://omny.fm/shows/motsogapele/motsogapele-bakwena-ba-phalane-baphalane-kgosi-manotshe-ramokoka-and-boikanyo-ramogoelelo-27-november-2025/embed?media=Audio&size=Square"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; clipboard-write; fullscreen"
              loading="lazy"
              title="Kgosi JEM Ramokoka Radio Interview"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Interview Overview
            </h4>

            <p className="text-white leading-relaxed mb-4">
              In this interview, Kgosi JEM Ramokoka shares insights on the evolving
              role of traditional leadership in modern society. The discussion
              explores how chieftaincy continues to play a vital role in guiding
              communities while working alongside government structures.
            </p>

            <p className="text-white leading-relaxed mb-4">
              The conversation also highlights key topics including economic
              development, collaboration with local government, infrastructure
              growth, and improving service delivery to communities. It provides
              valuable perspectives on leadership, governance, and community
              development priorities.
            </p>

            <div className="mt-6">
            <h4 className="text-sm font-semibold text-white mb-4 text-center tracking-wide">
                Topics Covered
            </h4>

            <div className="flex flex-wrap justify-center gap-2">
                {[
                "Chieftaincy",
                "Economic development",
                "Local government collaboration",
                "Infrastructure",
                "Service delivery",
                ].map((topic) => (
                <span
                    key={topic}
                    className="px-3 py-1 text-xs font-medium text-white rounded-full border border-white hover:border-white transition-colors"
                >
                    {topic}
                </span>
                ))}
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}