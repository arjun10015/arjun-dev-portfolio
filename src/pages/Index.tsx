import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Phone, Award, GraduationCap, MapPin, Languages, PhoneIcon } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import myPic from "@/assets/mypic.jpg";
import { motion } from "framer-motion";
import resume from "@/assets/resume.pdf";

const Index = () => {
  const frontendSkills = ["React", "JavaScript", "UI/UX Design", "Figma", "Android Studio", "Visual Studio"];
  const backendSkills = ["Java", "Python", "C", "MySQL", "MERN Stack"];
  const softSkills = ["Problem Solving", "Communication", "Leadership", "Critical Thinking", "Collaboration"];

  const projects = [
    {
      title: "AgroSphere",
      description: "Smart India Hackathon 2024 project - A user-friendly mobile app connecting farmers, consumers, and institutions in a unified agri-network with real-time market prices and product auctions.",
      tech: ["Figma", "Android Studio", "UI/UX Design"],
      role: "UI/UX Designer & Front-end Developer",
      duration: "1 Month",
      achievement: "SIH 2024 Finalist at College Level"
    },
    {
      title: "Library Management System",
      description: "Web-based Library Management System with book search, borrowing management, fine calculation, and user authentication for Saranathan College of Engineering.",
      tech: ["Java", "React", "MySQL", "Figma"],
      role: "UI/UX Designer & Front-end Developer", 
      duration: "1 Month",
      achievement: "College Project"
    }
  ];

  const achievements = [
    "Smart India Hackathon 2024 (SIH) Finalist at College Level",
    "Won 3rd Prize with Cash Award in Technical Quiz", 
    "Best Volunteer Award 2016",
    "Java (NPTEL) Certification",
    "UI/UX Design & Dev with Vue Training"
  ];

  const internships = [
    {
      company: "CodeVertex",
      role: "Web Developer",
      duration: "3 months"
    },
    {
      company: "Cognifyz Technologies", 
      role: "Web Developer",
      duration: "1 month"
    }
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroTech} 
            alt="Tech workspace background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-primary opacity-30"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              
            {/* Left Side - Profile Picture */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src={myPic}
                alt="Arjun Profile"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-elegant border-4 border-primary object-cover p-1 bg-white"
              />
            </div>
            
            {/* Right Side - Text Content */}
            <motion.div
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-display">
                  <span className="text-gradient">
                    Hi, I'm Arjun R 👋
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-foreground font-display">
                  Full Stack Developer
                </h2>
              </div>

              <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
                To apply my knowledge and problem-solving abilities towards innovative and real-world projects. 
                Currently pursuing honors in Full Stack Development, with a commitment to continuous learning 
                and collaboration in dynamic team environments.
              </p>

              {/* Buttons with hover animation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button size="lg" className="tech-glow gradient-primary border-0 text-primary-foreground" asChild>
                    <a href="mailto:arjunpatel10015@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Arjun%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="outline" size="lg" className="tech-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth" asChild>
                    <a href="#projects">
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="outline" size="lg" className="tech-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth" asChild>
                    <a href={resume} download="Arjun_R_Resume.pdf">
                      <ExternalLink className="mr-2 h-5 w-5" />
                        Download Resume
                      </a>
                  </Button>
                </motion.div>
              </div>

              {/* Social Links with animation */}
              <div className="flex justify-center md:justify-start space-x-6 pt-6">
                {[ 
                  { Icon: Github, link: "https://github.com/arjun10015" },
                  { Icon: Linkedin, link: "https://www.linkedin.com/in/arjun-r-9434a3253" },
                  { Icon: Mail, link: "mailto:arjunpatel10015@gmail.com" }
                ].map(({ Icon, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-smooth hover:drop-shadow-glow"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Technical Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Frontend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {frontendSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center">
                    <Database className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Backend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {backendSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Soft Skills</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/80 text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <div className="container-custom">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects that showcase my technical skills and problem-solving abilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm group">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-primary font-medium">
                        {project.achievement}
                      </p>
                      <p className="text-card-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Role:</strong> {project.role}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground">
                Education
              </h2>
              
              <div className="space-y-6">
                <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-card-foreground">B.E (Computer Science & Engineering)</h3>
                        <p className="text-muted-foreground">Saranathan College Of Engineering, Tiruchirappalli</p>
                        <p className="text-sm text-primary font-medium">CGPA: 8.59 | 2022 - 2026</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-card-foreground">HSC (Computer Science)</h3>
                        <p className="text-muted-foreground">Bishop Heber Higher Secondary School</p>
                        <p className="text-sm text-primary font-medium">85.50% | 2021 - 2022</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground">
                Experience
              </h2>
              
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <Card key={index} className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Code className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-card-foreground">{internship.role}</h3>
                          <p className="text-muted-foreground">{internship.company}</p>
                          <p className="text-sm text-primary font-medium">{internship.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Achievements & Certificates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recognition and certifications that mark my journey in technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-card-foreground">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl text-center md:text-4xl font-bold font-display text-foreground">
                About Me
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p>
                  I am a 21-year-old Computer Science Engineering student from Tiruchirappalli, 
                  passionate about creating innovative solutions through technology. As an Executive 
                  Member of Turing Guild, I actively organize technical events and participate in 
                  workshops and symposiums across various colleges.
                </p>
                <p>
                  Beyond coding, I have diverse interests including painting and drawing, which help 
                  me approach problems creatively. I am fluent in English, Tamil, and Hindi, enabling 
                  me to communicate effectively in diverse environments.
                </p>
                <p>
                  With experience in hackathons like Smart India Hackathon 2024 and internships at 
                  CodeVertex and Cognifyz Technologies, I am eager to contribute to meaningful projects 
                  while continuing to grow as a Full Stack Developer.
                </p>
              </div>
            </div>
            
            <Card className="tech-glow border-border/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-card-foreground">Personal Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Tiruchirappalli, India</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <Languages className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">Languages Known</p>
                        <p className="text-sm text-muted-foreground">
                        English, Tamil, Hindi
                      </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <PhoneIcon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">Phone</p>
                        <a href="tel:+918870902132" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                          +91 8870902132
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <Mail className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">Email</p>
                        <a href="mailto:arjunpatel10015@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                          arjunpatel10015@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing border-t border-border/20">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                Let's Connect
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I am always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tech-glow transition-smooth" asChild>
                <a href="mailto:arjunpatel10015@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Arjun%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tech-glow transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/arjun-r-9434a3253" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tech-glow transition-smooth" asChild>
                <a href="https://github.com/arjun10015" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tech-glow transition-smooth" asChild>
                <a href="tel:+918870902132">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/20 mt-16">
        © {new Date().getFullYear()} Arjun R 
      </footer>
    </div>
  );
};

export default Index;