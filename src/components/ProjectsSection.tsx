
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import clsx from "clsx";

// Modal component for displaying images with larger size for certain projects
const ImageModal = ({
  open,
  onClose,
  imgSrc,
  isLarge = false,
}: {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  isLarge?: boolean;
}) =>
  open ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center animate-fade-in">
      <div
        className={`bg-white dark:bg-neutral-950 rounded-lg overflow-hidden shadow-lg relative ${isLarge ? "max-w-4xl w-[96vw]" : "max-w-xl w-[90vw]"} animate-scale-in transition-transform`}
      >
        <button
          type="button"
          className="absolute top-2 right-2 rounded-full p-1 bg-black/10 hover:bg-black/20 text-black dark:text-white"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={imgSrc}
          alt="Project screenshot"
          className={`w-full object-contain bg-white dark:bg-neutral-900 ${isLarge ? "max-h-[90vh]" : "max-h-[72vh]"}`}
        />
      </div>
    </div>
  ) : null;

// Define the projects
const projects = [
  {
    id: "xgboost",
    title: "Classification Using XGBoost",
    desc:
      "This project utilizes the Breast Cancer Wisconsin (Diagnostic) dataset to classify tumors as benign or malignant using the XGBoost algorithm. Three different preprocessing schemes were compared to evaluate performance.",
    image: "/lovable-uploads/a130b695-ca98-4af6-9d75-7f59c2bc253b.png", // breastcancer.png
    btn: {
      label: "View Project",
      external: "https://drive.google.com/file/d/125Fl_l13pspHB4eosQg6Wcfmbq5014-2/view?usp=sharing",
      color: "bg-yellow-400 hover:bg-yellow-500 text-black",
    },
  },
  {
    id: "yolo",
    title: "X-Ray Baggage Detection Using YOLOv12",
    desc:
      "This project focuses on implementing deep learning-based object detection using the YOLOv8 model to identify hazardous items in X-ray baggage images.",
    image: "/lovable-uploads/f4710adb-b8af-4a3c-ae13-bb186d58ca8d.png", // xray.png
    btn: {
      label: "View Project",
      external: "https://colab.research.google.com/drive/1T4Z9j1pmt7AwxL6VGJrK5CwpsRXCEu3N?usp=sharing",
      color: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  },
  {
    id: "gephi",
    title: "Social Network Analysis on Fox News Channel Using Gephi",
    desc:
      "In this project, I utilized Gephi to visualize the distribution of social media networks by applying the Yifan Hu layout algorithm. This approach enabled me to generate a clear and structured representation of node relationships, highlighting patterns such as degree centrality, closeness, and PageRank. Through the visualization, I analyzed how information spreads across the network, emphasizing key nodes and the overall network structure.",
    image: "/lovable-uploads/76e78a2b-626a-4d80-b638-52c7e9c7856b.png", // foxnews.jpg
    btn: {
      label: "View Project",
      modalImg: "/lovable-uploads/15b9534c-b5b4-4c54-9701-67b6e4b66b58.png", // snagephi.png
      color: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
  },
  {
    id: "azure",
    title: "Preparation Course for Azure AI Fundamentals (AI-900)",
    desc:
      'I have completed the "Preparation Course for Azure AI Fundamentals (AI-900)", which provided foundational knowledge of artificial intelligence and machine learning concepts. The course covered various types of machine learning models, their applications in real-world scenarios, and how they are implemented using Microsoft Azure services.',
    image: "/lovable-uploads/99e2995e-c347-447c-b6c5-09adf724dfa6.png", // azure.png
    btn: {
      label: "View Project",
      modalImg: "/lovable-uploads/99e2995e-c347-447c-b6c5-09adf724dfa6.png", // show azure certificate on modal
      color: "bg-[#0078d4] hover:bg-[#005499] text-white",
    },
  },
];

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalLarge, setModalLarge] = useState(false);

  // Handle modal popups for projects with images to show
  const handleProjectClick = (project: typeof projects[number]) => {
    if (project.btn.modalImg) {
      setModalImg(project.btn.modalImg);
      // Popup is larger for 'gephi' and 'azure'
      setModalLarge(project.id === "gephi" || project.id === "azure");
      setModalOpen(true);
    }
  };

  return (
    <section
      id="projects-section"
      className="w-full bg-neutral-100 dark:bg-neutral-900 py-20 px-4 flex flex-col items-center relative z-10 transition-colors"
    >
      <div className="max-w-3xl w-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-black dark:text-white mb-2 text-center">
          Projects
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto text-base mb-12 leading-snug font-medium">
          Exploring and Analyzing Data as a Data Scientist and Data Analyst.
          <br />
          Over the past three years, I have worked on numerous projects involving data-driven insights, and the following are some of the key projects I have completed.
        </p>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={clsx(
                "flex flex-col md:flex-row items-center bg-white dark:bg-neutral-800 p-6 rounded-xl shadow transition"
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-36 h-36 object-cover rounded-xl shadow mb-4 md:mb-0 md:mr-8"
                draggable={false}
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md text-justify">{project.desc}</p>
                {project.btn.external ? (
                  <a
                    href={project.btn.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-2 rounded-md font-semibold mt-1 shadow transition ${project.btn.color}`}
                  >
                    {project.btn.label} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    className={`flex items-center gap-2 px-6 py-2 rounded-md font-semibold mt-1 shadow transition ${project.btn.color}`}
                    onClick={() => handleProjectClick(project)}
                  >
                    {project.btn.label} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageModal open={modalOpen} onClose={() => setModalOpen(false)} imgSrc={modalImg} isLarge={modalLarge} />
    </section>
  );
};

export default ProjectsSection;

