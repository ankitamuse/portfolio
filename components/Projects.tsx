'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Brain, Shield } from 'lucide-react'

const projects = [
  {
    title: "SonarQube Issue Fixer with Generative AI",
    description: "An AI-powered tool that automatically identifies and fixes code quality issues detected by SonarQube using generative AI techniques.",
    technologies: ["Python", "OpenAI API", "SonarQube API", "FastAPI", "Machine Learning"],
    features: [
      "Automated code issue detection and remediation",
      "Integration with SonarQube for seamless workflow",
      "Support for multiple programming languages",
      "Intelligent code suggestions and fixes"
    ],
    icon: Brain,
    category: "AI/ML",
    status: "In Progress"
  },
  {
    title: "ML-Driven Log Analysis Platform",
    description: "A comprehensive platform that uses machine learning to classify errors in logs and map them to known bugs, reducing triage time by over 40%.",
    technologies: ["Python", "PySpark", "Scikit-learn", "Elasticsearch", "Kafka", "Flask"],
    features: [
      "Automated error classification with 88.9% precision",
      "Real-time log processing and analysis",
      "Integration with bug tracking systems",
      "Interactive dashboards for insights"
    ],
    icon: Database,
    category: "Data Engineering",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "OAuth2-Enabled REST API Platform",
    description: "Secure API platform designed to deliver internal data insights across teams with robust authentication and authorization.",
    technologies: ["Python", "FastAPI", "OAuth2", "MongoDB", "Redis", "Docker"],
    features: [
      "Secure OAuth2 authentication",
      "Role-based access control (RBAC)",
      "High-performance API endpoints",
      "Comprehensive API documentation"
    ],
    icon: Shield,
    category: "Backend",
    status: "Completed"
  },
  {
    title: "Code Search & Similarity Engine",
    description: "Vector-based code search engine that helps developers find similar code patterns and improves development productivity.",
    technologies: ["Python", "Vector Embeddings", "Elasticsearch", "FastAPI", "React"],
    features: [
      "Semantic code search capabilities",
      "Code similarity detection",
      "Cross-repository code discovery",
      "Developer productivity metrics"
    ],
    icon: Code,
    category: "Developer Tools",
    status: "Completed"
  },
  {
    title: "Network Optimization ML Tools",
    description: "Machine learning-powered tools for network anomaly detection and performance prediction using PySpark.",
    technologies: ["Scala", "PySpark", "Machine Learning", "Apache Spark", "Hadoop"],
    features: [
      "Real-time anomaly detection",
      "Performance degradation prediction",
      "Automated network optimization",
      "Scalable data processing"
    ],
    icon: Database,
    category: "Data Engineering",
    status: "Completed"
  },
  {
    title: "Dynamic Performance Testing Framework",
    description: "Automated performance testing framework with Grafana dashboards for API and CLI benchmarking.",
    technologies: ["Python", "Locust", "Grafana", "Docker", "Kubernetes", "Jenkins"],
    features: [
      "Automated load testing",
      "Real-time performance monitoring",
      "Custom Grafana dashboards",
      "CI/CD integration"
    ],
    icon: Code,
    category: "DevOps",
    status: "Completed"
  }
]

const statusColors: Record<string, string> = {
  "Completed": "bg-green-100 text-green-800",
  "In Progress": "bg-blue-100 text-blue-800",
  "Planning": "bg-yellow-100 text-yellow-800"
}

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-purple-100 text-purple-800",
  "Data Engineering": "bg-blue-100 text-blue-800",
  "Backend": "bg-green-100 text-green-800",
  "Developer Tools": "bg-orange-100 text-orange-800",
  "DevOps": "bg-red-100 text-red-800"
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, data engineering, backend development, 
            and DevOps automation. Each project demonstrates practical solutions to real-world challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Interested in collaborating or learning more about any of these projects?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let&apos;s Discuss
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
