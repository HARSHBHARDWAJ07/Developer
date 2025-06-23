// src/config/projects.js
import project1 from '../assets/ecommerce.png';
import project2 from '../assets/financial-educator.png';
import project3 from '../assets/school-dashboard.png';
import project4 from '../assets/knight-trade.png';
import project5 from '../assets/darkpulse-analytics.png';

export const projects = [  
  {  
    id: 1,  
    title: "Carteluxe",  
    description: "The E-commerce app is a modern React-based online shopping platform featuring curated collections of apparel, accessories, and home decor. It offers product browsing, sorting, detailed product views, a shopping cart, and a seamless checkout experience. The app is responsive, user-friendly, and designed for fast, secure, and intuitive shopping.",  
    image: project1,  
    technologies: ["React"],  
    category: "Frontend",  
    featured: true,  
    links: {  
      demo: "https://harshbhardwaj07.github.io/Carteluxe/",  
      github: "https://github.com/HARSHBHARDWAJ07/Carteluxe",  
    },  
  },  
  {  
    id: 2,  
    title: "Task",  
    description: "Empower your financial journey with our robust platform built on Node.js, React, and PostgreSQL. Engage in an AI-driven answer analysis game for personalized learning, receive dynamic real-time market news updates, and enjoy secure OTP sign-in verification. Experience a sleek, intuitive interface designed to boost confidence, insight, and financial expertise seamlessly.",  
    image: project2,  
    technologies: ["React", "node.js", "Express", "PostgreSQL", "Material-UI", "Gemini-AI"],  
    category: "Full-Stack",  
    featured: true,  
    links: {  
      demo: "https://tasc-so9j.onrender.com",  
      github: "https://github.com/HARSHBHARDWAJ07/TASC",  
    },  
  },  
  {  
    id: 3,  
    title: "QKSEC",  
    description: "This Next.js School Management App offers a modern dashboard for administrators, teachers, students, and parents. It features user directories, class and subject management, schedules, announcements, performance tracking, and interactive charts. The intuitive interface streamlines academic operations, communication, and data visualization for efficient school administration and engagement.",  
    image: project3,  
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Quill Editor"],  
    category: "Frontend",  
    featured: false,  
    links: {  
      demo: "https://qksec.onrender.com",  
      github: "https://github.com/HARSHBHARDWAJ07/QKSEC",  
    },  
  },  
  {  
    id: 4,  
    title: "Knight Trade",  
    description: "Knight Trade is an OLX-inspired web application enabling users to buy, sell, and manage products online. It features user authentication, product listings with images, wishlist management, and order tracking. Built with a React frontend and Express backend, Knight Trade offers a seamless, secure marketplace experience for trading various items.",  
    image: project4,  
    technologies: ["React", "Node.js", "Python", "TensorFlow", "NLTK", "Tailwind CSS"],  
    category: "Full-Stack",  
    featured: true,  
    links: {  
      demo: "https://knight-trade.onrender.com",  
      github: "https://github.com/HARSHBHARDWAJ07/KNIGHT-TRADE",  
    },  
  },  
  {  
    id: 5,  
    title: "DarkPulse Analytics",  
    description: "An AI-driven sentiment analysis tool that mines social media and text data to uncover hidden emotional insights. Integrates natural language processing and deep learning models to generate visual sentiment reports.",  
    image: project5,  
    technologies: ["React", "Node.js", "Python", "TensorFlow", "NLTK", "Tailwind CSS"],  
    category: "Full-Stack",  
    featured: true,  
    links: {  
      demo: "https://darkpulse-analytics.onrender.com",  
      github: "https://github.com/HARSHBHARDWAJ07/DarkPulse-Analytics",  
    },  
  },  
];