
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "xgboost",
    title: "Classification Using XGBoost",
    desc: "This project utilizes the Breast Cancer Wisconsin (Diagnostic) dataset to classify tumors as benign or malignant using the XGBoost algorithm. Three different preprocessing schemes were compared to evaluate performance.",
    image: "/placeholder.svg",
    btn: {
      label: "View Project",
      color: "bg-yellow-400 hover:bg-yellow-500 text-black",
    },
  },
  {
    id: "yolo",
    title: "Object Detection Using YOLO",
    desc: "This project focuses on implementing deep learning-based object detection using the YOLOv8 model to identify hazardous items in X-ray baggage images. For this project, me and my friends use YOLOv8 as a base model and YOLOv12 for comparison.",
    image: "/placeholder.svg",
    btn: {
      label: "View Project",
      color: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  },
  {
    id: "case-study",
    title: "Work name here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/placeholder.svg",
    btn: {
      label: "View Project",
      color: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
  },
  {
    id: "future-project",
    title: "Another Project",
    desc: "A new future project. This could be a case study or highlight of Data Science work and automation.",
    image: "/placeholder.svg",
    btn: {
      label: "View Project",
      color: "bg-purple-500 hover:bg-purple-700 text-white",
    },
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects-section" className="w-full bg-white dark:bg-neutral-950 py-20 px-4 flex flex-col items-center relative z-10">
      <div className="max-w-3xl w-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-black dark:text-white mb-2 text-center">
          Projects
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto text-base mb-12 leading-snug font-medium">
          Learning and Solving Data as a Data Science and Data Analyst.<br />
          For the last 3 years I have been working on many projects and these are the projects.
        </p>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl shadow transition"
            >
              <img src={project.image} alt="" className="w-36 h-36 object-cover rounded-xl shadow mb-4 md:mb-0 md:mr-8" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">{project.desc}</p>
                <button
                  className={`flex items-center gap-2 px-6 py-2 rounded-md font-semibold mt-1 shadow transition ${project.btn.color}`}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  {project.btn.label} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
