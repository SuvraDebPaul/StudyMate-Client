import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does StudyMate help me find partners?",
      answer:
        "StudyMate uses smart matching based on your interests, goals, and availability to connect you with the right study partners.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We use secure authentication and role-based access to ensure your information is protected.",
    },
    {
      question: "Can I customize my dashboard?",
      answer:
        "Absolutely. You can personalize your dashboard layout, theme, and track progress with charts and stats.",
    },
    {
      question: "Is StudyMate free to use?",
      answer:
        "StudyMate offers a free tier with core features. Premium plans unlock advanced analytics and priority matching.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply register, create your profile, and start connecting with study partners instantly.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 uppercase text-center">
        Frequently <span className="text-secondary">Asked</span> Questions
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/premium-vector/faqs-concept-illustration_114360-5185.jpg?semt=ais_hybrid&w=740&q=80"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-base-300 bg-base-100 rounded-box overflow-hidden transition-[max-height] duration-300 ${
                  openIndex === idx ? "max-h-40" : "max-h-12"
                }`}
                onClick={() => setOpenIndex(idx)}
              >
                {" "}
                <div className="px-4 py-3 font-medium cursor-pointer">
                  {" "}
                  {faq.question}{" "}
                </div>{" "}
                {openIndex === idx && (
                  <div className="px-4 pb-3 text-base-content/70">
                    {" "}
                    {faq.answer}{" "}
                  </div>
                )}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
