import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ali Mostafa Radwan",
  initials: "AMR",
  location: "Ismailila, Egypt",
  locationLink: "https://www.google.com/maps/place/Ismailia,+Ismailia+Governorate,+Egypt/",
  about:
[cite_start]    "Innovative software engineer specializing in machine learning and computer vision. [cite: 1] [cite_start]Demonstrated ability to quickly master new technologies and apply them to complex projects. [cite: 2] [cite_start]Seeking opportunities to develop cutting-edge Al solutions and contribute to advancing the field of artificial intelligence. [cite: 3]",
  summary:
    "As a software engineer with a specialization in machine learning and computer vision, I have a proven capacity for rapidly acquiring and implementing new technologies on challenging projects. [cite_start]My freelance work has involved implementing machine learning models that increased client efficiency by an average of 25% [cite: 8] [cite_start]and developing image recognition solutions with 95% accuracy[cite: 9]. [cite_start]I have also contributed to improving speech recognition model accuracy by 20% during my internship at SMSM AI[cite: 4]. I am actively looking for roles where I can leverage my skills to create innovative AI solutions.",
  avatarUrl: "https://iili.io/2BTPeYg.md.jpg",
  personalWebsiteUrl: "https://aliradwan.netlify.app",
  contact: {
    email: "alimosamin@gmail.com",
    tel: "+201552652525",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AliMostafaRadwan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ali-m-radwan",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Egyptian Academy for Engineering and Advanced Technology",
      degree: "B.Sc. in Electrical Engineering",
      start: "2022",
      end: "2027 (Expected)",
    },
  ],
  work: [
    {
      company: "Freelancing",
      link: "",
      badges: ["Remote"],
      title: "Machine Learning and Software Engineer",
      logo: ParabolLogo,
      start: "2021 Jan",
      end: "Present",
      description:
[cite_start]        "Implemented machine learning models across various industries, increasing client efficiency by an average of 25%. [cite: 8] [cite_start]Enhanced image recognition capabilities, achieving 95% accuracy in facial recognition projects. [cite: 9] [cite_start]Developed natural language processing solutions, improving sentiment analysis accuracy by 30%. [cite: 10] [cite_start]Applied predictive analytics to optimize business processes, reducing operational costs by 20% for clients. [cite: 11] [cite_start]Utilized Python, TensorFlow, OpenCV, and other technologies to develop scalable solutions for over 50 clients. [cite: 12]",
    },
    {
      company: "SMSM AI",
      link: "https://smsm.ai",
      badges: ["Internship"],
      title: "R&D Intern",
      logo: ClevertechLogo,
      start: "2024 Feb",
      end: "2024 Jun",
      description:
[cite_start]        "Created a centralized repository for high-quality Arabic language datasets, improving speech recognition model accuracy by 20%. [cite: 4] [cite_start]Worked with linguistic experts to develop standardized phonetic transcription guidelines, reducing annotation time by 30%. [cite: 5] [cite_start]Contributed to speech processing technologies for Arabic, improving dialectal variation handling by 15%. [cite: 6]",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "TensorFlow",
    "OpenCV",
    "PyTorch",
    "Seaborn",
    "Pandas",
    "Data Scraping",
    "Streamlit",
    "PyQt5",
    "Keras",
    "Scikit-learn",
    "Transformers",
    "Redis",
    "Docker",
    "Kubernetes",
    "Aws",
    "Ppanel",
    "Elastic Search",
    "Pinecone",
    "LLM",
    "Rag",
    "Langchain",
    "Faiss",
    "FastAPI",
  ],
  projects: [
    {
      title: "Grade Vision",
      techStack: ["AI", "Computer Vision", "Machine Learning", "OpenCV", "PyQt5"],
      description:
[cite_start]        "Developed an AI-powered grading system, reducing the grading time by 50% for a local university. [cite: 13] [cite_start]The system uses computer vision techniques and machine learning algorithms to automate the grading process for multiple-choice exams. [cite: 14]",
    },
    {
      title: "Two-Stage Image Similarity Search API",
      techStack: ["CLIP", "ORB", "RANSAC", "FastAPI", "FAISS"],
      description:
        "Enhanced Visual Search API with a multi-model architecture, developing a production-grade FastAPI service. [cite_start]It implements dual search pipelines: a two-stage approach combining CLIP embeddings with ORB/RANSAC reranking, and Meta's Perception Encoder for high-precision similarity search. [cite: 15] [cite_start]The system features sophisticated caching, API key authentication, dynamic dataset loading, extensive logging, and achieves fast retrieval times through FAISS indexing. [cite: 16]",
    },
    {
      title: "V2V Communication System",
      techStack: ["CARLA Simulator", "Machine Learning", "Python"],
      description: "Implemented a traffic management system in CARLA Simulator, improving the efficiency of traffic flow by 30%. Developed algorithms for vehicle-to-vehicle communication to optimize route planning and reduce congestion.",
    },
    {
      title: "Abstractive Arabic Summarizer",
      techStack: ["NLP", "Python", "BERT", "Machine Learning", "Transformers"],
[cite_start]      description: "Created an NLP model that achieves 85% precision in generating concise Arabic text summaries [cite: 17][cite_start], using transformer-based architectures to handle the complexities of the Arabic language[cite: 18].",
    },
    {
      title: "VARK Test with AI Recommender",
      techStack: ["Chat-GPT API", "Python", "Streamlit", "Machine Learning"],
      description:
        "Using Chat-GPT API to get the perfect recommended learning style according to the VARK test measurements.",
    },
    {
      title: "SLAM, Simultaneous Localization and Mapping",
      techStack: ["Computer Vision", "Python", "OpenCV", "Machine Learning"],
      description: "Work in progress playing around with SLAM.",
    },
    {
[cite_start]      title: "NFT Decentralized Exchange (DEX) development [cite: 19]",
      techStack: ["Blockchain", "Solidity"],
      description: "Developed an NFT DEX platform with smart contracts.",
    },
    {
[cite_start]      title: "Real-time Visual Question Answering System [cite: 19]",
      techStack: ["NLP", "Computer Vision", "Python"],
      description: "Created a real-time system that answers questions based on visual inputs.",
    },
    {
[cite_start]      title: "Chatbot creation and implementation [cite: 19]",
      techStack: ["Python", "NLP"],
      description: "Designed and implemented various chatbots for different applications.",
    },
     {
[cite_start]      title: "Multi-agent Reinforcement Learning [cite: 19]",
      techStack: ["Python", "Reinforcement Learning"],
      description: "Developed and experimented with multi-agent reinforcement learning environments.",
    },
    {
      title: "Check More",
      techStack: [""],
      description: "Check my GitHub for more projects.",
      link: {
        label: "GitHub",
        href: "https://www.github.com/AliMostafaRadwan",
      },
    },
  ],
} as const;
