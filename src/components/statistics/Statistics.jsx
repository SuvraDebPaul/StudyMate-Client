import React from "react";

const Statistics = () => {
  const stats = [
    {
      value: "500+",
      label: "Study Partners Connected",
    },
    {
      value: "95%",
      label: "Student Satisfaction Rate",
    },
    {
      value: "1K+",
      label: "Profiles Created",
    },
    {
      value: "24/7",
      label: "Platform Availability",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase">
          <span className="text-secondary">Impact</span> Metrics
        </h2>
        <p className="text-base-content/70 mb-12">
          StudyMate is growing every day — here’s what we’ve achieved so far.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                <h3 className="text-4xl font-extrabold text-secondary">
                  {stat.value}
                </h3>
                <p className="text-base-content/70 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
