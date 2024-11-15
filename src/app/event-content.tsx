"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "John & the Locals",
    des: " In the heart of Eastern Nepal, the vibrant city of Dharan has become the birthplace of a musical phenomenon - 'John and The Locals.' Comprising five exceptionally talented individuals, this band has not only captured the hearts of locals but has also become the most demanded musical artist of today's time.",
    name: "John Chamling Rai",
    panel: "Halla Events",
    youtube: "https://www.youtube.com/@TVjohnandthelocals",
    img: "/image/john.jpg",
  },
  {
    title: "Sushant KC",
    des: "Born and raised in the culturally rich landscapes of Nepal, Sushant KC emerged as a captivating force in the realm of music, enchanting audiences with his emotive melodies and thought-provoking lyrics. ",
    name: "Sushant KC",
    panel: "Halla Events",
    youtube: "https://www.youtube.com/@SushantKC",
    img: "/image/sushant.jpg",
  },
  {
    title: "Batika Eam Rai",
    des: "Bartika Eam Rai is a Nepalese born-American singer-songwriter based in New York City. In 2016, Rai burst onto public consciousness with the release of her debut album, Bimbaakash. Rai has released two albums so far.",
    name: "Batika Eam Rai",
    panel: "Halla Events",
    youtube: "https://www.youtube.com/@BartikaEamRai",
    img: "/image/batika.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      {/* <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab key="Day1" value="Day1" className="font-medium">
              Day 1
            </Tab>
            <Tab key="Day2" value="Day2" className="font-medium">
              Day 2
            </Tab>
            <Tab key="Day3" value="Day3" className="font-medium">
              Day 3
            </Tab>
          </TabsHeader>
        </div>
      </Tabs> */}
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
