// src/components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { skills } from '../../config/skills';
import profileImage from './image.jpg'; 

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#0d1117] overflow-hidden"
    >
      <div className="container max-w-6xl px-4 mx-auto">

        {/* --- Personal Profile & Education --- */}
        <div className="grid gap-10 mb-16 md:grid-cols-2">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Personal Profile
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Name:</span> Harsh Bhardwaj
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Current Status:</span> 2nd-year Civil Engineering student at NIT Kurukshetra (4th semester)
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Hobbies & Interests:</span> Chess, zombie movies, web and mobile app development, machine learning, AI integration, FPGA-based hardware projects
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
              Education
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Institute:</span> National Institute of Technology (NIT) Kurukshetra
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Degree:</span> Bachelor of Technology in Civil Engineering
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Year:</span> 2nd Year, 4th Semester
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- My Journey --- */}
        <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over 3 years of experience in web development, I've crafted solutions 
                  ranging from e-commerce platforms to SaaS applications. My expertise spans 
                  both frontend and backend technologies, enabling me to build complete, 
                  scalable solutions.
                </p>
                <p>
                  I believe in clean, maintainable code and intuitive interfaces that deliver 
                  exceptional experiences. Continuously learning and adapting to industry 
                  innovations is at the core of my professional philosophy.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Frontend Architecture</Badge>
                <Badge variant="secondary">Backend Systems</Badge>
                <Badge variant="accent">UI/UX Design</Badge>
                <Badge variant="primary">Full-Stack Solutions</Badge>
              </div>
            </div>
          </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 opacity-20 blur-xl"></div>
              
              <div className="relative aspect-square bg-gradient-to-br from-[#0ea5e9] to-[#0d9488] dark:from-[#0369a1] dark:to-[#0f766e] rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full">
                  {/* Replaced SVG with your profile image */}
                  <div className="flex items-center justify-center w-full h-full">
                    <img 
                      src={profileImage} 
                      alt="Harsh Bhardwaj" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="space-y-1 text-center">
                      <h3 className="text-2xl font-bold text-white">Harsh Bhardwaj</h3>
                      <p className="text-lg text-cyan-100">Full-Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Technical Skills Overview --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-4 text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Technical Skills
          </h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Web Development:</span> 
              <br />
              <span className="ml-2">Frontend:</span> React.js, Next.js, React TypeScript, Tailwind CSS, Webflow
              <br />
              <span className="ml-2">Backend:</span> Node.js, Express.js, RESTful API design
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Authentication & Security:</span> Passport.js, bcrypt-based password hashing, JWT/session management
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Databases:</span> PostgreSQL (pgAdmin, Neon serverless), MongoDB (local & Atlas), schema design, query optimization
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">HTTP Clients & Tools:</span> Axios, Fetch API
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">DevOps & Hosting:</span> Render deployment, AWS Free Tier & Educate (Lambda, S3), AWS Comprehend & Google Cloud Natural Language, Git & GitHub, Postman
            </p>
          </div>
        </motion.div>

        {/* --- Skills Cards --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full">
                <div className="p-5">
                  <div className="flex items-center mb-5">
                    <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-900 capitalize dark:text-white">
                      {category}
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
