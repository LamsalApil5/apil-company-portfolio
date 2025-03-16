import { Users, Award, Clock, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, our APIL began with a simple mission: to create
                beautiful, functional websites that help businesses succeed
                online.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of three has grown into a diverse
                group of talented individuals, each bringing unique skills and
                perspectives to our work.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have worked with clients across various
                industries, from startups to established enterprises, helping
                them achieve their digital goals.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-lg"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do and help us deliver
              exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-purple-500" />,
                title: "Collaboration",
                description:
                  "We work closely with our clients, treating their goals as our own.",
              },
              {
                icon: <Award className="w-10 h-10 text-blue-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every project, no matter the size.",
              },
              {
                icon: <Clock className="w-10 h-10 text-indigo-500" />,
                title: "Timeliness",
                description:
                  "We respect deadlines and deliver projects on time, every time.",
              },
              {
                icon: <Globe className="w-10 h-10 text-purple-500" />,
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches to solve problems.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The talented people behind our successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Apil Lamsal",
                role: "Founder & Web Developer",
                image: "https://ui-avatars.com/api/?name=Apil+Lamsal&background=random",
              },
              {
                name: "Ishwor Gautam",
                role: "CEO",
                image: "https://ui-avatars.com/api/?name=Ishwor+Gautam&background=random",
              },
              {
                name: "Shivam Ranabhat",
                role: "Laravel Developer",
                image: "https://ui-avatars.com/api/?name=Shivam+Ranabhat&background=random",
              },
              {
                name: "Kapil Pokhrel",
                role: "Wordpress Developer",
                image: "https://ui-avatars.com/api/?name=Kapil+Pokhrel&background=random",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
