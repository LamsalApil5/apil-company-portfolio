import { Link } from "react-router-dom";
import {
  Palette,
  Code,
  ShoppingBag,
  Search,
  Smartphone,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're launching a new venture or scaling up, we've got the
            digital solutions to help you succeed. Let's bring your ideas to
            life.
          </p>
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
                description:
                  "Stunning, responsive websites designed to engage and convert visitors into customers.",
              },
              {
                icon: <Code className="w-10 h-10 text-blue-500" />,
                title: "Web Development",
                description:
                  "Custom web applications built for performance, security, and seamless user experience.",
              },
              {
                icon: <ShoppingBag className="w-10 h-10 text-indigo-500" />,
                title: "E-Commerce",
                description:
                  "Your online store, built for success—secure, fast, and user-friendly.",
              },
              {
                icon: <Search className="w-10 h-10 text-purple-500" />,
                title: "SEO",
                description:
                  "Optimized strategies to boost your online presence and attract the right audience.",
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-500" />,
                title: "Mobile Apps",
                description:
                  "Intuitive mobile experiences that keep users engaged, whether on iOS or Android.",
              },
              {
                icon: <Zap className="w-10 h-10 text-indigo-500" />,
                title: "Performance Optimization",
                description:
                  "Faster websites mean better experiences. We make sure your site runs at peak performance.",
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
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
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
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We follow a streamlined process to turn your vision into reality,
            step by step.
          </p>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding your business and goals to lay a solid foundation.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Creating a roadmap with clear milestones to keep things on track.",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "Crafting visuals that reflect your brand and resonate with your audience.",
              },
              {
                number: "04",
                title: "Development",
                description:
                  "Bringing designs to life with clean, efficient code.",
              },
              {
                number: "05",
                title: "Testing",
                description:
                  "Ensuring everything works smoothly before the big launch.",
              },
              {
                number: "06",
                title: "Launch",
                description:
                  "Deploying your project and providing ongoing support to keep things running.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-center justify-center mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                <div className="mr-6 bg-purple-100 text-purple-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center">
                  {step.number}
                </div>
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to take your business to the next level? Get in touch today
            for a free consultation!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
