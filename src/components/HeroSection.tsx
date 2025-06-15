
import { ArrowRight } from "lucide-react";
import * as React from "react";

const partners = [
  { name: "ClickUp", logo: "/placeholder.svg" },
  { name: "Dropbox", logo: "/placeholder.svg" },
  { name: "PAYCHEX", logo: "/placeholder.svg" },
  { name: "elastic", logo: "/placeholder.svg" },
  { name: "stripe", logo: "/placeholder.svg" },
];

// scroll to projects ref
const scrollToProjects = () => {
  const elem = document.getElementById("projects-section");
  if (elem) elem.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section className="w-full bg-neutral-900 dark:bg-black text-white flex flex-col items-center relative py-16 px-4">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
      {/* Left: Info */}
      <div className="flex-1 space-y-5">
        <span className="text-sm font-medium text-gray-400">Jakarta Timur, Indonesia</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 font-playfair">
          Nadhif Faris A.S
        </h1>
        <p className="max-w-xl text-base text-gray-200 leading-relaxed">
          I am an active undergraduate student in Informatics at Telkom University, Bandung, with a strong passion for data science and analytics. My interests focus on data processing, exploratory data analysis, and data visualization to support informed decision-making.
        </p>
        <button
          onClick={scrollToProjects}
          className="mt-6 bg-green-500 hover:bg-green-600 active:bg-green-700 text-lg px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-3 shadow focus:outline-none focus:ring-2 focus:ring-green-300 animate-fade-in"
        >
          Let&apos;s get started <ArrowRight className="ml-1 w-5 h-5" />
        </button>
        <div className="mt-7">
          <span className="text-gray-400 text-sm font-semibold">Worked with</span>
          <div className="mt-2 flex gap-2 flex-wrap">
            {partners.map((p) => (
              <div key={p.name} className="px-5 py-2 border border-neutral-700 bg-neutral-800 rounded-md text-neutral-300 font-bold text-sm opacity-75">
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Avatar */}
      <div className="flex flex-col items-center flex-1 min-w-[240px]">
        <div className="w-48 h-48 rounded-full bg-white border-4 border-neutral-700 overflow-hidden shadow-lg flex items-center justify-center animate-fade-in">
          <img
            src="/lovable-uploads/cdf48b10-3417-487c-b45e-c3eefb3e4b7c.png"
            alt="Profile"
            className="object-cover w-full h-full"
            draggable={false}
          />
        </div>
        <div className="mt-4 text-gray-200 text-center text-base font-medium">Data Analyst &amp; Data Scientist</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
