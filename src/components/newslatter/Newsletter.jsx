import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4  uppercase">
          Stay Updated with <span className="text-secondary">StudyMate</span>
        </h2>
        <p className="text-base-content/70 mb-8">
          Subscribe to our newsletter and get the latest study tips,
          partner‑finding strategies, and platform updates delivered straight to
          your inbox.
        </p>

        {/* Signup Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          />
          <button
            type="submit"
            className="btn btn-secondary w-full sm:w-auto hover:btn-primary hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Extra Note */}
        <p className="text-xs text-base-content/60 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
