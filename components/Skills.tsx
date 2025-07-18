'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Shield, BarChart3, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'Scala', 'SQL', 'PySpark', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks & APIs',
    icon: Cpu,
    skills: ['Flask', 'FastAPI', 'Django', 'Microservices', 'REST APIs', 'Next.js']
  },
  {
    title: 'Data Engineering & ML',
    icon: BarChart3,
    skills: ['PySpark', 'ETL', 'NLP', 'Machine Learning', 'Airflow', 'Vector Search']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Oracle Cloud (OCI)', 'Linux']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'SQL', 'Elasticsearch', 'Redis', 'Vector Databases']
  },
  {
    title: 'Monitoring & Security',
    icon: Shield,
    skills: ['Grafana', 'Splunk', 'OAuth2', 'RBAC', 'Open Telemetry', 'Pytest']
  }
]

const proficiencyLevels = [
  { name: 'Python', level: 95 },
  { name: 'Backend Development', level: 90 },
  { name: 'Data Engineering', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'DevOps', level: 85 },
  { name: 'System Design', level: 88 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built over 8 years of experience in software engineering, 
            data engineering, and machine learning.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
