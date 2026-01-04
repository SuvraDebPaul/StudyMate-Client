import React from "react";

const About = () => {
  return (
    <section className="bg-base-100">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-secondary to-primary text-base-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About StudyMate
          </h1>
          <p className="text-lg text-base-100/90 max-w-2xl mx-auto">
            Empowering students worldwide to connect, collaborate, and achieve
            their learning goals together.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div className="card bg-base-200 shadow-md p-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            To create a dynamic platform where students can find study partners,
            share resources, and stay motivated. We believe collaboration is the
            key to unlocking academic success and lifelong learning.
          </p>
        </div>
        <div className="card bg-base-200 shadow-md p-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
          <p className="text-base-content/70 leading-relaxed">
            To become the global hub for peer‑to‑peer learning, fostering a
            community where knowledge flows freely, friendships thrive, and
            education becomes more accessible and engaging for everyone.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Collaboration", "Innovation", "Integrity", "Accessibility"].map(
              (value, idx) => (
                <div
                  key={idx}
                  className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{value}</h3>
                  <p className="text-sm text-base-content/70">
                    {value === "Collaboration" &&
                      "We believe teamwork drives success and builds stronger communities."}
                    {value === "Innovation" &&
                      "We embrace creativity and technology to improve learning experiences."}
                    {value === "Integrity" &&
                      "We ensure transparency, trust, and respect in everything we do."}
                    {value === "Accessibility" &&
                      "We strive to make education inclusive and available to all learners."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Team Highlight */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-secondary text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Suvra Deb Paul",
              role: "Founder & Architect",
              img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            },
            {
              name: "Jane Doe",
              role: "UI/UX Designer",
              img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            },
            {
              name: "John Smith",
              role: "Backend Engineer",
              img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-md text-center p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-base-content/70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-r from-primary to-secondary py-16 text-center text-base-100">
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Transforming Learning
        </h2>
        <p className="mb-6 text-base-100/90">
          Be part of a growing community of learners and innovators.
        </p>
        <button className="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
