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
      <section className="relative min-h-screen flex items-center py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroTech} 
            alt="Tech workspace background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Profile Picture */}
            <motion.div className="flex items-center justify-center lg:justify-start order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group">
                <img
                  src={myPic}
                  alt="Arjun Profile"
                  className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-floating border-4 border-primary/30 object-cover p-3 glass-card hover-lift transition-all duration-500 group-hover:border-primary/50"
                />
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              className="text-center lg:text-left space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-tight text-gradient text-glow">
                  Hi, I'm Arjun R 👋
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/80 font-semibold">
                  Full Stack Developer
                </h2>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                To apply my knowledge and problem-solving abilities towards innovative and real-world projects. 
                Currently pursuing honors in Full Stack Development, with a commitment to continuous learning 
                and collaboration in dynamic team environments.
              </p>
      
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="tech-glow gradient-primary border-0 text-primary-foreground h-12 px-8 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                    <a href="mailto:arjunpatel10015@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Arjun%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary h-12 px-8 text-base font-medium border-2 hover:border-primary/50 transition-all duration-300" asChild>
                    <a href="#projects">
                      <Code className="mr-2 h-5 w-5" />
                      View Projects
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary h-12 px-8 text-base font-medium border-2 hover:border-primary/50 transition-all duration-300" asChild>
                    <a href={resume} download="Arjun_R_Resume.pdf">
                      <ExternalLink className="mr-2 h-5 w-5" />
                        Download Resume
                      </a>
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 pt-8">
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
                    className="w-14 h-14 rounded-xl glass-button flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6 group-hover:drop-shadow-glow transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground text-glow">
                Technical Skills
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                  className="group"
                >
                  <Card className="glass-card hover-lift h-full transition-all duration-500 group-hover:shadow-2xl border-2 hover:border-primary/30">
                    <CardContent className="p-8 lg:p-10 text-center space-y-8 h-full flex flex-col">
                      <div className="w-20 h-20 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <category.icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                      <div className="flex flex-wrap justify-center gap-3 flex-1">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/80 text-secondary-foreground text-sm px-4 py-2 hover-glow transition-all duration-300 hover:scale-105">
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
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground text-glow">
                Featured Projects
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A collection of projects that showcase my technical skills and problem-solving abilities
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="glass-card hover-lift h-full transition-all duration-500 group-hover:shadow-2xl border-2 hover:border-primary/30">
                    <CardContent className="p-8 lg:p-10 space-y-8 h-full flex flex-col">
                      <div className="space-y-6 flex-1">
                        <div className="text-center space-y-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="inline-flex">
                            <span className="text-sm font-medium text-primary bg-primary/15 px-4 py-2 rounded-full border border-primary/20">
                              {project.achievement}
                            </span>
                          </div>
                        </div>
                        <p className="text-card-foreground/80 text-base lg:text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-card-foreground">Role:</span> {project.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-border/30">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover-glow transition-all duration-300 text-sm px-3 py-1 hover:scale-105">
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Education */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center text-foreground text-glow">
                Education
              </h2>
              
              <div className="space-y-8">
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
                  <Card key={index} className="glass-card hover-lift group transition-all duration-500 border-2 hover:border-primary/30">
                    <CardContent className="p-8 lg:p-10">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                          <GraduationCap className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="font-bold text-card-foreground text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">{edu.institution}</p>
                          <div className="inline-flex">
                            <span className="text-sm font-medium text-primary bg-primary/15 px-3 py-1 rounded-full border border-primary/20">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center text-foreground text-glow">
                Experience
              </h2>
              
              <div className="space-y-8">
                {internships.map((internship, index) => (
                  <Card key={index} className="glass-card hover-lift group transition-all duration-500 border-2 hover:border-primary/30">
                    <CardContent className="p-8 lg:p-10">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Code className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="font-bold text-card-foreground text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">{internship.role}</h3>
                          <p className="text-muted-foreground text-base lg:text-lg">{internship.company}</p>
                          <div className="inline-flex">
                            <span className="text-sm font-medium text-primary bg-primary/15 px-3 py-1 rounded-full border border-primary/20">{internship.duration}</span>
                          </div>
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground text-glow">
                Achievements & Certificates
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Recognition and certifications that mark my journey in technology
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="glass-card hover-lift h-full transition-all duration-500 group-hover:shadow-2xl border-2 hover:border-primary/30">
                    <CardContent className="p-8 lg:p-10 text-center space-y-6 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Award className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <p className="text-sm lg:text-base font-medium leading-relaxed text-card-foreground group-hover:text-primary/90 transition-colors duration-300">{achievement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-display text-foreground text-glow">
                About Me
              </h2>
              <div className="space-y-6 text-card-foreground/90 leading-relaxed text-base lg:text-lg">
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
              className="group"
            >
              <Card className="glass-card hover-lift transition-all duration-500 border-2 hover:border-primary/30">
                <CardContent className="p-8 lg:p-10">
                  <div className="space-y-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">Personal Details</h3>
                    <div className="space-y-6">
                      {[
                        { icon: MapPin, label: "Location", value: "Tiruchirappalli, India" },
                        { icon: Languages, label: "Languages Known", value: "English, Tamil, Hindi" },
                        { icon: PhoneIcon, label: "Phone", value: "+91 8870902132", href: "tel:+918870902132" },
                        { icon: Mail, label: "Email", value: "arjunpatel10015@gmail.com", href: "mailto:arjunpatel10015@gmail.com" }
                      ].map((detail, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-md">
                            <detail.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-card-foreground text-base lg:text-lg">{detail.label}</p>
                            {detail.href ? (
                              <a href={detail.href} className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-all duration-300">
                                {detail.value}
                              </a>
                            ) : (
                              <p className="text-sm lg:text-base text-muted-foreground">{detail.value}</p>
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
      <section className="py-20 lg:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground text-glow">
                Let's Connect
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I am always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center">
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
                  <Button variant="outline" size="lg" className="glass-button hover:gradient-primary h-14 px-8 text-base font-medium border-2 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                    <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                      <contact.icon className="mr-3 h-5 w-5" />
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
      <footer className="py-16 text-center text-muted-foreground border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-base">© {new Date().getFullYear()} Arjun R - Crafted with passion and modern web technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;