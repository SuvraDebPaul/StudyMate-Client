import React from "react";
import { Link } from "react-router";

const AllBlog = [
  {
    id: 1,
    title: "5 Tips to Find the Perfect Study Partner",
    excerpt:
      "Discover strategies to connect with the right study partner and boost your learning journey.",
    image:
      "https://www.utwente.nl/.wh/ea/uc/i7feee36c01023e6a0604d4e55e026a372aa6e5a682fc0801e3da02e7018055/communication-science-university-of-twente.jpg",
  },
  {
    id: 2,
    title: "How to Stay Productive with StudyMate Dashboard",
    excerpt:
      "Learn how to use StudyMate’s analytics and tools to stay organized and motivated every day.",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp4xc4pgvza41ao6wkvp1.png",
  },
  {
    id: 3,
    title: "Balancing Online and Offline Study Sessions",
    excerpt:
      "Explore techniques to combine digital tools with real-world collaboration for effective learning.",
    image:
      "https://ydmi.in/wp-content/uploads/2025/08/online-classes-vs-offline-classes-1.webp",
  },
];

const AllBlogs = () => {
  return (
    <section className="bg-base-200">
      <div className="bg-linear-to-r from-primary to-secondary py-12 text-center text-base-100 mb-10">
        <h2 className="text-5xl font-bold mb-4">All Blogs</h2>
        <p className="mb-6 text-base-100/90">
          Explore our latest articles, tips, and resources.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AllBlog.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body text-left">
                <h3 className="card-title text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-base-content/70">{blog.excerpt}</p>
                <div className="card-actions mt-4">
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="btn btn-secondary btn-sm hover:btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
