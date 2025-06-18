
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Editable content - modify these values before publishing
  const personalInfo = {
    name: "BHANU TEJA PANGULURI",
    title: "Software Engineer | Data Engineer | Data Analyst",
    description: "Software Engineer specializing in scalable systems, data pipelines, and AI/ML solutions. Proficient in Python, AWS, and distributed technologies, I transform complex problems into efficient, data-driven applications. Currently seeking full-time roles where I can leverage my expertise in backend development and generative AI to build impactful products.",
    email: "bhanuteja.panguluri@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhanuteja-panguluri/",
    github: "https://github.com/BhanuTeja-007"
  };

  const education = {
    masters: {
      degree: "Master in Software Engineering",
      university: "University of Maryland - College Park",
      logo: "/UMD_logo.jpg" // Replace with actual UMD logo
    },
    bachelors: {
      degree: "Bachelor in Computer Science", 
      university: "Chandigarh University", // Edit this
      logo: "/CU_logo.jpg" // Replace with actual university logo
    }
  };

  const skills = {
    languages: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
    dataScience: ["Git", "Docker", "AWS", "Kafka", "Hadoop", "Hive", "MongoDB", "PostgreSQL", "Snowflake", "System Design"],
    tools: ["PySpark", "Databricks", "Airflow", "Tableau", "Power BI", "Machine Learning", "AI"]
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "University of Maryland",
      period: "Aug 2023 - Present",
      description: "Designed Python-based data pipelines and inventory optimization systems that reduced stockouts by 67% (15% → 5%) and improved reporting accuracy to 95%. Automated workflows using SQL and microservices architecture, saving 60+ engineering hours/month while enabling $20K in annual cost savings." // Edit this
    },
    {
      title: "Data Engineer",
      company: "ZS Associates",
      period: "Aug 2021 - Jul 2023",
      description: "Designed ML-powered dynamic targeting that drove $1M+ revenue growth. Automated 30% of ETL workflows using AWS/PySpark, reducing pipeline runtime by 42% (6 → 3.5 hrs) and saving 60+ hours monthly." // Edit this
    },
    {
      title: "SDE",
      company: "Toshiba",
      period: "Jan 2021 - Aug 2021",
      description: "Boosted medical imaging speed by 20% via CUDA-optimized algorithms in C++/Python. Improved diagnostic accuracy to 95% with Fourier transform/ML pipelines while strengthening code reliability by 10%." // Edit this
    }
  ];

  const projects = [
    {
      name: "Scalable E-Commerce Platform on AWS", // Edit this
      summary: "Engineered a scalable AWS microservices platform that boosted system reliability to 97% uptime and improved page speeds by 25%, handling 100K+ users seamlessly", // Edit this
      link: "https://github.com/BhanuTeja-007/Scalable-and-Secure-E-commerce-Platform-on-AWS" // Add actual project link
    },
    {
      name: "SkillsBerg E-Learning Platform", // Edit this
      summary: "Revamped the learning platform with React/Node.js, enabling 10K+ concurrent users while accelerating feature development by 30% through modular design.", // Edit this
      link: "https://github.com/BhanuTeja-007" // Add actual project link
    },
    {
      name: "Uber Data Analysis", // Edit this
      summary: "Developed data pipelines processing 1M+ trips that uncovered 15% efficiency gains in driver allocation, enabling data-driven fleet optimization decisions.", // Edit this
      link: "https://github.com/BhanuTeja-007" // Add actual project link
    },
    {
      name: "IoT Smart Waste System", // Edit this
      summary: "Built an IoT monitoring system with optimized routing that reduced garbage overflow incidents by 40% and lowered collection costs by 20%.", // Edit this
      link: "https://github.com/BhanuTeja-007" // Add actual project link
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BHANU
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              {personalInfo.title}
            </p>
            
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-gray-500 text-lg">My Picture</span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.description}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-300 transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-300 transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
              View Resume
            </Button>

            <div className="mt-12 animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-blue-600">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-purple-600">Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.dataScience.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-green-600">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20 pb-12">
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="md:ml-4 mt-2 md:mt-0 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.summary}</p>
                  <Button variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-all">
                    View Link
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-all">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            {/* University Logos and Degrees */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              {/* Masters */}
              <div className="flex items-center gap-4 bg-gray-800 rounded-lg p-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src={education.masters.logo} 
                    alt={`${education.masters.university} Logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-gray-500 text-xs text-center">Logo</div>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{education.masters.degree}</p>
                  <p className="text-gray-400 text-sm">{education.masters.university}</p>
                </div>
              </div>

              {/* Bachelors */}
              <div className="flex items-center gap-4 bg-gray-800 rounded-lg p-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src={education.bachelors.logo} 
                    alt={`${education.bachelors.university} Logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-gray-500 text-xs text-center">Logo</div>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{education.bachelors.degree}</p>
                  <p className="text-gray-400 text-sm">{education.bachelors.university}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                © 2024 {personalInfo.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
