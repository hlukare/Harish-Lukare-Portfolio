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
              <Link href="https://drive.google.com/file/d/1sJM9RVD_xXYp_4emT2N8_fvga0vBb4oK/view?usp=sharing">
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
                  <Link href="https://drive.google.com/file/d/1sJM9RVD_xXYp_4emT2N8_fvga0vBb4oK/view?usp=sharing">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <a
                  href="www.linkedin.com/in/lukare-harish"
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
                  href="mailto:harishlukare6@gmail.com"
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
                src="https://res.cloudinary.com/dvctaufba/image/upload/v1755332106/photo_q7no8l.jpg"
                alt="Harish Lukare"
                className="object-cover w-full h-full"
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
                      <h3 className="font-medium mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "JavaScript", "Java", "C++", "SQL"].map((skill) => (
                          <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Web Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "MySQL", "PostgreSQL", "MongoDB"].map(
                          (skill) => (
                            <div key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                              {skill}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "Docker", "AWS", "Firebase", "Figma", "Canva", "Postman", "Jupyter"].map((skill) => (
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Problem Solving</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Team Leadership</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Communication</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Time Management</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Critical Thinking</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Adaptability</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Project Management</span>
                      </div>
                    </div>
                    {/* <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Attention to Detail</span>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
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
                      <CardTitle>Full Stack Developer Intern</CardTitle>
                      <CardDescription>Inew Technology | Pune, Maharashtra</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">July 2025 – Present</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Working on responsive websites using React.</li>
                    <li>Deployed application and assigned the domain. Also integrated requests for dynamic content.</li>
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

        {/* Projects Section */}
        <section id="projects" className="py-8 scroll-mt-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Institute analysis and ranking based on AIML"
                description="Developed an ML-based system to analyze and rank institutes with 85% accuracy, improving training evaluation efficiency and identifying underperforming institutions."
                skills={["TensorFlow", "MongoDB", "Llama LLM", "PyTorch", "Machine Learning", "Distributed Systems", "Natural Language Processing (NLP)"]}
                githubLink="https://github.com/hlukare/AI-ML-project-Institute-analysis"
                demoLink="https://cms-sih.vercel.app/"
              />

              <ProjectCard
                title="Gender x Climate: A NASA Space Apps Challenge Project"
                description="A platform exploring the intersection of gender equality and climate action through visualizations, case studies, and educational content to inspire data-driven, inclusive climate strategies."                
                skills={["HTML", "CSS", "JavaScript", "Chart.js"]}
                githubLink="https://github.com/hlukare/NASA-space-app-challenge.git"
                demoLink="https://sync-space1.netlify.app/"
              />

              <ProjectCard
                title="Union Bank AI-Driven Service Assistant"
                description="Revolutionized banking customer service with AI: Video query submission, AI classification, multilingual support, fraud detection, and service ticket generation."
                skills={["Python", "AI/ML", "Node.js", "PostgreSQL", "Android", "Flask", "TensorFlow", "spaCy", "Vosk", "Whisper"]}
                githubLink="https://github.com/hlukare/VYOM-Union-Bank-of-India.git"
                demoLink="https://sites.google.com/view/hlukare/home"
              />

              <ProjectCard
                title="Charitable Trust Website"
                description="Built a responsive and interactive website for a Charitable Trust to spread awareness, showcase initiatives, and enable donations."
                skills={["HTML5", "CSS3", "JavaScript", "GitHub", "Netlify"]}
                githubLink="https://github.com/hlukare/Charitable-trust-website.git"
                demoLink="https://imdpct.netlify.app/"
              />

              <ProjectCard
                title="EDukaan – Multilingual Product Listing Assistant"
                description="Built an AI-driven app that enables sellers to create product listings in any Indian language through voice input, simplifying online selling."
                skills={["React Native", "Python", "spaCy", "Google Speech-to-Text", "Cloudinary", "NLP"]}
                githubLink="https://github.com/hlukare/EDukaan-a-Customer-Seller-Application.git"
                demoLink="https://sites.google.com/view/hlukare/home"
              />

              <ProjectCard
                title="Tree Plantation using Gemini API"
                description="Developed a backend API for a tree plantation platform that facilitates NGO collaboration, self-planting, and tree tracking, with real-time weather data integration."
                skills={["Node.js", "Express.js", "MongoDB", "Firebase", "OpenMeteo API", "API Development"]}
                githubLink="https://github.com/OldStager01/Tree-Plantation.git"
                demoLink="https://tree-plantation-nine.vercel.app/"
/>

            </div>
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
                        <p className="font-medium">AWS Academy Cloud Foundations</p>
                        <p className="text-sm text-muted-foreground">
                        AWS Academy (Apr 2025): Cloud basics, scalability, distributed systems
                        </p>
                      </div>
                    </li>
                    {/* <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Machine Learning</p>
                        <p className="text-sm text-muted-foreground">
                        Andrew Ng (Coursera), Stanford University (Apr 2025): Regression, neural networks
                        </p>
                      </div>
                    </li> */}
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Intellectual Property Rights</p>
                        <p className="text-sm text-muted-foreground">
                        Copyright filed for AI and Machine Learning-based Institute Analysis.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Software Testing</p>
                        <p className="text-sm text-muted-foreground">
                        NPTEL (Feb 2024): Unit testing, debugging.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Certificates</p>
                        <p className="text-sm text-muted-foreground">
                        Design and Analysis of Algorithms, Database Management Systems, Programming in C, Python and C++.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Institute Topper</p>
                        <p className="text-sm text-muted-foreground">
                          Ranked 1 - First Year & Third Year, Rank 2 in Second Year in K.K Wagh Institute Of Engineering Education and Research.
                        </p>
                      </div>
                    </li>
                    
                    
                  </ul>
                    {/* <li className="flex gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Real world Project</p>
                        <p className="text-sm text-muted-foreground">
                        Tech Sanjivani 2025 – Winner (Team Lead)
                        </p>
                      </div>
                    </li> */}
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
                        <p className="font-medium">IDEA Hackathon - Union Bank of India</p>
                        <p className="text-sm text-muted-foreground">
                          Secured position in top 17 teams at the national-level.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Real world Project</p>
                        <p className="text-sm text-muted-foreground">
                        Tech Sanjivani 2025 – Winner (Team Lead).
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Government of India Project - 1st Place</p>
                        <p className="text-sm text-muted-foreground">
                        Smart India Hackathon 2024 – Winner (Team Lead).
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
                        <p className="font-medium">Speaker, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Open Source Contributions Session, C4GT at KKWIEER, Nashik
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Member, 2024-25</p>
                        <p className="text-sm text-muted-foreground">
                        Department Advisory Board (DAB), Computer Engineering, KKWIEER, Nashik
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
                        <p className="font-medium">Avishkar Zonal Competition</p>
                        <p className="text-sm text-muted-foreground">
                        Volunteer, IDEA Lab KKWIEER, 2024
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
                        <p className="font-medium">Campus Leader</p>
                        <p className="text-sm text-muted-foreground">
                        Code for GovTech (C4GT), 2024-25
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
              <Link href="https://drive.google.com/file/d/1sJM9RVD_xXYp_4emT2N8_fvga0vBb4oK/view?usp=sharing" target="_blank">
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
                    <a href="mailto:harishlukare6@gmail.com" className="hover:underline">
                    harishlukare6@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/lukare-harish/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=in"
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
            <a href="mailto:harishlukare6@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lukare-harish/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=in"
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
