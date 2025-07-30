
  import React, { useRef } from "react";

  const WorkSample = () => {
    const projects=[
      {
        "title": "TaskFlow Hub - Employee Task Management System",
        "description": "Internal task management system with admin/employee roles, built with React and localStorage authentication.",
        "techStack": [
          "React",
          "Tailwind CSS",
          "React Router",
          "LocalStorage API",
          "Context API",
          "Custom Hooks"
        ],
        "image": "public/image/EmployeeTask.png",
        "video": "public/video/TaskManager.mp4",
        "liveLink": "https://react-project-ten-mu.vercel.app",
        "githubLink": "https://github.com/alokishere/ReactProject"
      },
      {
        "title": "Morden Web",
        "description": "Modern animated landing page using HTML, SCSS, JS, and GSAP. Smooth scroll-based UI.",
        "techStack": ["HTML", "SCSS", "JavaScript", "GSAP"],
        "image": "public/image/Morden Portfolio ui.png",
        "video": "public/video/mordenPortfolio.mp4",
        "liveLink": "https://morden-web.vercel.app/",
        "githubLink": "https://github.com/alokishere/MordenWeb"
      },
      {
        "title": "Shreya Pattar Brand Store",
        "description": "React-based personal brand store for Shreya Pattar with product showcase, framer-motion animations, GSAP, and login page.",
        "techStack": ["React", "Tailwind", "Framer Motion", "GSAP", "ScrollTrigger"],
        "image": "public/image/ShreyaPattar.png",
        "video": "public/video/shreyaPattar.mp4",
        "liveLink": "https://shreya-pattar.vercel.app/",
        "githubLink": "https://github.com/alokishere/ShreyaPattar"
      },
      {
        "title": "GitHub AC Fetcher",
        "description": "GitHub profile viewer using GitHub API with light/dark mode toggle. Built using HTML, Tailwind CSS, and JavaScript.",
        "techStack": ["HTML", "Tailwind", "JavaScript", "GitHub API"],
        "image": "public/image/Github-ac-fetcher.png",
        "video": "public/video/github.mp4",
        "liveLink": "https://github-ac-fetcher.vercel.app/",
        "githubLink": "https://github.com/alokishere/GitHub-Profile-fetcher"
      },
      {
        "title": "Productivity Dashboard",
        "description": "Multi-feature dashboard including weather, todo list, quotes, themes, and clock. Uses multiple APIs and SCSS.",
        "techStack": ["HTML", "SCSS", "JavaScript", "APIs"],
        "image": "public/image/Productivity DashBord.png",
        "video": "public/video/Dashboard.mp4",
        "liveLink": "https://poductivity-dashboard.vercel.app/",
        "githubLink": "https://github.com/alokishere/Poductivity-dashboard"
      },
      {
        "title": "Food Recipe App",
        "description": "React app for managing recipes with CRUD functionality. Add, view, update, and delete recipes. Login system coming soon.",
        "techStack": ["React","Tailwind" ,"SCSS", "JavaScript", "localStorage"],
        "image": "public/image/Food Recipe.png",
        "video": "public/video/Foodapp.mp4",
        "liveLink": "https://food-recipe-one-beta.vercel.app/",
        "githubLink": "https://github.com/alokishere/Food-Recipe"
      },
      {
        "title": "ProductMart",
        "description": "React-based eCommerce web app with category filters, product detail page, and dynamic product data from backend API.",
        "techStack": ["React", "Tailwind", "API", "Axios", "React Router"],
        "image": "public/image/ProductMart.png",
        "video": "public/video/productmart.mp4",
        "liveLink": "https://productmart.netlify.app/",
        "githubLink": "https://github.com/alokishere/productmart"
      }
    ]
  
    const videoRefs = useRef([]);
  
    const handleMouseEnter = (index) => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
    };
  
    const handleMouseLeave = (index) => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0;
      }
    };
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Image/Video Container (Left) */}
              <div 
                className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-2xl relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {project.video ? (
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={project.video} 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
  
              {/* Details Container (Right) */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-zinc-800">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WorkSample;