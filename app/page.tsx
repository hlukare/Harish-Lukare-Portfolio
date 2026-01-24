import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ContactForm from "@/components/ContactForm";
import PhotoGallery from "@/components/PhotoGallery"; // adjust the path if needed

import {
  BookOpen,
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Users,
  Briefcase,
  Cpu,
  Award,
  Calendar,
  Send,
} from "lucide-react"
import { HackathonCarousel } from "@/components/hackathon-carousel"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <Link href="/" className="font-bold text-xl">
            Harish Lukare
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            {/* <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4">
              Education
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link> */}
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            {/* <Link href="#hackathons" className="text-sm font-medium hover:underline underline-offset-4">
              Hackathons
            </Link> */}
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#achievements" className="text-sm font-medium hover:underline underline-offset-4">
              Achievements
            </Link>
            {/* <Link href="#activities" className="text-sm font-medium hover:underline underline-offset-4">
              Activities
            </Link> */}
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link href="https://drive.google.com/file/d/1-WJgeIfIJwPqJXsSj1v1AYT3y9feM8_Y/view?usp=sharing">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 w-full">
        {/* Introduction Section */}
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Harish Lukare</h1>
              <h2 className="text-2xl font-medium text-muted-foreground">BTech Computer Engineering Student</h2>
              <p className="text-muted-foreground">
              I am a final-year Computer Engineering student at K K Wagh Institute of Engineering Education and Research, 
              specializing in software development with expertise in web development and AI/ML. My interest lies in logic 
              building in data structures and algorithms.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://drive.google.com/file/d/1-WJgeIfIJwPqJXsSj1v1AYT3y9feM8_Y/view?usp=sharing">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/lukare-harish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#0077B5] text-white p-2 rounded-full">
                    <Linkedin className="h-6 w-6" />
                  </div>
                </a>
                <a
                  href="https://github.com/hlukare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#333] text-white p-2 rounded-full dark:bg-[#6e5494]">
                    <Github className="h-6 w-6" />
                  </div>
                </a>
                <a
                  href="mailto:hdlukare@gmail.com"
                  aria-label="Email"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#EA4335] text-white p-2 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                </a>
                <a
                  href="https://medium.com/@harishlukare6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium Blog"
                  className="transition-transform hover:scale-110"
                >
                  <div className="bg-[#000000] text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-full border-4 border-border max-w-[350px] mx-auto">
              <img
                // src="https://res.cloudinary.com/dvctaufba/image/upload/v1744533754/profile_oauwbi.jpg"
                src="https://res.cloudinary.com/dvctaufba/image/upload/v1768716452/Harish_Lukare_q91j3b.jpg"
                alt="Harish Lukare"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 scroll-mt-16">
          <div className="space-y-6 max-w-[75%] mx-auto">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Engineer Intern (Backend – Golang)</CardTitle>
                      <CardDescription>Josh Software Inc. | Pune, Maharashtra</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">January 2026 - Present</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developing and maintaining production-grade backend services in Golang, building RESTful APIs with proper versioning, validation, and error handling in a real-world product environment.</li>
                    <li>Implementing authentication and authorization mechanisms, role-based access control, and secure API workflows while working under senior backend engineers following industry best practices.</li>
                    <li>Working on a backend project involving database transactions, concurrency, and service-to-service communication, following code reviews, testing, and Agile development processes.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Engineering Intern (Full Stack)</CardTitle>
                      <CardDescription>Inew Technologies LLP | Remote – Pune, Maharashtra</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">July 2025 - December 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Designed, implemented, and operated production microservices; improving end-to-end latency by <strong>300 ms</strong> while handling <strong>195K+</strong> edge requests, <strong>687+</strong> function invocations, and <strong>15+ GB</strong> fast data transfer.</li>
                    <li>Worked in an Agile/Scrum team, actively participating in daily stand-ups, sprint planning, and code reviews; owned features from requirements through deployment, supporting <strong>1000+</strong> active users with p95 &lt; <strong>350 ms</strong> latency, microfrontend routing.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Frontend Developer Intern</CardTitle>
                      <CardDescription>UDM Enterprise Private Limited | Gurgaon, Haryana</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">February 2025 – August 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                    Developed AI-driven solutions for client digital presence and increased readability by 40%.                    </li>
                    <li>Collaborated with the frontend team to integrate APIs with Javascript components.</li>
                    <li>Worked in a collaborative environment to enhance operational efficiency through 360° Marketing & IT Solutions.</li>
                    <li>
                      Followed Agile methodology.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>SDE Intern (Virtual)</CardTitle>
                      <CardDescription>BlueStock | Mumbai, Maharashtra</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">October 2024 – December 2024</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Designed and developed responsive web pages using HTML, CSS, and JavaScript.</li>
                    <li>Contributed to building scalable web applications with JavaScript and Node.js, resulting in a 30% increase in user
                    engagement and 50% faster load times.</li>
                    <li>Collaborated with a distributed team to implement cloud-based solutions, improving data-driven insights and
                    optimizing CI/CD pipelines, reducing deployment time by 40%.</li>
                    <li>Optimized website performance, improving page load times by 25%.</li>
                  </ul>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Data Structures & Algorithms</h3>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-muted rounded-full text-sm">
                          LeetCode Rating 1500+
                        </div>
                        <div className="px-3 py-1 bg-muted rounded-full text-sm">
                          Handle: harishlukare
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">CS Fundamentals</h3>
                      <div className="flex flex-wrap gap-2">
                        {["DS & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {["C/C++", "Go", "Java", "Python", "JavaScript", "SQL"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Backend & Deployment</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "CI/CD"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Backend Systems</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Linux", "Distributed Systems", "Fault Tolerance", "High Availability", "Agile Delivery"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Software/Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Git/GitHub", "JUnit", "VS Code", "Jupyter"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Professional Skills</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Problem Solving", "Team Leadership", "Communication", "Time Management", "Critical Thinking", "Adaptability", "Project Management"].map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Cloud VM Management System"
                description="A cloud infrastructure management platform for monitoring and managing virtual machines across AWS, Azure, and GCP with real-time monitoring, cost analysis, and automated snapshots."
                skills={["Node.js", "Express", "MongoDB", "React 18", "Vite", "Tailwind CSS", "JWT", "OAuth"]}
                githubLink="https://github.com/hlukare/CloudStack-Management-System.git"
                demoLink="https://vm-monitoring.vercel.app/"
              />

              <ProjectCard
                title="Institute analysis and ranking based on AIML"
                description="Developed an ML-based system to analyze and rank institutes with 85% accuracy, improving training evaluation efficiency and identifying underperforming institutions."
                skills={["TensorFlow", "MongoDB", "Llama LLM", "PyTorch", "Machine Learning", "Distributed Systems", "Natural Language Processing (NLP)"]}
                githubLink="https://github.com/hlukare/AI-ML-project-Institute-analysis"
                demoLink="https://cms-sih.vercel.app/"
              />

              <ProjectCard
                title="Union Bank AI-Driven Service Assistant"
                description="Revolutionized banking customer service with AI: Video query submission, AI classification, multilingual support, fraud detection, and service ticket generation."
                skills={["Python", "AI/ML", "Node.js", "PostgreSQL", "Android", "Flask", "TensorFlow", "spaCy"]}
                githubLink="https://github.com/hlukare/VYOM-Union-Bank-of-India.git"
                // demoLink="https://sites.google.com/view/hlukare/home"
              />

              <ProjectCard
                title="Personal Expense Tracker"
                description="A backend API service for managing personal expenses with database migration, seed data, and comprehensive testing. Built with clean architecture and RESTful design."
                skills={["Golang", "PostgreSQL", "REST API", "Database Migration"]}
                githubLink="https://github.com/hlukare/Personal-Expense-Tracker.git"
              />

              <ProjectCard
                title="Authentication & Authorization Projects"
                description="A comprehensive collection of authentication implementations demonstrating various security patterns: OTP-Auth (MFA), RBAC-Docs (Role-Based Access), JWT-Auth (Token Management), and SSO-OAuth (Single Sign-On)."
                skills={["Golang", "JWT", "OAuth 2.0", "bcrypt", "RBAC", "REST API"]}
                githubLink="https://github.com/hlukare/GoLang-Mini-Projects.git"
              />

              <ProjectCard
                title="Blog App"
                description="A Ruby on Rails blog application with blogs and comments functionality. Demonstrates CRUD operations, nested comments, published/unpublished status, validations, and RESTful routing."
                skills={["Ruby on Rails", "SQLite3", "REST API", "MVC Architecture"]}
                githubLink="https://github.com/hlukare/ROR-Blogs-App.git"
              />

              <ProjectCard
                title="Gender x Climate: A NASA Space Apps Challenge Project"
                description="A platform exploring the intersection of gender equality and climate action through visualizations, case studies, and educational content to inspire data-driven, inclusive climate strategies."                
                skills={["HTML", "CSS", "JavaScript", "Chart.js"]}
                githubLink="https://github.com/hlukare/NASA-space-app-challenge.git"
                demoLink="https://sync-space1.netlify.app/"
              />

              <ProjectCard
                title="Tree Plantation using Gemini API"
                description="Developed a backend API for a tree plantation platform that facilitates NGO collaboration, self-planting, and tree tracking, with real-time weather data integration."
                skills={["Node.js", "Express.js", "MongoDB", "Firebase", "OpenMeteo API", "API Development"]}
                githubLink="https://github.com/OldStager01/Tree-Plantation.git"
                // demoLink="https://tree-plantation-nine.vercel.app/"
              />

              <ProjectCard
                title="EDukaan – Multilingual Product Listing Assistant"
                description="Built an AI-driven app that enables sellers to create product listings in any Indian language through voice input, simplifying online selling."
                skills={["React Native", "Python", "spaCy", "Google Speech-to-Text", "Cloudinary", "NLP"]}
                githubLink="https://github.com/hlukare/EDukaan.git"
                // demoLink="https://sites.google.com/view/hlukare/home"
              />

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-8 scroll-mt-16">
          <div className="space-y-6 max-w-[75%] mx-auto">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Technology in Computer Engineering</CardTitle>
                <CardDescription>KK Wagh Institute Of Engineering Education and Research, Nashik</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>CGPA: 9.44/10.0</span>
                  <span>2022 - 2026</span>
                </div>
                <p>Relevant Coursework:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Data Structures and Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Management Systems</li>
                  <li>Computer Networks</li>
                  <li>Cloud Computing & Generative AI</li>
                  <li>Operating System</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Hackathons</h2>
            </div>
            <HackathonCarousel />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Academic Excellence, KKWIEER, 2022-25</p>
                        <p className="text-sm text-muted-foreground">
                        Ranked 1st in FY, 2nd in SY, and 1st in TY in KKWIEER Institute.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Copyright (Filed), 2025</p>
                        <p className="text-sm text-muted-foreground">
                        Predictive Policing and Forensics Using Facial Recognition and 5G Metadata Analytics.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Copyright (Registered), 2024</p>
                        <p className="text-sm text-muted-foreground">
                        AI-Driven Monitoring and Evaluation System for Enhancing Skill Training Programs.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">Certifications, 2022-24</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://drive.google.com/drive/folders/1O4YllFTXV-A0HdZl-Z86zXKUnt5RkS4N?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        Completed NPTEL courses in Software Testing, DAA, DBMS, Programming in C/C++.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">AWS Academy Cloud Foundations</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://drive.google.com/drive/folders/1TN9ArkqvcVzQYYZmpht0cdyw95gouYjo?usp=sharing" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        AWS Academy (Apr 2025): Cloud basics, scalability, distributed systems
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">Tech Sanjivani, Winner, 2025</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://www.linkedin.com/posts/lukare-harish_hackathon-engineeringstudents-learning-activity-7407257052680683521-K-gP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4OJ8BLHWeX05-XN8i5ncl8B4iZrl-HDQ" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        Drove end-to-end product design and implementation.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">iDEA Hackathon, Secured AIR 17, 2025</p>
                        <p className="text-sm text-muted-foreground">
                        Team Lead of TechSpectra.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">Smart India Hackathon (SIH), National Winner, 2024</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://www.linkedin.com/posts/lukare-harish_nitsrinagar-sih2024-smartindiahackathon-activity-7275379320351531008-24mB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4OJ8BLHWeX05-XN8i5ncl8B4iZrl-HDQ" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        Led team delivering deployable solution under time constraints.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Open Source Contributor</p>
                        <p className="text-sm text-muted-foreground">
                          Active contributor to open-source projects on C4GT Platform.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Activities</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Co-Curricular Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Joint Secretary at CSI-KKWIEER Chapter, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Managed technical responsibilities including organizing coding competitions, handling official communications, and related tasks.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">Member, 2024-25</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://www.kkwagh.edu.in/engineering/department/department-of-computer-engineering/about-department" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        Department Advisory Board (DAB), Computer Engineering, KKWIEER, Nashik
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Speaker, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Open Source Contributions Session, C4GT at KKWIEER, Nashik
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Technical Paper Presentation</p>
                        <p className="text-sm text-muted-foreground">
                          Presented paper on Multispectral Satellite Image Processing at Regional-level.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Extra-Curricular Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Joint Secretary at CSI-KKWIEER Chapter, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Managed technical responsibilities including organizing coding competitions, handling official communications, and related tasks.
                        </p>
                      </div>
                    </li>
                    {/* <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">Member, 2024-25</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 text-xs px-2"
                            asChild
                          >
                            <Link 
                              href="https://www.kkwagh.edu.in/engineering/department/department-of-computer-engineering/about-department" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                        Department Advisory Board (DAB), Computer Engineering, KKWIEER, Nashik
                        </p>
                      </div>
                    </li> */}
                    {/* <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Speaker, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Open Source Contributions Session, C4GT at KKWIEER, Nashik
                        </p>
                      </div>
                    </li> */}
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Campus Leader</p>
                        <p className="text-sm text-muted-foreground">
                        Code for GovTech (C4GT), 2024-25
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Core Member, MIBCS Technical Club, 2023-24</p>
                        <p className="text-sm text-muted-foreground">
                        Contributed to tech initiatives, project development, and event execution as a core member of MIBCS.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Volunteer - E-waste Collection Drive</p>
                        <p className="text-sm text-muted-foreground">
                        Volunteered in e-waste collection drives across various institutes and companies in Nashik, 2025                      </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Avishkar Zonal Competition</p>
                        <p className="text-sm text-muted-foreground">
                        Volunteer, IDEA Lab KKWIEER, 2024
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-8 scroll-mt-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tight">Achievements Gallery</h2>
          </div>
            <PhotoGallery />
          </div>
        </section>


        {/* Resume Section */}
        <section id="resume" className="py-8 scroll-mt-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Download className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
          </div>
          <Card>
          <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-muted-foreground">
              Here is my resume, feel free to download it for a detailed overview of my education, skills, and experience.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="https://drive.google.com/file/d/1-WJgeIfIJwPqJXsSj1v1AYT3y9feM8_Y/view?usp=sharing" target="_blank">
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </Link>
            </Button>
          </div>
          </CardContent>
         </Card>
        </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:hdlukare@gmail.com" className="hover:underline">
                    hdlukare@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/lukare-harish/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/lukare-harish
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/hlukare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/hlukare
                    </a>
                  </div>
                </CardContent>
              </Card>
              {/* <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>  */}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 w-full">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Harish Lukare. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hdlukare@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lukare-harish/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/hlukare" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
