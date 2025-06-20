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
        title="Home | APIL TECH"
        description="Welcome to My Website. Discover our premium services and innovative projects."
        keywords="APIL,apiltech, technology solutions, business growth, software development, digital transformation"
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
                <span className="block">Innovating the Future</span>
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
                  with Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                We craft powerful, scalable, and secure digital solutions to
                drive business growth and efficiency in today's fast-paced
                world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-20 relative">
              <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl shadow-purple-500/10 border border-gray-200 overflow-hidden">
                <div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-[16/9]"
                  style={{
                    backgroundImage: `url('/Image/Home.jpg?height=1080&width=1920')`,
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
                A comprehensive suite of services designed to elevate your
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
              {[
                {
                  title: "Planet Spa Pokhara",
                  description:
                    "A luxurious spa website that offers booking services and showcases their treatments.",
                  image: "./Image/PlanetSpa/image.png",
                  slug: "planet-spa-pokhara", // Slug for project
                },
                {
                  title: "Pradices Marpha",
                  description:
                    "A cultural and community-driven website focusing on the Marpha village and its activities.",
                  image: "./Image/paradisemarpha/image.png",
                  slug: "pradices-marpha", // Slug for project
                },
                {
                  title: "Lamsal Block",
                  description:
                    "A modern real estate website for showcasing residential and commercial properties.",
                  image: "./Image/lamsal/image.png",
                  slug: "lamsal-block", // Slug for project
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      to={`/projects/${project.slug}`} // Navigates to the specific project detail page
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                    >
                      View Details<ArrowRight size={16} className="ml-1" />
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
    </>
  );
}
