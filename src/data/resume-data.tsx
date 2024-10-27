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
  initials: "BJ",
  location: "Ismailila, Egypt",
  locationLink: "https://www.google.com/maps/place/ismailia",
  about:
    "Innovative software engineer specializing in machine learning and computer vision. Demonstrated ability to quickly master new technologies and apply them to complex projects. Seeking opportunities to develop cutting-edge AI solutions and contribute to advancing the field of artificial intelligence.",
  summary:
    "With a passion for machine learning and computer vision, I am a highly motivated programmer with a track record of mastering new software packages and hardware technologies quickly. My exceptional background in these fields has equipped me with the skills and knowledge to excel in challenging projects.",
  avatarUrl: "https://iili.io/JYrt33F.th.jpg",
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
        url: "https://www.linkedin.com/in/ali-m-radwan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Egyptian Academy for Engineering and Advanced Technology",
      degree: "Bachelor's Degree in Electrical Engineering",
      start: "2022 Oct",
      end: "Expected Graduation: May 2027",
    },
    {
      school: "Udacity Data Analysis (online course)",
      degree: "Data Analysis Nanodegree",
      start: "2022",
      end: "2022 Mar",
    },
    {
      school: "Udacity Machine Learning (online course)",
      degree: "Machine Learning Nanodegree",
      start: "2022 Jul",
      end: "2022 Sep",
    },
    {
      school: "Udacity (online course)",
      degree: "Edge AI Fundamentals with OpenVINO™",
      start: "2023",
      end: "present",
    },
    {
      school: "Coursera (online course)",
      degree: "Neural Networks and Deep Learning (DeepLearning.AI)",
      start: "2023",
      end: "present",
    },
    {
      school: "Udemy (online course)",
      degree: "Convolutional Neural Networks for Image Classification",
      start: "2022 Nov",
      end: "2022 Dec",
    },
    {
      school: "Udemy (online course)",
      degree: "Game Hacking With Artificial Intelligence - FPS Aimbot",
      start: "2021 Nov",
      end: "2021 Dec",
    },
    {
      school: "Kaggle (online course)",
      degree: "Kaggle Intro to Deep Learning",
      start: "2022 Jan",
      end: "2022 Jan",
    },
    {
      school: "My Great Learning (online course)",
      degree: "Computer Vision Essentials",
      start: "2021 Apr",
      end: "2021 Apr",
    },
  ],
  work: [
    {
      company: "Upwork",
      link: "https://upwork.com",
      badges: ["Remote"],
      title: "Machine Learning and Software Engineer",
      logo: ParabolLogo,
      start: "2021 Jan",
      end: "current",
      description:
        "Implemented machine learning models across various industries, increasing client efficiency by an average of 25%. Enhanced image recognition capabilities, achieving 95% accuracy in facial recognition projects. Developed natural language processing solutions and applied predictive analytics to optimize business processes.",
    },
    {
      company: "SMSM AI",
      link: "https://smsm.ai",
      badges: ["Remote"],
      title: "R&D Intern",
      logo: ClevertechLogo,
      start: "2024 Feb",
      end: "2024 Jun",
      description:
        "Created a centralized repository for high-quality Arabic language datasets, improving speech recognition model accuracy by 20%. Contributed to speech processing technologies for Arabic, improving dialectal variation handling by 15%.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "TensorFlow",
    "PyTorch",
    "Seaborn",
    "Pandas",
    "Streamlit",
    "Keras",
    "scikit-learn",
    "OpenCV",
    "Transformers",
    "PyQt5",
    "Redis",
    "Docker",
    "Kubernetes",
    "HTML/CSS",
    "Tableau",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Data Analysis",
  ],
  projects: [
    {
      title: "GradeVision",
      techStack: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "PyTorch", "PyQt5"],
      description:
        "An application designed to mark duplicated bubble sheets using machine learning and computer vision. The project involves a Python script designed to facilitate bubble sheet grading through the utilization of computer vision and machine learning techniques. Using Pyqt5 as a modern Interface with custom qss.",
    },
    {
      title: "VARK Test with AI Recommender",
      techStack: ["Chat-GPT API", "Python", "Streamlit", "Machine Learning"],
      description:
        "Using Chat-GPT API to get the perfect recommended learning style according to the VARK test measurements.",
    },
    {
      title: "Abstractive Arabic Summarizer",
      techStack: ["NLP", "Python", "BERT", "Machine Learning", "Transformers"],
      description: "NLP project for Arabic summarization using transformer-based architectures.",
    },
    {
      title: "V2V Communication System",
      techStack: ["CARLA Simulator", "Machine Learning", "Python"],
      description: "Implemented a traffic management system to improve traffic flow efficiency by 30% through vehicle-to-vehicle communication.",
    },
    {
      title: "SLAM, Simultaneous Localization and Mapping",
      techStack: ["Computer Vision", "Python", "OpenCV", "Machine Learning"],
      description: "Work in progress playing around with SLAM.",
    },
    {
      title: "NFT Decentralized Exchange (DEX) development",
      techStack: ["Blockchain", "Solidity"],
      description: "Developed an NFT DEX platform with smart contracts.",
    },
    {
      title: "Real-time Visual Question Answering System",
      techStack: ["NLP", "Computer Vision", "Python"],
      description: "Created a real-time system that answers questions based on visual inputs.",
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
