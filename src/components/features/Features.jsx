import React from "react";
import { FaUsers, FaChartLine, FaLock, FaLaptopCode } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      title: "Smart Partner Matching",
      desc: "Connect with study partners based on interests, goals, and availability.",
    },
    {
      icon: <FaChartLine className="text-secondary text-3xl" />,
      title: "Dashboard Insights",
      desc: "Track your progress with charts, stats, and personalized recommendations.",
    },
    {
      icon: <FaLock className="text-secondary text-3xl" />,
      title: "Secure Authentication",
      desc: "Role-based login and secure data handling for peace of mind.",
    },
    {
      icon: <FaLaptopCode className="text-secondary text-3xl" />,
      title: "Polished UI/UX",
      desc: "Responsive design with DaisyUI + Tailwind for a professional experience.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary uppercase">
          Features
        </h2>
        <p className="text-base-content/70 mb-12">
          StudyMate brings powerful tools to help you learn, connect, and grow.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                {feature.icon}
                <h3 className="card-title mt-4">{feature.title}</h3>
                <p className="text-sm text-base-content/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
