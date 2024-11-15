"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Loved it",
    image: "./image/vibe.jpg",
    description:
      "Delve yourself into the music, enjoy the energy",
    subTitle: "Energy",
  },
  {
    title: "Vibe with your friends",
    image: "./image/clique.jpg",
    description:
      "Your clique clicked on the beats.",
    subTitle: "Loudness",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2">
        Tasmania, Hobart
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Halla Events
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to Halla Events. Halla Events is the new wave in Tasmanian Community, founded by young & energetic boys who are passionate into entertainment.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
              image= "./image/community.jpg"
            title="Networking!"
            subTitle="Community"
            description="We value authentic Nepali community here in Tasmania as we share similar story and walkways along our life."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
