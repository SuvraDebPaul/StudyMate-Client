import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase">
            How <span className="text-secondary">StudyMate</span> Works
          </h2>
          <p className="text-gray-500 mb-12">
            Connect. Collaborate. Achieve More Together.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-base-200 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-2xl font-bold text-indigo-600 mb-2">01</div>
              <h3 className="text-xl font-semibold mb-2">
                Create Your Profile
              </h3>
              <p className="text-gray-500">
                Add your subjects, learning preferences, and goals to get
                personalized matches.
              </p>
            </div>
            <div className="p-6 bg-base-200 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-2xl font-bold text-indigo-600 mb-2">02</div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-500">
                Our algorithm finds study partners based on subjects, location,
                and learning style.
              </p>
            </div>
            <div className="p-6 bg-base-200 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-2xl font-bold text-indigo-600 mb-2">03</div>
              <h3 className="text-xl font-semibold mb-2">
                Connect & Collaborate
              </h3>
              <p className="text-gray-500">
                Chat, plan study sessions, and share resources with matched
                partners.
              </p>
            </div>
            <div className="p-6 bg-base-200 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-2xl font-bold text-indigo-600 mb-2">04</div>
              <h3 className="text-xl font-semibold mb-2">
                Track Your Progress
              </h3>
              <p className="text-gray-500">
                Stay organized and improve with interactive tools and progress
                tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
