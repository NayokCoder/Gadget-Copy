import React from "react";

const blogs = [
  {
    id: 1,
    title: "Gizmodo",
    description:
      "Gizmodo serves as a vibrant nexus of technology, science, and pop culture, offering readers a dynamic blend of cutting-edge tech innovations, gadget reviews, and the latest in digital trends. With a pulse on the ever-evolving world of science fiction, futurism, and digital lifestyle...",
    imageUrl: "https://via.placeholder.com/80",
    website: "gizmodo.com",
    followers: {
      facebook: "1.4M",
      twitter: "2.7M",
      instagram: "125.9K",
    },
    frequency: "5 posts/day",
    domainAuthority: 93,
  },
  {
    id: 2,
    title: "Ubergizmo",
    description:
      "The Ubergizmo Blog keeps readers up to date on the latest innovations in consumer technology, providing in-depth reviews, news, and analysis on smartphones, gadgets, AI, and emerging tech trends. Each post breaks down complex technologies into accessible insights...",
    imageUrl: "https://via.placeholder.com/80",
    website: "ubergizmo.com",
    followers: {
      facebook: "38.1K",
      twitter: "13.5K",
      instagram: "1.2K",
    },
    frequency: "1 post/day",
    domainAuthority: 88,
  },
];

const GadgetBlogList = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        90 Best Gadget Blogs and Websites in 2024
      </h1>

      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col sm:flex-row"
        >
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-20 h-20 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {index + 1}.{" "}
              <a
                href={`https://${blog.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.title}
              </a>
            </h2>
            <p className="text-gray-700 mb-3">{blog.description}</p>
            <div className="text-gray-600 mb-3">
              <span className="font-medium">Blog:</span> {blog.website} ·
              <span className="ml-2 font-medium">Followers:</span> Facebook{" "}
              {blog.followers.facebook}, Twitter {blog.followers.twitter},
              Instagram {blog.followers.instagram} ·
              <span className="ml-2 font-medium">Frequency:</span>{" "}
              {blog.frequency} ·
              <span className="ml-2 font-medium">Domain Authority:</span>{" "}
              {blog.domainAuthority}
            </div>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
              Get Email Contact
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GadgetBlogList;
