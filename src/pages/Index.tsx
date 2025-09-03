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
    <div className="min-h-screen gradient-subtle overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-spacing gradient-hero min-h-screen flex items-center relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroTech} 
            alt="Tech workspace background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-8 items-center">
            {/* Profile Picture */}
            <motion.div className="flex items-center justify-center lg:justify-centre"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={myPic}
                alt="Arjun Profile"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-floating border-4 border-primary/30 object-cover p-2 glass-card hover-lift"
              />
            </motion.div>

            {/* Hero Text */}
            <motion.div
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-gradient text-glow">
                Hi, I'm Arjun R 👋
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-semibold">
                Full Stack Developer
              </h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                To apply my knowledge and problem-solving abilities towards innovative and real-world projects. 
                Currently pursuing honors in Full Stack Development, with a commitment to continuous learning 
                and collaboration in dynamic team environments.
              </p>
      
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-fluid-md justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="tech-glow gradient-primary border-0 text-primary-foreground px-fluid-lg py-fluid-md text-fluid-base" asChild>
                    <a href="mailto:arjunpatel10015@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Arjun%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary text-fluid-base px-fluid-lg py-fluid-md" asChild>
                    <a href="#projects">
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary text-fluid-base px-fluid-lg py-fluid-md" asChild>
                    <a href={resume} download="Arjun_R_Resume.pdf">
                      <ExternalLink className="mr-2 h-5 w-5" />
                        Download Resume
                      </a>
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-fluid-lg pt-fluid-lg">
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
                    className="text-foreground/70 hover:gradient-primary transition-spring hover:drop-shadow-glow p-fluid-sm rounded-xl glass-button"
                    whileHover={{ scale: 1.2, rotate: 5 }}
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
          <div className="text-center space-y-fluid-2xl">
            <motion.div 
              className="space-y-fluid-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-foreground text-glow">
                Technical Skills
              </h2>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>
            
            <div className="grid-fluid p-6 pt-12">
              {[
                { title: "Frontend", icon: Code, skills: frontendSkills },
                { title: "Backend", icon: Database, skills: backendSkills },
                { title: "Soft Skills", icon: Globe, skills: softSkills }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover-lift h-full ">
                    <CardContent className="p-fluid-xl text-center space-y-fluid-lg h-full flex flex-col">
                      <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6">
                        <category.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-fluid-xl font-bold text-card-foreground">{category.title}</h3>
                      <div className="flex flex-wrap justify-center gap-2">

                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/80 text-secondary-foreground text-fluid-sm px-fluid-md py-fluid-xs hover-glow transition-spring">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <div className="container-custom">
          <div className="text-center space-y-fluid-2xl">
            <motion.div 
              className="space-y-fluid-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-foreground text-glow">
                Featured Projects
              </h2>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of projects that showcase my technical skills and problem-solving abilities
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 space-fluid-xl">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover-lift h-full group">
                    <CardContent className="p-fluid-xl space-y-fluid-lg h-full flex flex-col">
                      <div className="space-y-fluid-md flex-1">
                        <div className="text-center space-y-fluid-sm">
                          <h3 className="text-fluid-xl font-bold text-card-foreground group-hover:text-primary transition-spring">
                            {project.title}
                          </h3>
                          <p className="text-fluid-sm text-primary font-medium bg-primary/10 px-fluid-md py-fluid-xs rounded-full inline-block">
                            {project.achievement}
                          </p>
                        </div>
                        <p className="text-card-foreground/80 text-fluid-base leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-fluid-sm text-muted-foreground">
                          <strong>Role:</strong> {project.role}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap justify-center space-fluid-sm">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover-glow transition-spring text-fluid-xs px-fluid-sm py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-fluid-2xl">
            {/* Education */}
            <motion.div 
              className="space-y-fluid-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-center text-foreground text-glow">
                Education
              </h2>
              
              <div className="space-y-fluid-lg">
                {[
                  {
                    degree: "B.E (Computer Science & Engineering)",
                    institution: "Saranathan College Of Engineering, Tiruchirappalli",
                    grade: "CGPA: 8.59 | 2022 - 2026"
                  },
                  {
                    degree: "HSC (Computer Science)",
                    institution: "Bishop Heber Higher Secondary School",
                    grade: "85.50% | 2021 - 2022"
                  }
                ].map((edu, index) => (
                  <Card key={index} className="glass-card hover-lift">
                    <CardContent className="p-fluid-lg">
                      <div className="flex items-start space-x-fluid-md">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-fluid-sm">
                          <h3 className="font-bold text-card-foreground text-fluid-lg">{edu.degree}</h3>
                          <p className="text-muted-foreground text-fluid-base">{edu.institution}</p>
                          <p className="text-fluid-sm text-primary font-medium">{edu.grade}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className="space-y-fluid-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-center text-foreground text-glow">
                Experience
              </h2>
              
              <div className="space-y-fluid-lg">
                {internships.map((internship, index) => (
                  <Card key={index} className="glass-card hover-lift">
                    <CardContent className="p-fluid-lg">
                      <div className="flex items-start space-x-fluid-md">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Code className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-fluid-sm">
                          <h3 className="font-bold text-card-foreground text-fluid-lg">{internship.role}</h3>
                          <p className="text-muted-foreground text-fluid-base">{internship.company}</p>
                          <p className="text-fluid-sm text-primary font-medium">{internship.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center space-y-fluid-2xl">
            <motion.div 
              className="space-y-fluid-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-foreground text-glow">
                Achievements & Certificates
              </h2>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Recognition and certifications that mark my journey in technology
              </p>
            </motion.div>
            
            <div className="grid-fluid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover-lift h-full">
                    <CardContent className="p-fluid-lg text-center space-y-fluid-md h-full flex flex-col justify-center">
                      <div className="w-12 h-12 mx-auto gradient-primary rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <p className="text-fluid-sm font-medium leading-relaxed text-card-foreground">{achievement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-fluid-2xl items-center">
            <motion.div 
              className="space-y-fluid-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl text-center lg:text-left font-display text-foreground text-glow">
                About Me
              </h2>
              <div className="space-y-fluid-md text-card-foreground/90 leading-relaxed text-fluid-base">
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-lift">
                <CardContent className="p-fluid-xl">
                  <div className="space-y-fluid-lg">
                    <h3 className="text-fluid-2xl font-bold text-card-foreground">Personal Details</h3>
                    <div className="space-y-fluid-md">
                      {[
                        { icon: MapPin, label: "Location", value: "Tiruchirappalli, India" },
                        { icon: Languages, label: "Languages Known", value: "English, Tamil, Hindi" },
                        { icon: PhoneIcon, label: "Phone", value: "+91 8870902132", href: "tel:+918870902132" },
                        { icon: Mail, label: "Email", value: "arjunpatel10015@gmail.com", href: "mailto:arjunpatel10015@gmail.com" }
                      ].map((detail, index) => (
                        <div key={index} className="flex items-center space-x-fluid-md">
                          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                            <detail.icon className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-card-foreground text-fluid-base">{detail.label}</p>
                            {detail.href ? (
                              <a href={detail.href} className="text-fluid-sm text-muted-foreground hover:text-primary transition-spring">
                                {detail.value}
                              </a>
                            ) : (
                              <p className="text-fluid-sm text-muted-foreground">{detail.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing border-t border-border/20">
        <div className="container-custom">
          <div className="text-center space-y-fluid-xl">
            <motion.div 
              className="space-y-fluid-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-4xl font-display text-foreground text-glow">
                Let's Connect
              </h2>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I am always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row space-fluid-md justify-center">
              {[
                { icon: Mail, label: "Send Email", href: "mailto:arjunpatel10015@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Arjun%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-r-9434a3253" },
                { icon: Github, label: "GitHub", href: "https://github.com/arjun10015" },
                { icon: Phone, label: "Call Now", href: "tel:+918870902132" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary text-fluid-base px-fluid-lg py-fluid-md" asChild>
                    <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                      <contact.icon className="mr-2 h-5 w-5" />
                      {contact.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-fluid-xl text-center text-muted-foreground border-t border-border/20 mt-fluid-2xl">
        <div className="container-custom">
          <p className="text-fluid-base">© {new Date().getFullYear()} Arjun R - Crafted with passion and modern web technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;