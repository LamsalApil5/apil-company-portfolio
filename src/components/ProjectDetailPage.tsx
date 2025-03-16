import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { projectsDetailData } from "./data/projectsDetailData";

// Sample project data (in a real app, this would come from a database or API)

export default function ProjectDetailPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>(); // Fetch the projectSlug
  const project = projectsDetailData[projectSlug as keyof typeof projectsDetailData]; // Access the project data based on the slug

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-purple-600 mb-6 hover:text-purple-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {project.year}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {project.duration}
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {project.status}
            </span>
          </div>
          {project.liveLink && (
            <div className="mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
              >
                View Live Project
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-6">{project.challenge}</p>
              <p className="text-lg text-gray-600">{project.solution}</p>
            </div>
            <div className="relative">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <p className="text-lg font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Client Testimonial</h2>
            <blockquote className="text-xl italic mb-6">
              "{project.testimonial.quote}"
            </blockquote>
            <p className="font-medium">{project.testimonial.author}</p>
            <p className="text-purple-200">{project.testimonial.position}</p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                className="rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to create something amazing. Contact us today
              to get started.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-600 text-white font-medium shadow-lg hover:bg-purple-700 transition-all hover:-translate-y-0.5"
            >
              Get in Touch <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
