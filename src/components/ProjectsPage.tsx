"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { categories, projectsData } from "./data/projectsData"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of work across various industries and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                  >
                     View Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                quote: "Working with this team was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly increased our online conversions.",
                author: "Sarah Johnson",
                company: "Retail Solutions Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote: "The e-commerce platform they built for us has transformed our business. Sales have increased by 200% since launch, and customer feedback has been overwhelmingly positive.",
                author: "Michael Chen",
                company: "Fashion Forward",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote: "Professional, responsive, and incredibly talented. They took the time to understand our unique needs and delivered a solution that perfectly aligned with our vision.",
                author: "Emily Rodriguez",
                company: "TechStart",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's work together to create something amazing. Contact us today to get started.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
