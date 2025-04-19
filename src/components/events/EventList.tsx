import React from "react";
import { EventCard } from "./EventCard";
import { AddEventButton } from "./AddEventButton";

const mockEvents = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
  },
];

export const EventList: React.FC = () => {
  const handleAddEvent = () => {
    console.log("Add new event clicked");
  };

  const handlePreview = (eventId: number) => {
    console.log("Preview event:", eventId);
  };

  const handleRegister = (eventId: number) => {
    console.log("Register for event:", eventId);
  };

  return (
    <section className="flex max-w-[882px] flex-col overflow-hidden">
      <AddEventButton onClick={handleAddEvent} />

      <div className="w-full mt-[15px] max-md:max-w-full">
        <div className="flex w-full items-center gap-[17px] flex-wrap max-md:max-w-full">
          {mockEvents.slice(0, 2).map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              status={event.status}
              title={event.title}
              date={event.date}
              time={event.time}
              onPreview={() => handlePreview(event.id)}
              onRegister={() => handleRegister(event.id)}
            />
          ))}
        </div>

        <div className="flex w-full items-center gap-[17px] flex-wrap mt-4 max-md:max-w-full">
          {mockEvents.slice(2, 4).map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              status={event.status}
              title={event.title}
              date={event.date}
              time={event.time}
              onPreview={() => handlePreview(event.id)}
              onRegister={() => handleRegister(event.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
