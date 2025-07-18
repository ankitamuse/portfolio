'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const experiences = [
  {
    company: 'Oracle',
    position: 'Senior Software Engineer',
    duration: 'April 2025 – Present',
    location: 'Bengaluru, India',
    description: 'Working on real-time analytics and performance insights for enterprise EHR platforms.',
    achievements: [
      'Leading a project to build a SonarQube issue fixer using Generative AI for automated code remediation',
      'Developing real-time analytics solutions for enterprise healthcare platforms',
      'Implementing AI-powered performance optimization tools'
    ],
    technologies: ['Python', 'AI/ML', 'Real-time Analytics', 'Healthcare Tech']
  },
  {
    company: 'Cisco',
    position: 'Software Engineer 3',
    duration: 'July 2020 – April 2025',
    location: 'Bengaluru, India',
    description: 'Led backend initiatives and built scalable APIs, automation platforms, and cloud-integrated systems.',
    achievements: [
      'Designed secure, OAuth2-enabled REST APIs to deliver internal data insights across teams',
      'Developed ML-driven log analysis platform reducing triage time by over 40%',
      'Transformed support workflows with Jira integration including ticket creation and status tracking',
      'Integrated GitHub Webhooks and Checks with Jenkins pipelines for automated CI workflows',
      'Built ML-based auto-fix model achieving 88.9% precision for key error types',
      'Created code search and similarity engine using vector-based retrieval methods',
      'Engineered dynamic performance testing modules with Grafana dashboards'
    ],
    technologies: ['Python', 'Flask', 'FastAPI', 'OAuth2', 'Jenkins', 'ML', 'Grafana', 'Jira']
  },
  {
    company: 'Nokia',
    position: 'Data Engineer 2',
    duration: 'July 2017 – July 2020',
    location: 'Noida, India',
    description: 'Specialized in data engineering and ML-powered network optimization solutions.',
    achievements: [
      'Designed Django-based GUI for rule-based alarm suppression and intelligent command handling',
      'Developed ML-powered network optimization tools using PySpark to detect anomalies',
      'Created data audit framework in Scala to validate input datasets before ETL processing',
      'Built predictive models for network degradation and performance optimization'
    ],
    technologies: ['Django', 'PySpark', 'Scala', 'ETL', 'ML', 'Network Analytics']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            8 years of experience building scalable systems, leading backend initiatives, 
            and creating innovative solutions across industry-leading organizations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-primary-200">
                <div className="absolute top-2 -left-2 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>
              </div>

              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
