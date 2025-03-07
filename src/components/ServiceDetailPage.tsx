"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ServiceDetailPage() {
  const { serviceId } = useParams()

  // In a real app, you would fetch service details based on the ID
  // This is a simplified example with hardcoded data
  const serviceData = {
    "web-design": {
      title: "Web Design",
      description: "Beautiful, responsive websites that look great on any device and engage your audience.",
      fullDescription:
        "Our web design services focus on creating visually stunning, user-friendly websites that not only look great but also drive results. We combine aesthetics with functionality to deliver websites that represent your brand effectively and provide an exceptional user experience.",
      features: [
        "Custom design tailored to your brand",
        "Responsive layouts for all devices",
        "User experience (UX) optimization",
        "Interactive elements and animations",
        "Accessibility compliance",
        "SEO-friendly structure",
      ],
      process: [
        "Discovery and requirements gathering",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Development and implementation",
        "Testing and quality assurance",
        "Launch and post-launch support",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    "web-development": {
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance.",
      fullDescription:
        "Our web development team builds robust, scalable web applications using the latest technologies and best practices. Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life.",
      features: [
        "Custom functionality development",
        "Content management systems",
        "E-commerce integration",
        "API development and integration",
        "Database design and optimization",
        "Performance optimization",
      ],
      process: [
        "Technical requirements analysis",
        "Architecture planning",
        "Frontend and backend development",
        "Database implementation",
        "Testing and debugging",
        "Deployment and maintenance",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    "e-commerce": {
      title: "E-Commerce",
      description: "Online stores that drive sales with seamless shopping experiences and secure payments.",
      fullDescription:
        "Our e-commerce solutions help businesses sell products and services online with ease. We create custom online stores that provide seamless shopping experiences, secure payment processing, and powerful management tools to help you grow your business.",
      features: [
        "Custom product catalogs",
        "Secure payment processing",
        "Inventory management",
        "Order tracking and fulfillment",
        "Customer account management",
        "Mobile shopping optimization",
      ],
      process: [
        "Business requirements analysis",
        "Platform selection and customization",
        "Product catalog setup",
        "Payment gateway integration",
        "Testing and quality assurance",
        "Launch and ongoing support",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    seo: {
      title: "SEO",
      description: "Search engine optimization to improve your visibility and drive organic traffic.",
      fullDescription:
        "Our SEO services help improve your website's visibility in search engine results, driving more organic traffic to your site. We use proven strategies and techniques to optimize your website for search engines while providing valuable content for your users.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO improvements",
        "Content strategy and creation",
        "Link building and outreach",
        "Performance tracking and reporting",
      ],
      process: [
        "SEO audit and analysis",
        "Strategy development",
        "On-page optimization implementation",
        "Content optimization",
        "Off-page SEO activities",
        "Monitoring and reporting",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    "mobile-apps": {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      fullDescription:
        "We design and develop mobile applications that provide exceptional user experiences across iOS and Android platforms. Our mobile app development services include native and cross-platform solutions tailored to your specific business needs.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "API integration",
        "Push notifications",
        "App store submission assistance",
      ],
      process: [
        "Requirements gathering",
        "UI/UX design",
        "Development and coding",
        "Testing across devices",
        "Deployment to app stores",
        "Maintenance and updates",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    "performance-optimization": {
      title: "Performance Optimization",
      description: "Speed up your existing website for better user experience and search rankings.",
      fullDescription:
        "Our performance optimization services focus on improving the speed and efficiency of your website or application. We identify and fix performance bottlenecks to ensure your digital products load quickly and run smoothly, enhancing user experience and SEO rankings.",
      features: [
        "Website speed analysis",
        "Code optimization",
        "Image and asset optimization",
        "Caching implementation",
        "Database optimization",
        "Server configuration improvements",
      ],
      process: [
        "Performance audit",
        "Bottleneck identification",
        "Optimization strategy development",
        "Implementation of improvements",
        "Testing and verification",
        "Ongoing monitoring",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  }

  // Get the service data or use a default if not found
  const service = serviceData[serviceId as keyof typeof serviceData] || {
    title: "Service Not Found",
    description: "The requested service information is not available.",
    fullDescription: "Please check our services page for a list of available services.",
    features: [],
    process: [],
    image: "/placeholder.svg?height=600&width=800",
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <Link to="/services" className="inline-flex items-center text-purple-600 mb-6 hover:text-purple-700">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-6">{service.fullDescription}</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <p className="text-lg text-gray-600">What makes our {service.title} service stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{feature}</h3>
                </div>
                <p className="text-gray-600 pl-9">
                  Our {service.title.toLowerCase()} service includes {feature.toLowerCase()} to ensure the best results
                  for your business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver exceptional {service.title} solutions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="mr-6 bg-purple-100 text-purple-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? `We begin by ${step.toLowerCase()} to understand your specific needs.`
                      : `Next, we focus on ${step.toLowerCase()} to ensure quality results.`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact us today to discuss your {service.title} project and how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-purple-600 font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Services</h2>
            <p className="text-lg text-gray-600">Explore other services that complement {service.title}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(serviceData)
              .filter(([key]) => key !== serviceId)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <div
                  key={key}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-3">{relatedService.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedService.description}</p>
                  <Link to={`/services/${key}`} className="text-purple-600 font-medium hover:text-purple-700">
                    Learn more
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

