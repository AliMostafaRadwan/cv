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
  location: "ismailila, Egypt",
  locationLink: "https://www.google.com/maps/place/ismailia",
  about:
    "Machine Learning and Computer Vision Engineer focused on building products with extra attention to detail",
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
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Egyptian Academy for Engineering and advanced Technology",
      degree: "Bachelor's Degree in Electronics and Communications Engineering",
      start: "2022 Oct",
      end: "present",
    },
    {
      school: "Udacity Data analysis (online course)",
      degree: "Data analysis Nanodegree",
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
      school: "coursera (online course)",
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
      company: "Freelancer",
      link: "https://freelancer.com",
      badges: ["Remote"],
      title: "python developer",
      logo: ParabolLogo,
      start: "2020",
      end: "current",
      description:
        "working on all sorts of projects related to machine learning and computer vision",
    },
     {
       company: "SMSM",
       link: "https://smsm.ai",
       badges: ["Remote"],
       title: "R&D intern",
       logo: ClevertechLogo,
       start: "2024",
       end: "current",
       description:
         "Research and development",
    },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "Python",
    "SQL",
    "tensorflow",
    "PyTorch",
    "Seaborn",
    "Panadas",
    "Streamlit",
    "Keras",
    "scikit-learn",
    "OpenCV",
    "Transformars",
    "PyQt5",
    "PySide6",
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
      techStack: ["Python", "Machine Learning", "Computer Vision", "OpenCV","PyTorch","PyQt5"],
      description:
        "An application designed to mark duplicated bubble sheets using machine learning and computer vision. The project involves a Python script designed to facilitate bubble sheet grading through the utilization of computer vision and machine learning techniques. Using Pyqt5 as a modern Interface with custom qss.",
    },
    {
      title: "VARK TEST WITH AI RECOMMENDER",
      techStack: ["Chat-GPT API", "Python", "Streamlit", "Machine Learning"],
      description:
        "Using Chat-GPT API to get the perfect recommended learning style according to the VARK test measurements.",

    },
    {
      title: "Abstractivr Arabic Summarizer",
      techStack: ["NLP", "Python", "BERT", "Machine Learning","Transformars"],
      description: "NLP project for Arabic summarization using the SumArabic dataset.",
    },
    {
      title: "SLAM, Simultaneous Localization and Mapping",
      techStack: ["Computer Vision", "Python", "OpenCV", "Machine Learning"],
      description: "Work in progress playing around with SLAM.",
    },
    {
      title: "Remark-Office OMR automation using yolov5",
      techStack: ["Automation", "Python", "yolov5", "Machine Learning", "Computer Vision", "OpenCV"],
      description: "creating a third party app for Remark-Office OMR using yolov5 (outdated).",
    },
    {
      title: "OCR with form classification using pytesseract",
      techStack: ["Automation", "Python", "pytesseract", "Computer Vision", "OpenCV"],
      description: "OCR with form classification using pytesseract.",
    },
    {
      title: "Check More",
      techStack: [""],
      description: "Check my GitHub for more projects.",
      link: {
        label: "GitHub",
        href: "https://www.github.com/AliMostafaRadwan",
      }
    },
  ],
} as const;
