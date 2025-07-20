'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    institution: "Malviya National Institute of Technology, Jaipur",
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    duration: "July 2013 - May 2017",
    cgpa: "8.49/10",
    location: "Jaipur, Rajasthan, India",
    highlights: [
      "Specialized in Digital Signal Processing and Communication Systems",
      "Completed projects on FPGA-based systems and wireless communication",
      "Active member of technical societies and coding clubs",
      "Participated in various hackathons and technical competitions"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Digital Signal Processing",
      "Microprocessor & Microcontrollers",
      "Computer Networks",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Digital Communication"
    ]
  }
]



export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic foundation in technology and engineering.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Formal Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=""
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary-600" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.institution}</h4>
                        <p className="text-lg font-semibold text-primary-600 mb-1">{edu.degree}</p>
                        <p className="text-gray-600 mb-2">{edu.field}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Key Highlights</h5>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Relevant Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  )
}
