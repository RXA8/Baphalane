type Event = {
    title: string;
    date: string;
    imageUrl: string;
    description: string;
  };
  
  const EventsSection = ({ events }: { events: Event[] }) => {
    return (
      <section id="events" className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">
            Upcoming Events
          </h3>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {events.map((event, index) => (
              <div
                key={index}
                className="group [perspective:1000px] hover:cursor-pointer"
              >
                <div className="relative h-[20rem] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 rounded-xl border bg-white shadow-lg overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="h-[65%] w-full object-cover"
                    />
                    <div className="h-[35%] p-3 flex flex-col justify-center">
                      <h4 className="text-base font-bold text-gray-800">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
  
                  {/* Back Side */}
                    <div className="absolute inset-0 rounded-xl border bg-gray-500 shadow-lg px-4 py-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                        <h4 className="text-base font-semibold mb-2 text-center">
                            {event.title}
                        </h4>
                        <p className="text-sm text-center whitespace-pre-line">{event.description}</p>
                    </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  export default EventsSection;
  