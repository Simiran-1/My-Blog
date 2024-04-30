import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      {/* Add your blog posts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example blog post */}
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
        </div>
        {/* Example blog post */}
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
        </div>
        {/* Example blog post */}
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
