import { Users, Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              We're a team of passionate designers and developers creating
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Goals</h2>
            <p className="text-lg text-gray-600">
              At APIL, our mission is to empower businesses by providing
              cutting-edge digital solutions tailored to their unique needs. Our
              goal is to continuously innovate, collaborate, and deliver
              excellence in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-red-500" />,
                title: "Innovation",
                description:
                  "Leveraging technology to create future-ready solutions that elevate your brand.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-500" />,
                title: "Client Success",
                description:
                  "Partnering with businesses to build impactful digital experiences that drive growth.",
              },
              {
                icon: <Award className="w-10 h-10 text-green-500" />,
                title: "Excellence",
                description:
                  "Delivering high-quality products and services with precision and dedication.",
              },
            ].map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600">
              We are a group of passionate and skilled professionals dedicated
              to crafting innovative digital solutions. Each member brings
              unique expertise and a shared commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
