import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Layers, Zap, ChevronRight } from "lucide-react";
import SEO from "./SEO";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
       <SEO 
        title="Home | APIL" 
        description="Welcome to My Website. Discover our premium services and innovative projects."
        keywords="APIL, technology solutions, business growth, software development, digital transformation"
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50"
            aria-hidden="true"
          />

          {/* Animated background elements */}
          <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
            <div
              className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-300/30 blur-3xl"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />
            <div
              className="absolute top-60 -right-20 w-60 h-60 rounded-full bg-blue-300/20 blur-3xl"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            />
            <div
              className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-pink-300/20 blur-3xl"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="block">Crafting Digital</span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                We build beautiful, functional websites and applications that
                help businesses grow and succeed in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  View Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-20 relative">
              <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl shadow-purple-500/10 border border-gray-200 overflow-hidden">
                <div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-[16/9]"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our comprehensive suite of services designed to elevate your
                digital presence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-purple-500" />,
                  title: "Fast Performance",
                  description:
                    "Optimized websites that load quickly and provide a smooth user experience across all devices.",
                },
                {
                  icon: <Layers className="w-10 h-10 text-blue-500" />,
                  title: "Modern Design",
                  description:
                    "Beautiful, responsive designs that reflect your brand and engage your audience effectively.",
                },
                {
                  icon: <Code className="w-10 h-10 text-indigo-500" />,
                  title: "Clean Code",
                  description:
                    "Well-structured, maintainable code that ensures your website remains stable and secure.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Recent Projects
                </h2>
                <p className="text-xl text-gray-600">
                  Check out some of our latest work
                </p>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                View all projects <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Project ${project}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Project Title {project}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of this amazing project and the value
                      it delivered.
                    </p>
                    <Link
                      to={`/projects/${project}`}
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                    >
                      View details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <Link
                to="/projects"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                View all projects <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start your project?
              </h2>
              <p className="text-xl mb-10 text-purple-100">
                Let's work together to create something amazing. Contact us
                today to get started.
              </p>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
