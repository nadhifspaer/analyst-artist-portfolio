
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "xgboost",
    title: "Classification Using XGBoost",
    desc: "This project utilizes the Breast Cancer Wisconsin (Diagnostic) dataset to classify tumors as benign or malignant using the XGBoost algorithm. Three different preprocessing schemes were compared to evaluate performance.",
    image: "/placeholder.svg",
    chart: "/placeholder.svg",
    btn: { label: "View Project", color: "bg-yellow-400 hover:bg-yellow-500", },
  },
  {
    id: "yolo",
    title: "Object Detection Using YOLO",
    desc: "This project focuses on implementing deep learning-based object detection using the YOLOv8 model to identify hazardous items in X-ray baggage images. For this project, me and my friends use YOLOv8 as a base model and YOLOv12 for comparison.",
    image: "/placeholder.svg",
    btn: { label: "View Project", color: "bg-blue-600 hover:bg-blue-700", },
  },
  {
    id: "case-study",
    title: "Work name here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/placeholder.svg",
    btn: { label: "View case study", color: "bg-emerald-500 hover:bg-emerald-600", },
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects-section" className="w-full bg-white dark:bg-neutral-950 py-20 px-4 flex flex-col items-center relative z-10">
      <div className="max-w-5xl w-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-black dark:text-white mb-2 text-center">
          Projects
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto text-base mb-12 leading-snug font-medium">
          Learning and Solving Data as a Data Science and Data Analyst.<br />
          For the last 3 years I have been working on many projects and these are the projects.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* XGBoost project card (special with chart on right) */}
          <div className="col-span-2 flex flex-col md:flex-row items-center bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl shadow transition">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{projects[0].title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">{projects[0].desc}</p>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-md text-black font-semibold mt-1 shadow transition ${projects[0].btn.color}`}
                onClick={() => navigate(`/projects/${projects[0].id}`)}
              >
                {projects[0].btn.label} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <img src={projects[0].chart} alt="" className="w-64 h-40 object-contain ml-8 rounded-lg shadow hidden md:block" />
          </div>
          {/* Second row: 2 cards side by side */}
          <div className="flex flex-col md:flex-row gap-8 col-span-2 md:col-span-1">
            <img src={projects[1].image} alt="" className="w-full h-56 object-cover rounded-xl shadow mb-4 md:mb-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{projects[1].title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">{projects[1].desc}</p>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-md text-white font-semibold mt-1 shadow transition ${projects[1].btn.color}`}
                onClick={() => navigate(`/projects/${projects[1].id}`)}
              >
                {projects[1].btn.label} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 col-span-2 md:col-span-1">
            <img src={projects[2].image} alt="" className="w-full h-56 object-cover rounded-xl shadow mb-4 md:mb-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{projects[2].title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">{projects[2].desc}</p>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-md text-white font-semibold mt-1 shadow transition ${projects[2].btn.color}`}
                onClick={() => navigate(`/projects/${projects[2].id}`)}
              >
                {projects[2].btn.label} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
