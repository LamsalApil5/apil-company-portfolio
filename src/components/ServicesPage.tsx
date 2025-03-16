import { Link } from "react-router-dom"
import { Palette, Code, ShoppingBag, Search, Smartphone, Zap } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              We offer a range of digital solutions tailored to meet your unique business needs. Whether you're starting out or looking to scale, we’re here to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: <Palette className="w-10 h-10 text-purple-500" />,
                title: "Web Design",
                description: "We create beautiful, responsive websites that not only look great but also engage your audience across all devices."
              },
              {
                icon: <Code className="w-10 h-10 text-blue-500" />,
                title: "Web Development",
                description: "Custom-built web applications with modern technologies, ensuring optimal performance and user experience."
              },
              {
                icon: <ShoppingBag className="w-10 h-10 text-indigo-500" />,
                title: "E-Commerce",
                description: "We help you set up online stores that make shopping a breeze for your customers, with secure payments and seamless experiences."
              },
              {
                icon: <Search className="w-10 h-10 text-purple-500" />,
                title: "SEO",
                description: "Improve your search engine visibility and drive organic traffic through effective SEO strategies."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-500" />,
                title: "Mobile Apps",
                description: "From native to cross-platform, we build mobile applications that work smoothly on both iOS and Android devices."
              },
              {
                icon: <Zap className="w-10 h-10 text-indigo-500" />,
                title: "Performance Optimization",
                description: "We boost the speed and performance of your website to improve user experience and help with better search rankings."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to deliver results that align with your goals. Here's how we work:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We take the time to understand your business, goals, and requirements to ensure we’re aligned right from the start."
              },
              {
                number: "02",
                title: "Planning",
                description: "We work with you to craft a detailed project plan that outlines timelines, deliverables, and key milestones."
              },
              {
                number: "03",
                title: "Design",
                description: "Our designers craft wireframes and visual designs that reflect your brand and address your audience’s needs."
              },
              {
                number: "04",
                title: "Development",
                description: "Our developers bring your vision to life using clean, efficient code, providing regular updates along the way."
              },
              {
                number: "05",
                title: "Testing",
                description: "We test every part of the project to ensure quality, performance, and usability before it goes live."
              },
              {
                number: "06",
                title: "Launch",
                description: "We help you deploy your project, ensuring a smooth launch, and offer ongoing support to keep things running smoothly."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="mr-6 bg-purple-100 text-purple-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let’s talk about your project. Get in touch with us today to schedule a free consultation and explore how we can help you succeed online.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
