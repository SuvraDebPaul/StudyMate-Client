import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-5xl font-extrabold mb-6">
          Find Your Perfect{" "}
          <span className="text-secondary"> Study Partner</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg mb-10 text-base-content/70">
          Join thousands of students already connecting and learning together on
          StudyMate. Start your journey today with just a click.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/findpartner"
            className="btn btn-outline btn-secondary text-black btn-lg px-8 transition-all duration-300"
          >
            Explore Partners
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
