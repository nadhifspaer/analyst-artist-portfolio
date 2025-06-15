import { ArrowRight } from "lucide-react";
import * as React from "react";
const partners = [
  // ... you can keep current logos or remove for minimal style
];

// scroll to projects ref
const scrollToProjects = () => {
  const elem = document.getElementById("projects-section");
  if (elem) elem.scrollIntoView({
    behavior: "smooth"
  });
};
const HeroSection = () => <section className="w-full bg-white dark:bg-neutral-950 text-black dark:text-white flex flex-col items-center relative py-16 px-4 transition-colors">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
      {/* Left: Info */}
      <div className="flex-1 space-y-5">
        <span className="text-sm font-medium text-gray-400">Jakarta Timur, Indonesia</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 font-playfair">
          Nadhif Faris A.S
        </h1>
        <p className="max-w-xl text-base text-gray-700 dark:text-gray-200 leading-relaxed text-justify">
          I am an active undergraduate student in Informatics at Telkom University, Bandung, with a strong passion for data science and analytics. My interests focus on data processing, exploratory data analysis, and data visualization to support informed decision-making.
        </p>
        <button onClick={scrollToProjects} className="mt-6 bg-green-500 hover:bg-green-600 active:bg-green-700 text-lg px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-3 shadow focus:outline-none focus:ring-2 focus:ring-green-300 animate-fade-in">
          Let&apos;s get started <ArrowRight className="ml-1 w-5 h-5" />
        </button>
      </div>
      {/* Right: Avatar */}
      <div className="flex flex-col items-center flex-1 min-w-[240px]">
        <div className="w-48 h-48 rounded-full bg-white border-4 border-neutral-700 overflow-hidden shadow-lg flex items-center justify-center animate-fade-in">
          <img src="/lovable-uploads/a076afaa-613f-4b09-a534-5aaa09d608f9.png" alt="Profile" className="object-cover w-full h-full" draggable={false} />
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-200 text-center text-base font-medium">
          Data Analyst &amp; Data Scientist
        </div>
      </div>
    </div>
  </section>;
export default HeroSection;