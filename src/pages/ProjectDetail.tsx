
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projectsDetail = {
  xgboost: {
    title: "Classification Using XGBoost",
    content: (
      <div>
        <p>This project utilizes the Breast Cancer Wisconsin (Diagnostic) dataset to classify tumors as benign or malignant using the <strong>XGBoost</strong> algorithm. Three different preprocessing schemes were compared to evaluate performance and visualized using various metrics.</p>
        <img src="/placeholder.svg" alt="Chart" className="w-full max-w-lg my-8 rounded-lg shadow mx-auto" />
        <p>
          Key learnings: Data preparation, handling imbalanced datasets, model evaluation, ROC/AUC visualizations, pipeline automation.
        </p>
      </div>
    ),
  },
  yolo: {
    title: "Object Detection Using YOLO",
    content: (
      <div>
        <p>This project focuses on implementing deep learning-based object detection using the <strong>YOLOv8</strong> model to identify hazardous items in X-ray baggage images sourced from the Roboflow dataset. For this project, we used YOLOv8 as a base model and YOLOv12 for comparison.</p>
        <img src="/placeholder.svg" alt="Object Detected" className="w-full max-w-lg my-8 rounded-lg shadow mx-auto" />
        <p>
          Key learnings: Labeling, model fine-tuning, dataset augmentation, precision/recall evaluation on real-world validation.
        </p>
      </div>
    ),
  },
  "case-study": {
    title: "Work name here",
    content: (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Learnings: stakeholder engagement, iterative improvement, end-to-end dashboarding.</p>
        <img src="/placeholder.svg" alt="Screenshot" className="w-full max-w-lg my-8 rounded-lg shadow mx-auto" />
      </div>
    ),
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const proj = projectsDetail[projectId as keyof typeof projectsDetail];

  if (!proj) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
        <Link to="/" className="text-green-600 hover:underline">← Return Home</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold font-playfair mb-6">{proj.title}</h1>
        <div className="prose dark:prose-invert max-w-none">{proj.content}</div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 text-green-600 font-bold hover:underline group"
        >
          Back to Home
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
