import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const Contact = () => {
  return (
    <section className="bg-base-100">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-secondary to-primary text-base-100 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-base-100/90 max-w-2xl mx-auto">
          Have questions or feedback? We’d love to hear from you. Reach out and
          let’s connect.
        </p>
      </div>

      {/* Contact Info + Map */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left: Contact Info + Map */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <IoLocationOutline size={24} /> Address
              </h3>
              <p className="text-base-content/70">
                123 StudyMate Street, Chattogram, Bangladesh
              </p>
            </div>
            <div className="card bg-base-200 shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <MdOutlineLocalPhone size={24} /> Phone
              </h3>
              <p className="text-base-content/70">+880 1234 567 890</p>
            </div>
            <div className="card bg-base-200 shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <MdOutlineAttachEmail size={24} /> Email
              </h3>
              <p className="text-base-content/70">support@studymate.com</p>
            </div>
            <div className="card bg-base-200 shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <MdOutlineWatchLater size={24} /> Hours
              </h3>
              <p className="text-base-content/70">Mon–Fri: 9AM – 6PM</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="StudyMate Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.123456!2d91.812!3d22.356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd885c1234567%3A0x123456789abcdef!2sChattogram!5e0!3m2!1sen!2sbd!4v1670000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="card bg-base-200 shadow-md p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-secondary w-full hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-primary to-secondary py-12 text-center text-base-100">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Connections Together
        </h2>
        <p className="mb-6 text-base-100/90">
          Whether you’re a student, mentor, or partner — we’re here to help you
          succeed.
        </p>
        <button className="btn btn-accent btn-lg px-8 hover:scale-105 transition-transform">
          Join StudyMate
        </button>
      </div>
    </section>
  );
};

export default Contact;
