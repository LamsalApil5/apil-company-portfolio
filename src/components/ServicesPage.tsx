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
            <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your business needs.</p>
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
                description: "Beautiful, responsive websites that look great on any device and engage your audience.",
              },
              {
                icon: <Code className="w-10 h-10 text-blue-500" />,
                title: "Web Development",
                description: "Custom web applications built with modern technologies for optimal performance.",
              },
              {
                icon: <ShoppingBag className="w-10 h-10 text-indigo-500" />,
                title: "E-Commerce",
                description: "Online stores that drive sales with seamless shopping experiences and secure payments.",
              },
              {
                icon: <Search className="w-10 h-10 text-purple-500" />,
                title: "SEO",
                description: "Search engine optimization to improve your visibility and drive organic traffic.",
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-500" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android devices.",
              },
              {
                icon: <Zap className="w-10 h-10 text-indigo-500" />,
                title: "Performance Optimization",
                description: "Speed up your existing website for better user experience and search rankings.",
              },
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
              We follow a proven methodology to ensure successful project delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth discussions.",
              },
              {
                number: "02",
                title: "Planning",
                description: "We create a detailed project plan outlining timelines, deliverables, and key milestones.",
              },
              {
                number: "03",
                title: "Design",
                description: "Our designers create wireframes and visual designs based on your brand and user needs.",
              },
              {
                number: "04",
                title: "Development",
                description: "Our developers bring the designs to life with clean, efficient code and regular updates.",
              },
              {
                number: "05",
                title: "Testing",
                description: "We thoroughly test all aspects of your project to ensure quality and performance.",
              },
              {
                number: "06",
                title: "Launch",
                description: "We deploy your project and provide support to ensure a smooth launch.",
              },
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
              Contact us today for a free consultation and let's discuss how we can help your business grow online.
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

