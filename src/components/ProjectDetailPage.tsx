import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

// Sample project data (in a real app, this would come from a database or API)
const projectsData = { 
  1: {
    title: "Corporate Website Redesign",
    category: "Web Design",
    client: "Global Finance Corp",
    duration: "2 months",
    year: "2023",
    description: "Complete overhaul of a financial services website focusing on user experience and conversion.",
    challenge: "Global Finance Corp's outdated website was difficult to navigate and wasn't effectively communicating their services or converting visitors into leads.",
    solution: "We redesigned the website with a focus on clear communication, intuitive navigation, and strategic call-to-actions. The new design is modern, responsive, and optimized for conversions.",
    results: [
      "40% increase in lead generation",
      "30% improvement in average time on site",
      "25% reduction in bounce rate"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Contentful CMS"],
    testimonial: {
      quote: "The redesigned website has significantly improved our online presence and lead generation. It's exactly what we needed to take our digital marketing to the next level.",
      author: "Michael Brown",
      position: "Marketing Director, Global Finance Corp"
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ]
  },
  2: {
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    client: "FitLife",
    duration: "4 months",
    year: "2023",
    description: "iOS and Android app for tracking workouts, nutrition, and personal fitness goals.",
    challenge: "FitLife wanted to create a comprehensive fitness app that would help users track their workouts, nutrition, and progress towards their fitness goals across both iOS and Android platforms.",
    solution: "We developed a cross-platform mobile app using React Native, which allowed us to create a consistent experience across both iOS and Android. The app integrates with wearable devices, provides personalized workout plans, and includes a nutrition tracker.",
    results: [
      "Over 100,000 downloads in the first month",
      "4.8 star rating on both App Store and Google Play",
      "85% user retention rate after 3 months"
    ],
    technologies: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit API"],
    testimonial: {
      quote: "The FitLife app has exceeded our expectations. The user engagement and retention rates are impressive, and the feedback from our users has been overwhelmingly positive.",
      author: "Lisa Chen",
      position: "Product Manager, FitLife"
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ]
  }
};

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData[Number(projectId) as keyof typeof projectsData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-purple-600 mb-6 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
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
          </div>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
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
            <blockquote className="text-xl italic mb-6">"{project.testimonial.quote}"</blockquote>
            <p className="font-medium">{project.testimonial.author}</p>
            <p className="text-purple-200">{project.testimonial.position}</p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to create something amazing. Contact us today to get started.
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
