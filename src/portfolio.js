/* Portfolio Configuration File for Haider Ali */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Haider Ali",
  title: "Hi all, I'm Haider",
  subTitle: emoji(
    "Full Stack Application Developer | Flutter & Node.js | AI-Driven & Scalable App Integration | Native and Hybrid Application Development | MVVM and Clean Architecture | SOLID Principles and Design Patterns | API Integration | State Management (BloC and Provider) | Navigation and Routing Techniques | Animations | OOP and Functional Programming | Database (SQL, SQLite, Shared Preferences, Firebase) | CI/CD | Deployment"
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/HaiderAli228",
  linkedin: "https://www.linkedin.com/in/haiderali228/",
  gmail: "flutter2830@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED FLUTTER DEVELOPER FOCUSED ON BUILDING MODERN, SCALABLE MOBILE APPS",
  skills: [
    emoji("⚡ Cross-platform mobile app development using Flutter and Dart for Android and iOS"),
    emoji("⚡ MVVM architecture, RESTful APIs, Firebase integration, and robust debugging skills"),
    emoji("⚡ Deep understanding of state management (Provider, BloC), UI/UX design, and CI/CD")
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Dart", fontAwesomeClassname: "fab fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Government College University Faisalabad",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2021 – 2025",
      desc: "Studied core computer science concepts and application development. Specialized in mobile and AI-integrated applications.",
      descBullets: [
        "Prompt Engineering – Great Learning Academy | Nov 2024",
        "Kotlin – Solo Learn | Feb 2023"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter & Dart", progressPercentage: "90%" },
    { Stack: "API Integration & Backend", progressPercentage: "80%" },
    { Stack: "UI/UX & Animation", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Trainer & Mentor",
      company: "NAVTTC",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Jan 2025 – Present",
      desc: "Mentoring students in mobile app development using Flutter, Dart, and Firebase."
    },
    {
      role: "Flutter Developer Intern",
      company: "TechloSet Solution",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "July 2024 – Dec 2024",
      desc: "Worked on real-world client projects, integrating APIs and optimizing mobile apps."
    },
    {
      role: "Flutter Developer Apprentice",
      company: "TechWare House",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2024 – Jun 2024",
      desc: "Contributed to internal apps using MVVM architecture and SOLID principles."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "My Projects",
  subtitle: "FEATURED APPLICATIONS I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Library – Educational App",
      projectDesc: "Student study material app using Google Drive API, Provider, and Shared Preferences.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/HaiderAli228/Library---Your-Study-Partner" },
        { name: "Download APK", url: "https://github.com/HaiderAli228/Library---Your-Study-Partner/releases/download/v1.0.0/LibraryYourStudyCompanion.apk" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "MindMap – Thought Organizer",
      projectDesc: "Idea organization app with caching, MySQL, and notification support.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "NueraTalk – AI Chatbot",
      projectDesc: "Chatbot using Gemini API and MySQL for real-time user interaction.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "SnapSense – AI Image Generator",
      projectDesc: "Image generator using MidJourney API, implemented with Bloc for state management.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Certifications, Awards and Recognitions",
  achievementsCards: [
    {
      title: "Prompt Engineering",
      subtitle: "Certified by Great Learning Academy",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Prompt Logo",
      footerLink: []
    },
    {
      title: "Kotlin",
      subtitle: "Certified by Solo Learn",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Kotlin Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love writing and teaching others what I’ve learned.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE THROUGH TECH TALKS"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Guest and tech discussion episodes.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my complete resume for more details",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My inbox is open!",
  number: "+92-0000000000",
  email_address: "flutter2830@gmail.com"
};

const twitterDetails = {
  userName: "", 
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
