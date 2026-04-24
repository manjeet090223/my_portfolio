import MediTrackImg from '../assets/MediTrack.png';
import ExpenseTrackerImg from '../assets/Expense_Tracker.png';
import budgetCalculatorImg from '../assets/budget_tracker.png';
import game2048Img from '../assets/2048.png';

export const portfolioData = {
  personal: {
    name: "Manjeet",
    role: "A Passionate Web Developer",
    email: "manjeet2024@nst.rishihood.edu.in",
    phone: "8901336802",
    address: "Rishihood University, Sonipat, Haryana",
    tagline: "I enjoy transforming complex ideas into seamless digital experiences.",
    bio: "Aspiring Full Stack Developer with a solid foundation in building scalable and user-centric web applications. Proficient in developing end-to-end solutions, from responsive front-end interfaces to efficient back-end systems. Focused on writing clean, maintainable code and continuously enhancing technical expertise to deliver high-quality, impactful software."
  },
  home: {
    typewriterWords: ["A Passionate Full Stack Developer", "Data Analyst", "Web Designer"],
  },
  about: {
    skills: [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "React", level: "75%" },
      { name: "Node.js", level: "80%" },
      { name: "Python", level: "80%" },
      { name: "MySQL", level: "75%" },
      { name: "Tableu", level: "85%" },
      { name: "Excel", level: "85%" },
      { name: "MongoDB", level: "75%" },
      { name: "Git/Github", level: "90%" },
      { name: "Cypress", level: "75%" },
      { name: "EDA", level: "80%" },
      { name: "Pandas", level: "85%" },
      { name: "NumPy", level: "80%" },
      { name: "Matplotlib", level: "80%" },
    ],
    stats: [
      { label: "Happy Clients", value: "232" },
      { label: "Projects", value: "521" },
      { label: "Hours Of Support", value: "1463" },
      { label: "Hard Workers", value: "15" },
    ],
  },
  resume: {
    summary: "Aspiring Full Stack Developer with hands-on experience in building scalable web applications across both front-end and back-end. Proficient in developing responsive user interfaces and efficient server-side systems. Strong focus on clean code, performance, and continuous learning, with a passion for solving real-world problems through technology.",
    education: [
      {
        degree: "B.Tech in Computer Science",
        school: "Rishihood University",
        year: "2024 - 2028",
        desc: "Relevant Coursework: Data Structures, DBMS, Operating Systems, Web Development. Built multiple full-stack projects applying modern development practices",
      },
      {
        degree: "High School",
        school: "Arya Girls Public School",
        year: "2014 - 2024", 
        desc: "Focused on science and mathematics, built strong problem-solving skills.",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "MediTrack - Healthcare Management System",
        desc: "MediTrack is a full-stack web application designed to manage and track patient records, appointments, and medical data efficiently",
        img: MediTrackImg,
        link: "https://medi-track-alpha.vercel.app/login",
      },
      {
        title: "Expense Tracker",
        desc: "Expense Tracker is a full-stack web application for managing and analyzing personal expenses with real-time tracking and insights.",
        img: ExpenseTrackerImg,
        link: "https://expense-tracker-theta-blue-22.vercel.app/login",
      },
      {
        title: "Budget Calculator",
        desc: "A simple yet effective budget calculator for managing personal finances.",
        img: budgetCalculatorImg,
        link: "https://manjeet090223.github.io/budget_calculator/",
      },
      {
        title: "2048 Game",
        desc: "A simple yet effective 2048 puzzle game.",
        img: game2048Img,
        link: "https://manjeet090223.github.io/2048_game/",
      }
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/manjeet-sandhu-aba075352",
    github: "https://github.com/manjeet090223",
    leetcode: "https://leetcode.com/u/LgJFAjn6N4/",
  },
};
