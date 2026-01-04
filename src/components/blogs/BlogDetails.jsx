import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Find the Perfect Study Partner",
    content:
      "Finding the right study partner can transform your learning journey. With StudyMate, you can connect with peers who share similar goals, schedules, and interests. This blog explores five practical tips: define your objectives clearly, use smart matching tools, communicate expectations early, balance strengths and weaknesses, and maintain accountability. By following these strategies, you’ll not only improve your academic performance but also build meaningful connections. Whether preparing for exams or mastering new skills, the right partner keeps you motivated, focused, and engaged. StudyMate makes this process seamless, ensuring you never study alone again.",
    image:
      "https://www.utwente.nl/.wh/ea/uc/i7feee36c01023e6a0604d4e55e026a372aa6e5a682fc0801e3da02e7018055/communication-science-university-of-twente.jpg",
    author: "Jhon Doe",
    date: "Jan 4, 2026",
    tags: ["Study Tips", "Partner Matching", "Productivity"],
  },
  {
    id: 2,
    title: "How to Stay Productive with StudyMate Dashboard",
    content:
      "Productivity is the key to success, and StudyMate’s dashboard is designed to keep you on track. This blog highlights how to leverage analytics, progress tracking, and personalized recommendations to maximize efficiency. Learn how to organize tasks, monitor study hours, and visualize achievements with charts and statistics. The dashboard’s intuitive design ensures you stay motivated while avoiding burnout. By customizing layouts and themes, you can create a workspace that inspires focus. Whether you’re managing multiple subjects or balancing study with personal commitments, StudyMate’s dashboard empowers you to stay consistent, productive, and confident in your academic journey.",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp4xc4pgvza41ao6wkvp1.png",
    author: "Mike Hussy",
    date: "Jan 4, 2026",
    tags: ["Dashboard", "Analytics", "Efficiency"],
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      setProgress((scrollTop / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) return <p className="text-center py-20">Blog not found.</p>;

  return (
    <section className="bg-base-100">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-secondary z-50 transition-all"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Hero Banner */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Author Info */}
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4 border-b border-base-300">
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          alt={blog.author}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">{blog.author}</p>
          <p className="text-sm text-base-content/70">{blog.date}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 prose prose-lg">
        <p>{blog.content}</p>
      </div>

      {/* Tags + Share */}
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-between items-center py-6 border-t border-base-300">
        <div className="flex gap-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline badge-primary text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-secondary text-xl">
          <FaFacebook className="cursor-pointer hover:text-primary transition" />
          <FaTwitter className="cursor-pointer hover:text-primary transition" />
          <FaLinkedin className="cursor-pointer hover:text-primary transition" />
        </div>
      </div>

      {/* Related Blogs */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-secondary">
          Related Blogs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs
            .filter((b) => b.id !== blog.id)
            .map((related) => (
              <div
                key={related.id}
                className="card bg-base-200 shadow-md hover:shadow-xl transition"
              >
                <figure>
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg">{related.title}</h3>
                  <Link
                    to={`/blogs/${related.id}`}
                    className="btn btn-secondary btn-sm mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-16 bg-base-200 text-center">
        <h2 className="text-3xl font-bold mb-4 text-secondary">
          Subscribe for More Insights
        </h2>
        <p className="text-base-content/70 mb-6">
          Get the latest study tips and updates delivered straight to your
          inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="btn btn-secondary w-full sm:w-auto hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogDetails;
